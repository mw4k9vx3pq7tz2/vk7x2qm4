/* ═══════════════════════════════════════════════════════════════
   4강 · 자음 (B/C/D/Đ/G/H/K/L/M) 데이터
═══════════════════════════════════════════════════════════════ */
LECTURES[4] = {
  id: 4,
  title: '자음 B~M',
  subtitle: 'B, C, D, Đ, G, H, K, L, M',
  emoji: '🔤',
  chapters: [
    { id: 0, title: '문자표',  emoji: '📋' },
    { id: 1, title: 'B/C/D/Đ', emoji: '🔤' },
    { id: 2, title: 'G/H/K',  emoji: '🔤' },
    { id: 3, title: 'L/M',    emoji: '🔤' },
    { id: 4, title: 'Đ 특훈', emoji: '💪' },
    { id: 5, title: '정리',   emoji: '✅' },
  ],
  screens: [renderL4C0, renderL4C1, renderL4C2, renderL4C3, renderL4C4, renderL4C5],
};

/* ─── 4강 Ch0: 오늘의 문자표 ─── */
function renderL4C0() {
  const today   = ['B','C','D','Đ','G','H','K','L','M'];
  const later   = ['N','P','Q','R','S','T','V','X'];

  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">📋 4강 오늘의 문자 (자음)</div>
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin-bottom:8px;">
        ${today.map(c=>`
        <div style="text-align:center;padding:12px 4px;border-radius:10px;background:#2a0a1a;border:1.5px solid var(--red);">
          <span style="font-size:22px;font-weight:700;color:var(--red);">${c}</span>
        </div>`).join('')}
      </div>
      <div style="font-size:11px;color:var(--muted);margin-bottom:10px;">★ 빨간색 = 오늘 배울 자음</div>
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;">
        ${later.map(c=>`
        <div style="text-align:center;padding:12px 4px;border-radius:10px;background:var(--bg);border:1.5px solid var(--border);">
          <span style="font-size:22px;font-weight:700;color:#f0e6ff;">${c}</span>
        </div>`).join('')}
      </div>
      <div style="font-size:11px;color:var(--dim);margin-top:8px;">다음 강의에서 배울 자음</div>
    </div>
  </div>`;
}

/* ─── 4강 Ch1: B / C / D / Đ ─── */
function renderL4C1() {
  const consonants = [
    { char:'B', label:'bờ', sound:'버',
      note:'',
      examples:[
        {vi:'bác', ko:'아저씨', pron:'박'},
        {vi:'bận', ko:'바쁜',   pron:'번/벙'},
        {vi:'bốn', ko:'4(숫자)', pron:'본/봉'},
      ]},
    { char:'C', label:'cờ', sound:'꺼',
      note:"첫자음: [ㄲ] / 끝자음: [ㄱ, ㅂ]<br>• 보통 'ㄱ' 받침으로 발음 (ex. các 깍, bác 박)<br>• 단모음 o, ô, u 뒤에 올 경우 'ㅂ' 받침 (ex. học 헙, cốc 꼽)",
      examples:[
        {vi:'các', ko:'~들(복수형)',  pron:'깍'},
        {vi:'đọc', ko:'읽다',         pron:'덥'},
        {vi:'cái', ko:'~개(종별사)',  pron:'까이'},
      ]},
    { char:'D', label:'dờ', sound:'저',
      note:'북부: [ㅈ] / 남부: [ㅇ(y)]',
      examples:[
        {vi:'dài', ko:'긴',    pron:'자이/야이'},
        {vi:'dễ',  ko:'쉬운',  pron:'제/예'},
        {vi:'dạ',  ko:'네(대답)', pron:'자/야'},
      ]},
    { char:'Đ', label:'đờ', sound:'더',
      note:'\'ㄷ\'을 내뱉으며 \'ㄹ\' 발음하듯 혀 굴리기. 혀끝을 입천장 가운데에 튕기며',
      examples:[
        {vi:'đâu', ko:'어디',       pron:'더우'},
        {vi:'đó',  ko:'그, 그것',   pron:'더'},
        {vi:'đã',  ko:'이미 ~했다', pron:'다'},
      ]},
  ];

  return `<div class="screen-scroll">
    ${consonants.map(c=>`
    <div class="card">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
        <div style="width:56px;height:56px;border:2px solid var(--accent);border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:var(--bg);overflow:hidden;flex-shrink:0;">
          <span style="font-size:24px;font-weight:700;color:var(--accent);">${c.char}</span>
          <span style="font-size:9px;color:var(--dim);text-align:center;padding:0 2px;">${c.label} · ${c.sound}</span>
        </div>
        <div>
          <div style="font-size:16px;font-weight:700;color:#f0e6ff;">[${c.sound}]</div>
          ${c.note?`<div style="font-size:11px;color:var(--muted);margin-top:2px;">${c.note}</div>`:''}
        </div>
      </div>
      ${c.examples.map(e=>`
      <div onclick="TTS.speak('${e.vi}')" class="list-item" style="cursor:pointer;">
        <div>
          <span style="font-family:monospace;font-size:18px;font-weight:700;color:var(--accent);">${e.vi}</span>
          <span style="font-size:12px;color:var(--muted);margin-left:8px;">${e.ko}</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:11px;color:var(--dim);">[${e.pron}]</span>
          <span style="opacity:.5">🔊</span>
        </div>
      </div>`).join('')}
    </div>`).join('')}
  </div>`;
}

/* ─── 4강 Ch2: G / H / K ─── */
function renderL4C2() {
  const consonants = [
    { char:'G', label:'gờ', sound:'거',
      note:'',
      examples:[
        {vi:'gọi', ko:'부르다, 전화하다', pron:'거이'},
        {vi:'gửi', ko:'보내다',           pron:'그이'},
        {vi:'gà',  ko:'닭',              pron:'가'},
      ]},
    { char:'H', label:'hờ', sound:'허',
      note:'',
      examples:[
        {vi:'hát', ko:'노래하다',    pron:'한/학'},
        {vi:'hay', ko:'좋은, 잘하는', pron:'하이'},
        {vi:'hai', ko:'2(숫자)',     pron:'하이'},
      ]},
    { char:'K', label:'ca', sound:'까',
      note:'',
      examples:[
        {vi:'kéo',      ko:'가위',  pron:'깨오'},
        {vi:'kem',      ko:'아이스크림', pron:'깸'},
        {vi:'ki lô mét',ko:'km',   pron:'끼 로 맨/끼 로 맥'},
      ]},
  ];

  return `<div class="screen-scroll">
    ${consonants.map(c=>`
    <div class="card">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
        <div style="width:56px;height:56px;border:2px solid var(--accent);border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:var(--bg);overflow:hidden;flex-shrink:0;">
          <span style="font-size:24px;font-weight:700;color:var(--accent);">${c.char}</span>
          <span style="font-size:9px;color:var(--dim);text-align:center;padding:0 2px;">${c.label} · ${c.sound}</span>
        </div>
        <div>
          <div style="font-size:16px;font-weight:700;color:#f0e6ff;">[${c.sound}]</div>
          ${c.note?`<div style="font-size:11px;color:var(--muted);margin-top:2px;">${c.note}</div>`:''}
        </div>
      </div>
      ${c.examples.map(e=>`
      <div onclick="TTS.speak('${e.vi}')" class="list-item" style="cursor:pointer;">
        <div>
          <span style="font-family:monospace;font-size:18px;font-weight:700;color:var(--accent);">${e.vi}</span>
          <span style="font-size:12px;color:var(--muted);margin-left:8px;">${e.ko}</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:11px;color:var(--dim);">[${e.pron}]</span>
          <span style="opacity:.5">🔊</span>
        </div>
      </div>`).join('')}
    </div>`).join('')}
  </div>`;
}

/* ─── 4강 Ch3: L / M ─── */
function renderL4C3() {
  const consonants = [
    { char:'L', label:'lờ', sound:'러',
      note:'',
      examples:[
        {vi:'làm',  ko:'하다, 일하다', pron:'람'},
        {vi:'luôn', ko:'늘, 항상',     pron:'루온/룽'},
        {vi:'lắm',  ko:'매우',         pron:'람'},
      ]},
    { char:'M', label:'mờ', sound:'머',
      note:'첫자음: [ㅁ] / 끝자음: [ㅁ]',
      examples:[
        {vi:'mũ',   ko:'모자',  pron:'무'},
        {vi:'xem',  ko:'보다',  pron:'쌤'},
        {vi:'mới',  ko:'새로운', pron:'머이'},
      ]},
  ];

  return `<div class="screen-scroll">
    ${consonants.map(c=>`
    <div class="card">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
        <div style="width:56px;height:56px;border:2px solid var(--accent);border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:var(--bg);overflow:hidden;flex-shrink:0;">
          <span style="font-size:24px;font-weight:700;color:var(--accent);">${c.char}</span>
          <span style="font-size:9px;color:var(--dim);text-align:center;padding:0 2px;">${c.label} · ${c.sound}</span>
        </div>
        <div>
          <div style="font-size:16px;font-weight:700;color:#f0e6ff;">[${c.sound}]</div>
          ${c.note?`<div style="font-size:11px;color:var(--muted);margin-top:2px;">${c.note}</div>`:''}
        </div>
      </div>
      ${c.examples.map(e=>`
      <div onclick="TTS.speak('${e.vi}')" class="list-item" style="cursor:pointer;">
        <div>
          <span style="font-family:monospace;font-size:18px;font-weight:700;color:var(--accent);">${e.vi}</span>
          <span style="font-size:12px;color:var(--muted);margin-left:8px;">${e.ko}</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:11px;color:var(--dim);">[${e.pron}]</span>
          <span style="opacity:.5">🔊</span>
        </div>
      </div>`).join('')}
    </div>`).join('')}
    <div class="card">
      <div class="section-title">📖 연습 문장</div>
      ${[
        {vi:'Bận lắm.', ko:'엄청 바빠.',      pron:'번 람/벙 람'},
        {vi:'Dễ mà.',   ko:'쉽잖아/쉬운 걸.', pron:'제 마/예 마'},
      ].map(s=>`
      <div onclick="TTS.speak('${s.vi}')" class="list-item" style="cursor:pointer;">
        <div>
          <div style="font-family:monospace;font-size:16px;font-weight:700;color:var(--accent);">${s.vi}</div>
          <div style="font-size:12px;color:var(--muted);margin-top:2px;">${s.ko}</div>
          <div style="font-size:11px;color:var(--dim);">[${s.pron}]</div>
        </div>
        <span style="font-size:20px;opacity:.5;flex-shrink:0;">🔊</span>
      </div>`).join('')}
    </div>
  </div>`;
}

/* ─── 4강 Ch4: Đ 발음 특훈 ─── */
function renderL4C4() {
  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">💪 Đ 발음 고민 해결!</div>
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
        <div style="width:64px;height:64px;border:2px solid var(--accent);border-radius:14px;display:flex;align-items:center;justify-content:center;background:var(--bg);flex-shrink:0;">
          <span style="font-size:32px;font-weight:700;color:var(--accent);">Đ</span>
        </div>
        <div>
          <div style="font-size:15px;font-weight:700;color:#f0e6ff;margin-bottom:6px;">발음 방법</div>
          <div style="font-size:13px;color:var(--muted);line-height:1.8;">
            ✓ 'ㄷ'을 내뱉으며, 'ㄹ' 발음을 하듯 혀 굴리기<br>
            ✓ 혀끝을 입천장 가운데에 튕기며
          </div>
        </div>
      </div>

      <div style="font-size:13px;font-weight:700;color:var(--accent);margin-bottom:8px;">반복 연습 — ĐA, ĐE, ĐI, ĐO, ĐU (5번씩!)</div>
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin-bottom:12px;">
        ${['ĐA','ĐE','ĐI','ĐO','ĐU'].map(s=>`
        <div onclick="TTS.speak('${s.toLowerCase()}')" style="text-align:center;background:var(--bg);border:1.5px solid var(--border);border-radius:10px;padding:10px 4px;cursor:pointer;">
          <div style="font-family:monospace;font-size:18px;font-weight:700;color:var(--red);">${s}</div>
        </div>`).join('')}
      </div>
      <button onclick="playDPractice()" class="btn-full">🔊 순서대로 듣기</button>
    </div>

    <div class="card">
      <div class="section-title">📖 Đ 예시 단어</div>
      ${[
        {vi:'đẹp', ko:'예쁜',        pron:'댑'},
        {vi:'đúng',ko:'옳은, 정확한', pron:'둠'},
        {vi:'đau', ko:'아픈',         pron:'다우'},
        {vi:'đi',  ko:'가다',         pron:'디'},
      ].map(e=>`
      <div onclick="TTS.speak('${e.vi}')" class="list-item" style="cursor:pointer;">
        <div>
          <span style="font-family:monospace;font-size:18px;font-weight:700;color:var(--accent);">${e.vi}</span>
          <span style="font-size:12px;color:var(--muted);margin-left:8px;">${e.ko}</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:11px;color:var(--dim);">[${e.pron}]</span>
          <span style="opacity:.5">🔊</span>
        </div>
      </div>`).join('')}
    </div>

    <div class="card">
      <div class="section-title">📖 연습 문장</div>
      ${[
        {vi:'Đó là gì?',    ko:'그건 뭐야?',      pron:'더 라 지/더 라 (ㅖ)이'},
        {vi:'Đọc sách.',    ko:'책을 읽다.',        pron:'덥 싸익/덥 싿'},
        {vi:'Ăn kem.',      ko:'아이스크림을 먹다.', pron:'안 깸/앙 깸'},
        {vi:'Gọi món.',     ko:'음식을 주문하다.',   pron:'거이 먼/거이 멍'},
        {vi:'Hát hay!',     ko:'노래 잘 부른다!',   pron:'한 하이/학 하이'},
        {vi:'Làm bài.',     ko:'숙제를 하다.',      pron:'람 바이'},
        {vi:'Đội mũ.',      ko:'모자를 쓰다.',      pron:'도이 무'},
      ].map(s=>`
      <div onclick="TTS.speak('${s.vi}')" class="list-item" style="cursor:pointer;">
        <div>
          <div style="font-family:monospace;font-size:15px;font-weight:700;color:var(--accent);">${s.vi}</div>
          <div style="font-size:12px;color:var(--muted);margin-top:2px;">${s.ko}</div>
          <div style="font-size:11px;color:var(--dim);">[${s.pron}]</div>
        </div>
        <span style="font-size:20px;opacity:.5;flex-shrink:0;">🔊</span>
      </div>`).join('')}
    </div>
  </div>`;
}

