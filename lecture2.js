/* ═══════════════════════════════════════════════════════════════
   2강 · 모음 (A~Ê) 데이터
═══════════════════════════════════════════════════════════════ */
LECTURES[2] = {
  id: 2,
  title: '모음 A~Ê',
  subtitle: 'A, Ă, Â, E, Ê, I, Y',
  emoji: '🅰️',
  chapters: [
    { id: 0, title: '문자표',   emoji: '🔤' },
    { id: 1, title: 'A/Ă/Â',  emoji: '🅰️' },
    { id: 2, title: 'E/Ê/I/Y', emoji: '📝' },
    { id: 3, title: 'e vs ê',  emoji: '👄' },
    { id: 4, title: '정리',    emoji: '✅' },
  ],
  screens: [renderL2C0, renderL2C1, renderL2C2, renderL2C3, renderL2C4],
};

/* ─── 2강 Ch0: 전체 문자표 ─── */
function renderL2C0() {
  const allChars = ['A','Ă','Â','B','C','D','Đ','E','Ê','G','H','I','K','L','M','N','O','Ô','Ơ','P','Q','R','S','T','U','Ư','V','X','Y'];
  const special  = ['Ă','Â','Đ','Ê','Ô','Ơ','Ư'];
  const today    = [['A','Ă','Â'],['E','Ê',''],['I','Y',''],['O','Ô','Ơ'],['U','Ư','']];

  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">🔤 베트남어 전체 문자</div>
      <div class="info-text" style="margin-bottom:10px;">총 12개 모음, 17개 자음으로 구성</div>
      <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:4px;margin-bottom:10px;">
        ${allChars.map(c=>`
        <div style="text-align:center;padding:8px 4px;border-radius:8px;background:var(--bg);border:1px solid ${special.includes(c)?'var(--accent)':'var(--border)'};">
          <span style="font-size:16px;font-weight:700;color:${special.includes(c)?'var(--accent)':'#f0e6ff'};">${c}</span>
        </div>`).join('')}
      </div>
      <div style="font-size:11px;color:var(--accent);background:#1a1200;border:1px solid #6e5000;border-radius:10px;padding:8px 10px;">
        ★ F, J, W, Z 대신 <span style="font-weight:700">Ă, Â, Đ, Ê, Ô, Ơ, Ư</span> 추가
      </div>
    </div>
    <div class="card">
      <div class="section-title">📋 오늘의 문자 (모음)</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;">
        ${today.map(row=>row.map(c=>`
        <div style="text-align:center;padding:12px 4px;border-radius:10px;background:var(--bg);border:1.5px solid ${c?'var(--border)':'transparent'};">
          ${c?`<span style="font-size:22px;font-weight:700;color:${['Ă','Â','Ê','Ô','Ơ','Ư','Y'].includes(c)?'var(--accent)':'#f0e6ff'};">${c}</span>`:''}
        </div>`).join('')).join('')}
      </div>
      <div style="font-size:11px;color:var(--accent);margin-top:8px;">★ 노란색 = 베트남어 특수 문자</div>
    </div>
  </div>`;
}

/* ─── 2강 Ch1: A / Ă / Â ─── */
function renderL2C1() {
  const vowels = [
    { char:'A', label:'a', sound:'아',        desc:'입을 크게 벌려 발음하는 기본 [아] 소리',
      examples:[{vi:'anh',  ko:'형, 오빠',        pron:'아잉/안'},{vi:'bạn', ko:'친구, 너',        pron:'반/방'},{vi:'là',  ko:'~이다',          pron:'라'}]},
    { char:'Ă', label:'ă', sound:'아↗ (짧게)', desc:'짧고 위로 올라가는 [아] 소리. 입을 살짝만 벌리기',
      examples:[{vi:'ăn',   ko:'먹다',            pron:'안/앙'},{vi:'tắc', ko:'막히다',           pron:'딱'},{vi:'bằng',ko:'~로(수단, 방법)',  pron:'방'}]},
    { char:'Â', label:'â', sound:'어↗ (짧게)', desc:'짧고 올라가는 [어] 소리. 입을 조금만 벌리기',
      examples:[{vi:'bận',  ko:'바쁜',             pron:'번/벙'},{vi:'vâng',ko:'네(대답)',         pron:'벙/영'},{vi:'sân', ko:'운동장',         pron:'썬/썽'}]},
  ];
  return renderVowelCards(vowels);
}

/* ─── 2강 Ch2: E / Ê / I / Y ─── */
function renderL2C2() {
  const vowels = [
    { char:'E', label:'e',      sound:'애',       desc:'입으로 내는 맑은 [애] 소리. 입을 가로로 길게 벌리기',
      examples:[{vi:'đẹp',ko:'예쁜',    pron:'댑'},{vi:'em', ko:'동생, 너',pron:'앰'},{vi:'xem',ko:'보다',    pron:'쌤'}]},
    { char:'Ê', label:'ê',      sound:'에',       desc:'목을 벌려 소리 내는 [에] 소리. 입을 세로로 적당히 벌리기',
      examples:[{vi:'thế',ko:'그러면',  pron:'테'},{vi:'tên',ko:'이름',    pron:'뗀'},{vi:'về', ko:'돌아가다/오다',pron:'베/예'}]},
    { char:'I', label:'i ngắn', sound:'이 (응안)', desc:'짧은 [이] 소리',
      examples:[{vi:'xin',   ko:'청하다', pron:'씬'},{vi:'tắc-xi',ko:'택시',pron:'딱씨'},{vi:'đi',ko:'가다',pron:'디'}]},
    { char:'Y', label:'y dài',  sound:'이 (자이)', desc:'긴 [이] 소리. I와 발음 같지만 주로 단어 앞에 위치',
      examples:[{vi:'kỹ',    ko:'꼼꼼히', pron:'끼'},{vi:'ý kiến',ko:'의견',pron:'이 끼엔/이 낑'},{vi:'y tá',ko:'간호사',pron:'이 따'}]},
  ];
  return renderVowelCards(vowels);
}

/* ─── 2강 Ch3: e vs ê ─── */
function renderL2C3() {
  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">👄 e vs ê 발음 구별</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;">
        <div style="background:var(--bg);border:2px solid var(--accent);border-radius:14px;padding:14px;text-align:center;">
          <div style="font-size:36px;font-weight:700;color:var(--accent);font-family:monospace;">e</div>
          <div style="font-size:13px;font-weight:700;color:#f0e6ff;margin-top:6px;">[애]</div>
          <div style="font-size:11px;color:var(--muted);margin-top:6px;line-height:1.6;">✓ 입으로 내는 맑은 '애' 소리<br>✓ 입을 가로로 길~게 벌리기</div>
        </div>
        <div style="background:var(--bg);border:2px solid var(--purple);border-radius:14px;padding:14px;text-align:center;">
          <div style="font-size:36px;font-weight:700;color:var(--purple);font-family:monospace;">ê</div>
          <div style="font-size:13px;font-weight:700;color:#f0e6ff;margin-top:6px;">[에]</div>
          <div style="font-size:11px;color:var(--muted);margin-top:6px;line-height:1.6;">✓ 목을 벌려 소리 내는 '에' 소리<br>✓ 입을 세로로 적당히 벌리기</div>
        </div>
      </div>
      <div style="font-size:12px;color:var(--muted);margin-bottom:8px;font-weight:700;">단어로 비교하기 — 탭하면 발음!</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        ${[
          {vi:'vẽ', ko:'그리다',    pron:'배/애', type:'e'},
          {vi:'bên',ko:'쪽, 편',    pron:'벤',    type:'ê'},
          {vi:'kem',ko:'아이스크림', pron:'깸',    type:'e'},
          {vi:'để', ko:'~위해',     pron:'데',    type:'ê'},
        ].map(w=>`
        <div onclick="TTS.speak('${w.vi}')" style="background:var(--bg);border:1.5px solid ${w.type==='e'?'var(--accent)':'var(--purple)'};border-radius:12px;padding:10px;cursor:pointer;text-align:center;">
          <div style="font-family:monospace;font-size:20px;font-weight:700;color:${w.type==='e'?'var(--accent)':'var(--purple)'};">${w.vi}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:2px;">${w.ko}</div>
          <div style="font-size:10px;color:var(--dim);">[${w.pron}]</div>
        </div>`).join('')}
      </div>
    </div>
    <div class="card">
      <div class="section-title">📖 연습 문장</div>
      ${[
        {vi:'Chị thích màu đen.', ko:'언니는 검은색을 좋아해요.', pron:'찌 틱 마우 댄/찌 틸 마우 댄'},
        {vi:'Anh đến để ăn.',     ko:'형은 먹으러 왔어요.',       pron:'아잉 덴 데 안/안 덴 데 앙'},
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

/* ─── 2강 Ch4: 정리 ─── */
function renderL2C4() {
  const sentences = [
    {vi:'Bạn ơi.',   ko:'친구야/저기요.',  pron:'반 어이/방 어이'},
    {vi:'Ăn cơm.',   ko:'밥을 먹다.',       pron:'안 껌/앙 껌'},
    {vi:'Bận việc.', ko:'일이 바쁘다.',     pron:'번 비엑/벙 이옉'},
    {vi:'Nhớ em.',   ko:'네가 그리워.',     pron:'녀 앰'},
    {vi:'Thế à!',    ko:'그렇구나!',        pron:'테 아'},
    {vi:'Xin lỗi.',  ko:'미안해.',          pron:'씬 로이'},
    {vi:'Đọc kỹ.',   ko:'꼼꼼히 읽다.',    pron:'덥 끼'},
    {vi:'Đi ăn.',    ko:'먹으러 가다.',     pron:'디 안/디 앙'},
  ];
  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">✅ 2강 정리</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;">
        ${[{c:'A',s:'아'},{c:'Ă',s:'아↗'},{c:'Â',s:'어↗'},{c:'E',s:'애'},{c:'Ê',s:'에'},{c:'I',s:'이(짧)'},{c:'Y',s:'이(길)'}].map(v=>`
        <div style="text-align:center;background:var(--bg);border:1.5px solid var(--border);border-radius:10px;padding:8px;">
          <div style="font-size:22px;font-weight:700;color:var(--accent);">${v.c}</div>
          <div style="font-size:11px;color:var(--muted);">${v.s}</div>
        </div>`).join('')}
      </div>
    </div>
    <div class="card">
      <div class="section-title">📝 연습 문장</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        ${sentences.map(s=>`
        <div onclick="TTS.speak('${s.vi}')" style="background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:10px;cursor:pointer;">
          <div style="font-family:monospace;font-size:14px;font-weight:700;color:var(--accent);">${s.vi}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:2px;">${s.ko}</div>
          <div style="font-size:10px;color:var(--dim);">[${s.pron}]</div>
        </div>`).join('')}
      </div>
      <button onclick="playL2Sentences()" class="btn-full" style="margin-top:10px;">🔊 전부 듣기</button>
    </div>
    <div class="card" style="border-color:#6e5000;background:#1a1200;">
      <div style="font-size:13px;font-weight:700;color:var(--accent);margin-bottom:6px;">📚 오늘의 숙제</div>
      <div onclick="TTS.speak('Bạn ơi')" style="cursor:pointer;">
        <div style="font-family:monospace;font-size:24px;font-weight:700;color:var(--accent);">B_n ơi~</div>
        <div style="font-size:12px;color:var(--muted);margin-top:4px;">친구야/저기요~ [반 어이/방 어이]</div>
        <div style="font-size:11px;color:var(--dim);margin-top:2px;">빈칸에 들어갈 글자는? (정답: a)</div>
      </div>
    </div>
  </div>`;
}

function playL2Sentences() {
  const s = ['Bạn ơi','Ăn cơm','Bận việc','Nhớ em','Thế à','Xin lỗi','Đọc kỹ','Đi ăn'];
  let i = 0;
  function next() { if(i>=s.length)return; TTS.speak(s[i]); i++; setTimeout(next,1500); }
  next();
}
