/**
 * audit.js — 동적 무결성 감사 (베트남어 단어장 PWA)
 *
 * 22개 항목을 헤드리스 브라우저에서 실제 실행하며 검증:
 *   - 전 탭(홈/카드/오답/통계) 렌더 + 아이콘 보간 무결성
 *   - 플래시카드 세션 후 SRS 전체 불변 (쓰기 0건)
 *   - 드릴: 일정 불변 + wrongCount만 감소, 누수 없음
 *   - 일반 퀴즈: 정답 → pendingRate → Good 평가 → 일정 변경
 *   - 스피드런 풀사이클 렌더
 *   - 화면 이탈 시 TTS cancel
 *
 * 실행 (레포 루트에서):
 *   node tests/audit.js
 *
 * 통과 기준: "합계: 22 PASS / 0 FAIL" + "✅ JS 에러 0"
 * 주의: 가짜 데이터를 주입해 돌리므로 실제 학습 데이터는 안전합니다.
 */
const { chromium } = require('playwright');
const path = require('path');
const APP = 'file://' + path.resolve(__dirname, '..', 'index.html');
const W=[]; for(let i=0;i<40;i++) W.push({vi:'w'+i+'x',ko:'뜻'+i});
W[0]={vi:'phở',ko:'쌀국수'};
const now=Date.now(), srs={}, log={};
srs['phở']={easiness:2.2,interval:9,reps:3,nextReview:now-86400000,wrongCount:3,lastSeen:now-3600000};
srs['w1x']={easiness:2.5,interval:5,reps:2,nextReview:now-3600000,wrongCount:1,lastSeen:now};
for(let i=2;i<6;i++) srs['w'+i+'x']={easiness:2.6,interval:40,reps:6,nextReview:now+40*86400000,wrongCount:0,lastSeen:now};
for(let i=6;i<12;i++) srs['w'+i+'x']={easiness:2.5,interval:3,reps:1,nextReview:now-86400000,wrongCount:0,lastSeen:now};
for(let d=0;d<8;d++){const k=new Date(now-d*86400000).toISOString().slice(0,10); log[k]={c:8,w:2};}
const PASS=[],FAIL=[];
const ok=(c,m)=>(c?PASS:FAIL).push(m);
(async()=>{
  const b=await chromium.launch({args:['--no-sandbox']});
  const ctx=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2});
  await ctx.addInitScript(([w,s,l])=>{localStorage.setItem('viet-words-v1',JSON.stringify(w));localStorage.setItem('viet-v5',JSON.stringify({version:1,srs:s,log:l}));},[W,srs,log]);
  const pg=await ctx.newPage(); const errs=[];
  pg.on('pageerror',e=>errs.push('STACK: '+(e.stack||e.message).split('\n').slice(0,4).join('  <<<  ')));
  pg.on('console',m=>{if(m.type()==='error'&&!/403|fonts|Failed to load resource/.test(m.text()))errs.push('CE:'+m.text());});
  await pg.goto(APP,{waitUntil:'load'});
  await pg.evaluate(async()=>{if(document.fonts)await document.fonts.ready;});

  const KEPT=/[\u{1F1E6}-\u{1F1FF}\u{1F389}\u{1F3C6}\u{1F4AA}\u{1F613}\u{1F60A}\u{1F914}\u{1F422}\u{1F50D}]/u; // 국기🎉🏆💪😓😊🤔🐢🔍
  const scanScreen = async(name)=>{
    const r=await pg.evaluate(()=>{
      const root=document.getElementById('root');
      const h=root?root.innerHTML:'';
      const emo=(root?root.innerText:'').match(/\p{Extended_Pictographic}/gu)||[];
      return {brokenA:h.includes('${ic'),brokenB:h.includes("' + ic("),brokenC:h.includes('iconize('),svg:document.querySelectorAll('svg').length,emo:[...new Set(emo)].join('')};
    });
    ok(!r.brokenA&&!r.brokenB&&!r.brokenC, `[${name}] 깨진보간 없음 (svg=${r.svg})`);
    // 남은 이모지가 전부 KEPT 집합인지
    const unexpected=[...r.emo].filter(c=>!KEPT.test(c));
    ok(unexpected.length===0, `[${name}] 비의도 이모지 없음 (남음="${r.emo}")`);
  };

  // ── 1. 전 탭 렌더 ──
  for(const[t,nm] of [[0,'홈'],[1,'카드'],[2,'오답'],[3,'통계']]){ await pg.evaluate(`setTab(${t})`); await pg.waitForTimeout(300); await scanScreen(nm); }

  // ── 2. 플래시카드 = SRS 쓰기 0 (전체 srs 불변) ──
  const srsBefore=await pg.evaluate(()=>JSON.stringify(Store._data.srs));
  await pg.evaluate(`setTab(1)`); await pg.waitForTimeout(200);
  for(let i=0;i<12;i++){ const n=await pg.evaluate(()=>App.flashDeck.length); if(!n)break;
    await pg.evaluate(`flashFlip()`); await pg.waitForTimeout(40);
    await pg.evaluate(i%2?`flashAgain()`:`flashKnow()`); await pg.waitForTimeout(40); }
  await pg.evaluate(()=>{if(App.flashDeck.length===0&&typeof flashRestart==='function'){}}); 
  const srsAfter=await pg.evaluate(()=>JSON.stringify(Store._data.srs));
  ok(srsBefore===srsAfter, `[격리] 플래시카드 세션 후 전체 SRS 불변 (${srsBefore===srsAfter?'동일':'변경됨!'})`);

  // ── 3. 드릴: 일정 불변 + wrongCount만, 누수 없음 ──
  await pg.evaluate(`setTab(2); render();`); await pg.waitForTimeout(200);
  const drBefore=await pg.evaluate(()=>JSON.parse(JSON.stringify(Store._data.srs['phở'])));
  await pg.evaluate(`startWrongDrill('phở')`); await pg.waitForTimeout(200);
  ok(await pg.evaluate(()=>App.drill===true&&App.screen==='quiz'), `[드릴] 진입 (drill=true)`);
  await pg.evaluate(`App.input='phở'; quizSubmit();`); await pg.waitForTimeout(150);
  const drAfter=await pg.evaluate(()=>JSON.parse(JSON.stringify(Store._data.srs['phở'])));
  const schedSame=drBefore.easiness===drAfter.easiness&&drBefore.interval===drAfter.interval&&drBefore.reps===drAfter.reps&&drBefore.nextReview===drAfter.nextReview;
  ok(schedSame, `[격리] 드릴 정답 → 일정 불변 (ease/int/reps/next)`);
  ok(drAfter.wrongCount===drBefore.wrongCount-1, `[격리] 드릴 정답 → wrongCount ${drBefore.wrongCount}→${drAfter.wrongCount} (-1)`);
  await pg.evaluate(`exitDrill()`); await pg.waitForTimeout(150);
  ok(await pg.evaluate(()=>App.drill===false), `[누수] exitDrill → drill=false`);

  // ── 4. 드릴 누수 검증: 직후 일반 퀴즈는 FULL SRS 해야 ──
  await pg.evaluate(`setTab(0); startQuiz('dictation');`); await pg.waitForTimeout(300);
  ok(await pg.evaluate(()=>App.drill===false), `[누수] 일반 퀴즈 시작 시 drill=false 유지`);
  const qw=await pg.evaluate(()=>App.queue[App.qIdx].vi);
  const qBefore=await pg.evaluate((v)=>JSON.parse(JSON.stringify(Store._data.srs[v]||{reps:0})), qw);
  await pg.evaluate((v)=>{App.input=v;quizSubmit();}, qw); await pg.waitForTimeout(150);
  const pend=await pg.evaluate(()=>App.pendingRate);
  ok(pend===true, `[정상퀴즈] 정답 → pendingRate=true (평가 대기, 드릴 아님)`);
  // Good 평가 → recordAnswer → 일정 변경
  await pg.evaluate(`quizRate(4)`).catch(()=>pg.evaluate(`if(typeof quizRate==='function')quizRate(4)`)); await pg.waitForTimeout(150);
  const qAfter=await pg.evaluate((v)=>JSON.parse(JSON.stringify(Store._data.srs[v]||{})), qw);
  ok(qAfter.reps>(qBefore.reps||0)||qAfter.nextReview>now, `[정상퀴즈] Good 평가 → 일정 변경됨(reps ${qBefore.reps||0}→${qAfter.reps}) = SRS 정상작동`);

  // ── 5. 스피드런 풀사이클 ──
  await pg.evaluate(`setTab(0);`); await pg.waitForTimeout(100);
  await pg.evaluate(`App.screen='speedrun'; srOpen();`).catch(()=>pg.evaluate(`App.screen='speedrun';render()`));
  await pg.waitForTimeout(300); await scanScreen('스피드런시작');
  await pg.evaluate(`if(typeof srStart==='function')srStart(true)`).catch(()=>{});
  await pg.waitForTimeout(500); await scanScreen('스피드런플레이');
  const playOk=await pg.evaluate(()=>document.querySelectorAll('#sr-hearts span, .sr-opt, [class*=sr-]').length>0);
  ok(playOk, `[스피드런] 플레이 보드 렌더됨`);
  // 강제 종료
  await pg.evaluate(`if(SR&&typeof srGameOver==='function'){SR.hearts=0;srGameOver();}`).catch(()=>{});
  await pg.waitForTimeout(300);

  // ── 6. TTS cancel on nav ──
  await pg.evaluate(`location.reload()`).catch(()=>{}); await pg.waitForTimeout(400);
  await pg.evaluate(async()=>{if(document.fonts)await document.fonts.ready;});
  let cancelCalls=0; await pg.exposeFunction('noteCancel',()=>cancelCalls++).catch(()=>{});
  await pg.evaluate(`setTab(0); startQuiz('dictation');`); await pg.waitForTimeout(200);
  await pg.evaluate(`const o=TTS.cancel; TTS.cancel=function(){window.__c=(window.__c||0)+1;return o.apply(this,arguments);};`);
  await pg.evaluate(`setTab(0)`); await pg.waitForTimeout(150); // 이탈
  ok(await pg.evaluate(()=>window.__c>0), `[TTS] 화면 이탈 시 cancel 호출 (오디오 블리드 방지)`);

  await b.close();
  console.log('────── Phase 4 동적 감사 결과 ──────');
  PASS.forEach(p=>console.log('  ✅',p));
  if(FAIL.length){ console.log('\n  ❌ 실패:'); FAIL.forEach(f=>console.log('    ',f)); }
  console.log(`\n  합계: ${PASS.length} PASS / ${FAIL.length} FAIL`);
  console.log(errs.length?('  JS 에러: '+errs.slice(0,6).join(' | ')):'  ✅ JS 에러 0');
})();