/* ─── 4강 Ch5: 정리 ─── */
function renderL4C5() {
  const consonants = [
    {c:'B', s:'버'}, {c:'C', s:'꺼'}, {c:'D', s:'저'},
    {c:'Đ', s:'더'}, {c:'G', s:'거'}, {c:'H', s:'허'},
    {c:'K', s:'까'}, {c:'L', s:'러'}, {c:'M', s:'머'},
  ];

  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">✅ 4강 자음 정리</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
        ${consonants.map(v=>`
        <div onclick="TTS.speak('${v.c.toLowerCase()}a')" style="text-align:center;background:var(--bg);border:1.5px solid var(--border);border-radius:12px;padding:12px 8px;cursor:pointer;">
          <div style="font-size:26px;font-weight:700;color:var(--accent);">${v.c}</div>
          <div style="font-size:12px;color:var(--muted);margin-top:3px;">[${v.s}]</div>
        </div>`).join('')}
      </div>
    </div>

    <div class="card" style="border-color:#6e5000;background:#1a1200;">
      <div style="font-size:13px;font-weight:700;color:var(--accent);margin-bottom:8px;">📚 오늘의 숙제</div>
      <div onclick="TTS.speak('Anh đang ở đâu')" style="cursor:pointer;">
        <div style="font-family:monospace;font-size:22px;font-weight:700;color:var(--accent);">Anh đang ở đâu?</div>
        <div style="font-size:12px;color:var(--muted);margin-top:6px;">형/오빠 지금 어디 있어요? [아잉 당 어 더우/안 당 어 더우]</div>
        <div style="font-size:11px;color:var(--dim);margin-top:4px;">음원 듣고 5번씩 따라 읽기! ○ ○ ○ ○ ○</div>
      </div>
    </div>
  </div>`;
}

function playDPractice() {
  const words = ['đa','đe','đi','đo','đu'];
  let i = 0;
  function next() { if(i>=words.length)return; TTS.speak(words[i]); i++; setTimeout(next,1000); }
  next();
}
