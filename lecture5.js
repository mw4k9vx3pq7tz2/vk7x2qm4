/* ═══════════════════════════════════════════════════════════════
   5강 · 자음 (N/P/Q/R/S/T/V/X) 데이터
═══════════════════════════════════════════════════════════════ */
LECTURES[5] = {
  id: 5,
  title: '자음 N~X',
  subtitle: 'N, P, Q, R, S, T, V, X',
  emoji: '🔡',
  chapters: [
    { id: 0, title: '문자표',  emoji: '📋' },
    { id: 1, title: 'N/P/Q',  emoji: '🔡' },
    { id: 2, title: 'R/S',    emoji: '🎵' },
    { id: 3, title: 'T/V/X',  emoji: '🔤' },
    { id: 4, title: '발음비교', emoji: '🗺️' },
    { id: 5, title: '정리',   emoji: '✅' },
  ],
  screens: [renderL5C0, renderL5C1, renderL5C2, renderL5C3, renderL5C4, renderL5C5],
};

/* ─── 5강 Ch0: 오늘의 문자표 ─── */
function renderL5C0() {
  const prev  = ['B','C','D','Đ','G','H','K','L','M'];
  const today = ['N','P','Q','R','S','T','V','X'];

  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">📋 5강 오늘의 문자 (자음)</div>
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin-bottom:8px;">
        ${today.map(c=>`
        <div style="text-align:center;padding:12px 4px;border-radius:10px;background:#2a0a1a;border:1.5px solid var(--red);">
          <span style="font-size:22px;font-weight:700;color:var(--red);">${c}</span>
        </div>`).join('')}
      </div>
      <div style="font-size:11px;color:var(--muted);margin-bottom:10px;">★ 빨간색 = 오늘 배울 자음</div>
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;">
        ${prev.map(c=>`
        <div style="text-align:center;padding:12px 4px;border-radius:10px;background:var(--bg);border:1.5px solid var(--border);">
          <span style="font-size:22px;font-weight:700;color:#f0e6ff;">${c}</span>
        </div>`).join('')}
      </div>
      <div style="font-size:11px;color:var(--dim);margin-top:8px;">지난 강의에서 배운 자음</div>
    </div>
    <div class="card" style="border-color:#6e5000;background:#1a1200;">
      <div style="font-size:13px;font-weight:700;color:var(--accent);margin-bottom:6px;">⚠️ 5강 핵심 포인트</div>
      <div style="font-size:12px;color:var(--muted);line-height:1.9;">
        • <span style="color:#60a5fa">R</span> : 영어 'r' 발음하듯 혀 굴리기 (북부: [ㅈ] / 남부: 혀 굴림)<br>
        • <span style="color:#60a5fa">V</span> : 남부에서 단모음 'd'의 남부 발음과 동일 [ㅂ/ㅇ(y)]<br>
        • <span style="color:#60a5fa">Q</span> : 항상 'u'와 함께 써서 [꾸] 발음
      </div>
    </div>
  </div>`;
}

/* ─── 5강 Ch1: N / P / Q ─── */
function renderL5C1() {
  const consonants = [
    { char:'N', label:'nờ', sound:'너',
      note:'첫자음: [ㄴ] / 끝자음: [ㄴ, ㅇ]',
      examples:[
        {vi:'nói',  ko:'말하다',   pron:'너이'},
        {vi:'lớn',  ko:'큰',       pron:'런/렁'},
        {vi:'năm',  ko:'년, 해',   pron:'남'},
      ]},
    { char:'P', label:'pờ', sound:'뻐',
      note:'첫자음: [ㅃ] / 끝자음: [ㅂ]<br>• 단어 첫자음 위치에는 거의 사용되지 않음<br>• 끝자음(받침)으로 자주 등장: [ㅂ] 발음',
      examples:[
        {vi:'sắp',  ko:'곧 ~하다',  pron:'쌉'},
        {vi:'pin',  ko:'배터리',    pron:'삔'},
        {vi:'đẹp',  ko:'예쁜',      pron:'댑'},
      ]},
    { char:'Q', label:'cuờ', sound:'꾸',
      note:'항상 \'u\'와 함께 사용: qu = [꾸/우]<br>• 북부: [꾸] / 남부: [우]',
      examples:[
        {vi:'quán', ko:'가게, 식당', pron:'꾸안/우앙'},
        {vi:'quê',  ko:'고향',       pron:'꾸에/우에'},
        {vi:'qua',  ko:'지나다',     pron:'꾸아/우아'},
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
          ${c.note?`<div style="font-size:11px;color:var(--muted);margin-top:2px;line-height:1.7;">${c.note}</div>`:''}
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

/* ─── 5강 Ch2: R / S ─── */
function renderL5C2() {
  return `<div class="screen-scroll">
    <div class="card">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
        <div style="width:56px;height:56px;border:2px solid var(--accent);border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:var(--bg);overflow:hidden;flex-shrink:0;">
          <span style="font-size:24px;font-weight:700;color:var(--accent);">R</span>
          <span style="font-size:9px;color:var(--dim);">rờ · 저</span>
        </div>
        <div>
          <div style="font-size:16px;font-weight:700;color:#f0e6ff;">[ㅈ(z)]</div>
          <div style="font-size:11px;color:var(--muted);margin-top:2px;line-height:1.7;">
            북부: [ㅈ] / 남부: 영어 'r'처럼 혀 굴리기<br>
            ※ 사람마다 다르게 들릴 수 있음
          </div>
        </div>
      </div>
      ${[
        {vi:'rồi',  ko:'이미 (~했다)',  pron:'조이/로이'},
        {vi:'rượu', ko:'술',            pron:'즈어우/르이우'},
        {vi:'rất',  ko:'매우',          pron:'젇/럭'},
        {vi:'rảnh rỗi', ko:'한가한',   pron:'자잉 조이/란 로이'},
        {vi:'rực rỡ',   ko:'빛나는',   pron:'즉 저/륵 러'},
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
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
        <div style="width:56px;height:56px;border:2px solid var(--accent);border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:var(--bg);overflow:hidden;flex-shrink:0;">
          <span style="font-size:24px;font-weight:700;color:var(--accent);">S</span>
          <span style="font-size:9px;color:var(--dim);">sờ · 써</span>
        </div>
        <div>
          <div style="font-size:16px;font-weight:700;color:#f0e6ff;">[ㅆ]</div>
          <div style="font-size:11px;color:var(--muted);margin-top:2px;">북부/남부 동일하게 [ㅆ] 발음</div>
        </div>
      </div>
      ${[
        {vi:'sau',  ko:'뒤, 다음',        pron:'싸우'},
        {vi:'sẽ',   ko:'~할 것이다(미래)', pron:'쌔'},
        {vi:'sáng', ko:'아침',            pron:'쌍'},
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
  </div>`;
}

/* ─── 5강 Ch3: T / V / X ─── */
function renderL5C3() {
  const consonants = [
    { char:'T', label:'tờ', sound:'떠',
      note:'첫자음: [ㄸ] / 끝자음: [ㄷ, ㄱ]',
      examples:[
        {vi:'tôi',  ko:'나/저(1인칭)',  pron:'또이'},
        {vi:'tốt',  ko:'좋은',          pron:'똗/똑'},
        {vi:'tay',  ko:'팔',            pron:'따이'},
      ]},
    { char:'V', label:'vờ', sound:'버',
      note:'북부: [ㅂ(v)] / 남부: 단모음 d의 남부 발음과 동일 [ㅇ(y)]<br>※ 사람마다 다르게 들릴 수 있음',
      examples:[
        {vi:'vào',  ko:'들어가다/오다',  pron:'바오/야오'},
        {vi:'vì',   ko:'왜냐하면',       pron:'비/(ㅖ)이'},
        {vi:'và',   ko:'그리고',         pron:'바/야'},
        {vi:'vui vẻ', ko:'즐거운',      pron:'부이 배/유이 애'},
        {vi:'vội vàng',ko:'급한',        pron:'보이 방/요이 양'},
      ]},
    { char:'X', label:'xờ', sound:'써',
      note:'[ㅆ] 발음. S와 발음 동일',
      examples:[
        {vi:'xe',   ko:'차',     pron:'쌔'},
        {vi:'xin',  ko:'청하다', pron:'씬'},
        {vi:'xa',   ko:'먼',     pron:'싸'},
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
          ${c.note?`<div style="font-size:11px;color:var(--muted);margin-top:2px;line-height:1.7;">${c.note}</div>`:''}
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
        {vi:'Nói xem!',     ko:'말해 봐!',           pron:'너이 쌤'},
        {vi:'Hết pin.',     ko:'배터리가 다 됐다.',   pron:'헷 삔/헥 삔'},
        {vi:'Tôi là 000.',  ko:'저는 000 입니다.',    pron:'또이 라'},
        {vi:'Về quê.',      ko:'고향에 돌아가다.',    pron:'베 꾸에/예 우에'},
        {vi:'Uống rượu.',   ko:'술 마시다.',          pron:'우옹 즈어우/움 리우'},
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

/* ─── 5강 Ch4: 북부 vs 남부 발음 비교 ─── */
function renderL5C4() {
  const dialectTable = [
    {ko:'부모님(아버지, 어머니)', north:'bố mẹ',   south:'ba má'},
    {ko:'과일',                   north:'hoa quả',  south:'trái cây'},
    {ko:'돼지',                   north:'lợn',      south:'heo'},
    {ko:'자동차',                 north:'xe ô tô',  south:'xe hơi'},
    {ko:'뚱뚱한',                 north:'béo',      south:'mập'},
    {ko:'늦은',                   north:'muộn',     south:'trễ'},
  ];

  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">🗺️ 발음 고민 해결!</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;">
        <div style="background:var(--bg);border:2px solid var(--accent);border-radius:14px;padding:14px;text-align:center;">
          <div style="font-size:32px;font-weight:700;color:var(--accent);font-family:monospace;">r</div>
          <div style="font-size:12px;font-weight:700;color:#f0e6ff;margin-top:6px;">ㅈ(z)</div>
          <div style="font-size:11px;color:var(--muted);margin-top:6px;line-height:1.6;">✓ 영어 'r' 발음하듯 혀 굴리기<br>✓ 사람마다 다르게 들릴 수 있음</div>
        </div>
        <div style="background:var(--bg);border:2px solid var(--purple);border-radius:14px;padding:14px;text-align:center;">
          <div style="font-size:32px;font-weight:700;color:var(--purple);font-family:monospace;">v</div>
          <div style="font-size:12px;font-weight:700;color:#f0e6ff;margin-top:6px;">ㅂ(v)</div>
          <div style="font-size:11px;color:var(--muted);margin-top:6px;line-height:1.6;">✓ 남부: 단모음 'd'의<br>✓ 남부 발음과 동일</div>
        </div>
      </div>

      <div style="font-size:12px;color:var(--muted);margin-bottom:8px;font-weight:700;">r · v 단어 — 탭하면 발음!</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        ${[
          {vi:'rồi',     ko:'이미~했다', pron:'조이/로이',   type:'r'},
          {vi:'vào',     ko:'들어가다',  pron:'바오/야오',   type:'v'},
          {vi:'8 giờ rưỡi rồi.', ko:'8시 반이야',  pron:'땀 저 즈어이 조이', type:'r'},
          {vi:'Về nhà sớm đi.', ko:'집에 일찍 가.',pron:'베 냐 썸 디/예 냐 썸 디', type:'v'},
        ].map(w=>`
        <div onclick="TTS.speak('${w.vi}')" style="background:var(--bg);border:1.5px solid ${w.type==='r'?'var(--accent)':'var(--purple)'};border-radius:12px;padding:10px;cursor:pointer;text-align:center;">
          <div style="font-family:monospace;font-size:${w.vi.length>5?'13':'18'}px;font-weight:700;color:${w.type==='r'?'var(--accent)':'var(--purple)'};">${w.vi}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:2px;">${w.ko}</div>
          <div style="font-size:10px;color:var(--dim);">[${w.pron}]</div>
        </div>`).join('')}
      </div>
    </div>

    <div class="card">
      <div class="section-title">📊 북부 vs 남부 단어 모음</div>
      <div style="border-radius:12px;overflow:hidden;border:1px solid var(--border);">
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;background:var(--surface);padding:10px 12px;gap:4px;">
          <span style="font-size:12px;font-weight:700;color:var(--accent);">의미</span>
          <span style="font-size:12px;font-weight:700;color:#60a5fa;">🔵 북부</span>
          <span style="font-size:12px;font-weight:700;color:#f87171;">🔴 남부</span>
        </div>
        ${dialectTable.map((r,i)=>`
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;padding:9px 12px;background:${i%2===0?'var(--bg)':'#0a0818'};gap:4px;align-items:center;">
          <span style="font-size:11px;color:var(--muted);">${r.ko}</span>
          <span onclick="TTS.speak('${r.north}')" style="font-family:monospace;font-size:13px;color:#60a5fa;cursor:pointer;">${r.north}</span>
          <span onclick="TTS.speak('${r.south}')" style="font-family:monospace;font-size:13px;color:#f87171;cursor:pointer;">${r.south}</span>
        </div>`).join('')}
      </div>
      <div style="font-size:11px;color:var(--dim);margin-top:8px;">탭하면 발음 재생!</div>
    </div>
  </div>`;
}

/* ─── 5강 Ch5: 정리 ─── */
function renderL5C5() {
  const consonants = [
    {c:'N', s:'너', label:'ㄴ/ㄴ,ㅇ'},
    {c:'P', s:'뻐', label:'ㅃ/ㅂ'},
    {c:'Q', s:'꾸', label:'꾸(+u)'},
    {c:'R', s:'저', label:'ㅈ(z)'},
    {c:'S', s:'써', label:'ㅆ'},
    {c:'T', s:'떠', label:'ㄸ/ㄷ,ㄱ'},
    {c:'V', s:'버', label:'ㅂ(v)'},
    {c:'X', s:'써', label:'ㅆ'},
  ];

  const homework = [
    {vi:'ăn rồi',   ko:'먹었어.',           north:'안 조이', south:'앙 로이'},
    {vi:'xinh quá', ko:'너무 이쁘다!',       north:'씽 꾸아', south:'씬/쑨 우아'},
    {vi:'bún riêu',  ko:'분지에우(쌀국수)', north:'분 지에우', south:'붕 리우'},
    {vi:'bán hết',  ko:'(전부) 다 팔다.',    north:'반 헨', south:'방 헥'},
  ];

  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">✅ 5강 자음 정리</div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
        ${consonants.map(v=>`
        <div onclick="TTS.speak('${v.c.toLowerCase()}a')" style="text-align:center;background:var(--bg);border:1.5px solid var(--border);border-radius:12px;padding:12px 4px;cursor:pointer;">
          <div style="font-size:26px;font-weight:700;color:var(--accent);">${v.c}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:2px;">[${v.s}]</div>
          <div style="font-size:9px;color:var(--dim);margin-top:1px;">${v.label}</div>
        </div>`).join('')}
      </div>
    </div>

    <div class="card">
      <div class="section-title">📚 오늘의 숙제</div>
      <div style="font-size:12px;color:var(--muted);margin-bottom:10px;">음원을 듣고, 북부와 남부 발음을 비교하며 따라 읽어 보세요!</div>
      ${homework.map((h,i)=>`
      <div onclick="TTS.speak('${h.vi}')" style="background:var(--bg);border:1px solid var(--border);border-radius:14px;padding:12px;margin-bottom:8px;cursor:pointer;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
          <span style="width:22px;height:22px;border-radius:50%;border:1.5px solid var(--accent);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:var(--accent);flex-shrink:0;">${i+1}</span>
          <span style="font-family:monospace;font-size:18px;font-weight:700;color:var(--red);">${h.vi}</span>
          <span style="font-size:12px;color:var(--muted);">${h.ko}</span>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <span style="font-size:11px;background:#0a1a2a;border:1px solid #2a5e8a;border-radius:20px;padding:2px 10px;color:#60a5fa;">🔵 북부: ${h.north}</span>
          <span style="font-size:11px;background:#1a0a0a;border:1px solid #8a2a2a;border-radius:20px;padding:2px 10px;color:#f87171;">🔴 남부: ${h.south}</span>
        </div>
      </div>`).join('')}
      <button onclick="playL5Homework()" class="btn-full" style="margin-top:4px;">🔊 전부 듣기</button>
    </div>
  </div>`;
}

function playL5Homework() {
  const s = ['ăn rồi','xinh quá','bún riêu','bán hết'];
  let i = 0;
  function next() { if(i>=s.length)return; TTS.speak(s[i]); i++; setTimeout(next,1800); }
  next();
}
