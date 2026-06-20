/**
 * verify.js — E2E 회귀 테스트 (베트남어 단어장 PWA)
 *
 * 무엇을 검사하나:
 *   1) 부팅       — 데이터 로드 / 홈 렌더 / 백업 배너
 *   2) 스피드런   — 시작 → 오답 누적 → 게임오버 → 재시작 풀사이클
 *   3) TTS cancel — 받아쓰기 중 화면 이탈 시 오디오 정지
 *
 * 실행 (레포 루트에서):
 *   node tests/verify.js
 *
 * 통과 기준: "✅ JS 에러 0" + 각 줄 기대값 일치
 * 주의: 헤드리스 브라우저에 가짜 데이터를 주입해 돌리므로
 *       실제 학습 데이터는 전혀 건드리지 않습니다.
 */
const { chromium } = require('playwright');
const path = require('path');
const APP = 'file://' + path.resolve(__dirname, '..', 'index.html');
const W=[]; for(let i=0;i<30;i++) W.push({vi:'tu'+i,ko:'뜻'+i});
const dk=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const log={}; for(let i=0;i<20;i++){const d=new Date();d.setDate(d.getDate()-i);log[dk(d)]={c:5,w:1};}
const srs={}; for(let i=0;i<30;i++){const m=i<8;srs['tu'+i]={easiness:2.5,interval:m?25:5,reps:m?6:2,nextReview:Date.now()-86400000,wrongCount:(i%3),lastSeen:Date.now()};}
(async()=>{
  const b=await chromium.launch({args:['--no-sandbox']});
  const ctx=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2, acceptDownloads:true});
  await ctx.addInitScript(([w,s,l])=>{localStorage.setItem('viet-words-v1',JSON.stringify(w));localStorage.setItem('viet-v5',JSON.stringify({version:1,srs:s,log:l}));localStorage.removeItem('viet-last-backup');},[W,srs,log]);
  const pg=await ctx.newPage(); const errs=[]; pg.on('pageerror',e=>errs.push('PE:'+e.message)); pg.on('console',m=>{if(m.type()==='error'&&!/403|fonts|Failed to load resource/.test(m.text()))errs.push('CE:'+m.text());});
  await pg.goto(APP,{waitUntil:'load'});
  await pg.evaluate(async()=>{if(document.fonts)await document.fonts.ready;});
  await pg.waitForTimeout(300);

  // 1) 부팅 + 홈 + 배너
  const boot=await pg.evaluate(`({err:App.loadError, ring:!!document.querySelector('.ring-zone'), learned:Store.learned, banner:document.querySelector('.bak-banner')?.className||'none'})`);
  console.log('1) 부팅: loadError='+boot.err+' 홈='+boot.ring+' learned='+boot.learned+' 배너='+boot.banner+' (urgent기대)');

  // 2) 게임 E2E
  await pg.evaluate(`srOpen(); srStart(); srSkipCountdown();`);
  const q=await pg.evaluate(`({phase:SR.phase, cur:!!SR.cur, anim:!!SR.animHandler})`);
  for(let k=0;k<3;k++){ await pg.evaluate(`(()=>{ if(SR.sub==='play'&&SR.cur&&!SR.locked){const w=SR.cur.options.find(o=>o.vi!==SR.cur.correctVi); srAnswer(w.vi);} })()`); await pg.waitForTimeout(1300); }
  const over=await pg.evaluate(`({sub:SR.sub, wl:SR.wrongList.length, missed:!!document.querySelector('.sr-missed')})`);
  await pg.evaluate(`srStart(true);`); await pg.waitForTimeout(700);
  const restart=await pg.evaluate(`({hearts:SR.hearts, score:SR.score, wl:SR.wrongList.length, phase:SR.phase})`);
  await pg.evaluate(`srClearTimer(); srExit(true);`);
  console.log('2) 게임: 시작 phase='+q.phase+' 문제='+q.cur+' 타이머='+q.anim+' | 오버 sub='+over.sub+' 놓친단어='+over.wl+' 표시='+over.missed+' | 재시작 hearts='+restart.hearts+' score='+restart.score+' wl='+restart.wl);

  // 3) TTS cancel (받아쓰기→이탈)
  await pg.evaluate(`window.__cc=0; const o=window.speechSynthesis.cancel.bind(window.speechSynthesis); window.speechSynthesis.cancel=()=>{window.__cc++;try{o();}catch(e){}};`);
  let dlg=false; pg.on('dialog',d=>{dlg=true;d.accept();});
  await pg.evaluate(`goHome(); startQuiz('dictation');`); await pg.waitForTimeout(400);
  await pg.evaluate(`window.__cc=0; setTab(3);`); await pg.waitForTimeout(150);
  const cc=await pg.evaluate(`window.__cc`);
  console.log('3) TTS: 받아쓰기→탭이탈 시 cancel 호출='+cc+' (>=1 기대)');

  await b.close();
  console.log(errs.length?'❌ 에러:\n'+errs.join('\n'):'✅ JS 에러 0');
})();
