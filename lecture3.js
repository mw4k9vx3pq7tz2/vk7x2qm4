/* ═══════════════════════════════════════════════════════════════
   3강 · 모음 (O~Ư) 데이터
═══════════════════════════════════════════════════════════════ */
LECTURES[3] = {
  id: 3,
  title: '모음 O~Ư',
  subtitle: 'O, Ô, Ơ, U, Ư',
  emoji: '⭕',
  chapters: [
    { id: 0, title: '문자표',  emoji: '🔤' },
    { id: 1, title: 'O/Ô/Ơ', emoji: '⭕' },
    { id: 2, title: 'U/Ư',   emoji: '🔵' },
    { id: 3, title: 'o vs ô', emoji: '👄' },
    { id: 4, title: '정리',   emoji: '✅' },
  ],
  screens: [renderL3C0, renderL3C1, renderL3C2, renderL3C3, renderL3C4],
};

/* ─── 3강 Ch0: 오늘의 문자표 ─── */
function renderL3C0() {
  const today   = [['A','Ă','Â'],['E','Ê',''],['I','Y',''],['O','Ô','Ơ'],['U','Ư','']];
  const newOnes = ['O','Ô','Ơ','U','Ư'];
  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">🔤 3강 오늘의 문자</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;">
        ${today.map(row=>row.map(c=>`
        <div style="text-align:center;padding:12px 4px;border-radius:10px;background:${newOnes.includes(c)?'#2a0a1a':'var(--bg)'};border:1.5px solid ${newOnes.includes(c)?'var(--red)':c?'var(--border)':'transparent'};">
          ${c?`<span style="font-size:22px;font-weight:700;color:${newOnes.includes(c)?'var(--red)':'#f0e6ff'};">${c}</span>`:''}
        </div>`).join('')).join('')}
      </div>
      <div style="font-size:11px;color:var(--red);margin-top:8px;">★ 빨간색 = 오늘 배울 모음 (O/Ô/Ơ/U/Ư)</div>
    </div>
  </div>`;
}

/* ─── 3강 Ch1: O / Ô / Ơ ─── */
function renderL3C1() {
  const vowels = [
    { char:'O', label:'o', sound:'어', desc:"입으로 내는 맑은 '어' 소리. o/어 발음으로 들릴 수 있으나 정확한 발음은 '어'로 연습!",
      examples:[{vi:'có', ko:'있다',pron:'꺼'},{vi:'cho',ko:'주다',pron:'쩌'},{vi:'còn',ko:'남다',pron:'꺼/껑'}]},
    { char:'Ô', label:'ô', sound:'오', desc:"'오!' 하고 입을 모아 내는 소리",
      examples:[{vi:'không',ko:'0(숫자), 부정',pron:'콤'},{vi:'một',ko:'1(숫자)',pron:'몯/목'},{vi:'công ty',ko:'회사',pron:'꼼 띠'}]},
    { char:'Ơ', label:'ơ', sound:'어', desc:'입을 조금 벌려 내는 [어] 소리',
      examples:[{vi:'chờ',ko:'기다리다',pron:'쩌'},{vi:'phở',ko:'쌀국수',pron:'퍼'},{vi:'tớ',ko:'나(1인칭)',pron:'떠'}]},
  ];
  return renderVowelCards(vowels);
}

/* ─── 3강 Ch2: U / Ư ─── */
function renderL3C2() {
  const vowels = [
    { char:'U', label:'u', sound:'우', desc:'입을 모아 내는 [우] 소리',
      examples:[{vi:'cũ',  ko:'오래된, 낡은',pron:'꾸'},{vi:'vui', ko:'기쁜, 즐거운',pron:'부이/유이'},{vi:'cùng',ko:'함께',pron:'꿈'}]},
    { char:'Ư', label:'ư', sound:'으', desc:'입을 조금 벌려 내는 [으] 소리',
      examples:[{vi:'ừ',   ko:'응(대답)',       pron:'으'},{vi:'chứ', ko:'~하지(문미 조사)',pron:'쯔'},{vi:'từng',ko:'~한 적이 있다',pron:'뜽'}]},
  ];
  return renderVowelCards(vowels);
}

/* ─── 3강 Ch3: o vs ô ─── */
function renderL3C3() {
  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">👄 o vs ô 발음 구별</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;">
        <div style="background:var(--bg);border:2px solid var(--accent);border-radius:14px;padding:14px;text-align:center;">
          <div style="font-size:36px;font-weight:700;color:var(--accent);font-family:monospace;">o</div>
          <div style="font-size:13px;font-weight:700;color:#f0e6ff;margin-top:6px;">[어]</div>
          <div style="font-size:11px;color:var(--muted);margin-top:6px;line-height:1.6;">✓ 입으로 내는 맑은 '어' 소리<br>✓ 정확한 발음은 '어'로 연습!</div>
        </div>
        <div style="background:var(--bg);border:2px solid var(--purple);border-radius:14px;padding:14px;text-align:center;">
          <div style="font-size:36px;font-weight:700;color:var(--purple);font-family:monospace;">ô</div>
          <div style="font-size:13px;font-weight:700;color:#f0e6ff;margin-top:6px;">[오]</div>
          <div style="font-size:11px;color:var(--muted);margin-top:6px;line-height:1.6;">✓ '오!' 하고 입을 모아<br>✓ 내는 소리</div>
        </div>
      </div>
      <div style="font-size:12px;color:var(--muted);margin-bottom:8px;font-weight:700;">단어로 비교 — 탭하면 발음!</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        ${[
          {vi:'coi', ko:'보다',   pron:'꺼이', type:'o'},
          {vi:'cổ',  ko:'오래된', pron:'꼬',   type:'ô'},
          {vi:'son', ko:'립스틱', pron:'썬/썽', type:'o'},
          {vi:'môi', ko:'입',     pron:'모이',  type:'ô'},
        ].map(w=>`
        <div onclick="TTS.speak('${w.vi}')" style="background:var(--bg);border:1.5px solid ${w.type==='o'?'var(--accent)':'var(--purple)'};border-radius:12px;padding:10px;cursor:pointer;text-align:center;">
          <div style="font-family:monospace;font-size:20px;font-weight:700;color:${w.type==='o'?'var(--accent)':'var(--purple)'};">${w.vi}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:2px;">${w.ko}</div>
          <div style="font-size:10px;color:var(--dim);">[${w.pron}]</div>
        </div>`).join('')}
      </div>
    </div>
    <div class="card">
      <div class="section-title">📖 연습 문장</div>
      ${[
        {vi:'Nó không nói.',              ko:'그는 말하지 않아요.',          pron:'너 콤 너이'},
        {vi:'Trường tôi được nối với ga.',ko:'우리 학교는 역과 연결돼있어요.',pron:'쯔엉 또이 드억 노이 버이 가'},
      ].map(s=>`
      <div onclick="TTS.speak('${s.vi}')" class="list-item" style="cursor:pointer;">
        <div>
          <div style="font-family:monospace;font-size:14px;font-weight:700;color:var(--accent);">${s.vi}</div>
          <div style="font-size:12px;color:var(--muted);margin-top:2px;">${s.ko}</div>
          <div style="font-size:11px;color:var(--dim);">[${s.pron}]</div>
        </div>
        <span style="font-size:20px;opacity:.5;flex-shrink:0;">🔊</span>
      </div>`).join('')}
    </div>
  </div>`;
}

/* ─── 3강 Ch4: 정리 & 의성어 ─── */
function renderL3C4() {
  const sentences = [
    {vi:'Có không?',     ko:'있어요?',         pron:'꺼 콤'},
    {vi:'Không phải.',   ko:'아니야.',          pron:'콤 파이'},
    {vi:'Chờ một chút.', ko:'조금만 기다려.',   pron:'쩌 몯 쭏/쩌 목 쭉'},
    {vi:'Vui lắm.',      ko:'너무 기뻐.',       pron:'부이 람/유이 람'},
    {vi:'Được chứ!',     ko:'되지/할 수 있지!', pron:'드억 쯔/득 쯔'},
  ];
  const onomatopoeia = [
    {sound:'멍멍', vi:'gâu gâu', ko:'거우 거우'},
    {sound:'냐옹', vi:'meo meo', ko:'매오 매오'},
    {sound:'꼬끼오',vi:'ò ó o',  ko:'어 어 어'},
    {sound:'꿀꿀', vi:'ủn ỉn',   ko:'운 인'},
    {sound:'똑똑', vi:'cốc cốc', ko:'꼽 꼽'},
    {sound:'웃음', vi:'hì hì',   ko:'히 히'},
  ];
  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">✅ 3강 모음 정리</div>
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;">
        ${[{c:'O',s:'어'},{c:'Ô',s:'오'},{c:'Ơ',s:'어'},{c:'U',s:'우'},{c:'Ư',s:'으'}].map(v=>`
        <div style="text-align:center;background:var(--bg);border:1.5px solid var(--border);border-radius:10px;padding:8px;">
          <div style="font-size:22px;font-weight:700;color:var(--accent);">${v.c}</div>
          <div style="font-size:11px;color:var(--muted);">${v.s}</div>
        </div>`).join('')}
      </div>
    </div>
    <div class="card">
      <div class="section-title">🐾 의성어로 발음 연습</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        ${onomatopoeia.map(o=>`
        <div onclick="TTS.speak('${o.vi}')" style="background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:10px;cursor:pointer;text-align:center;">
          <div style="font-size:16px;font-weight:700;color:#f0e6ff;">${o.sound}</div>
          <div style="font-family:monospace;font-size:14px;color:var(--accent);margin-top:3px;">${o.vi}</div>
          <div style="font-size:10px;color:var(--dim);margin-top:2px;">[${o.ko}]</div>
        </div>`).join('')}
      </div>
    </div>
    <div class="card">
      <div class="section-title">📝 연습 문장</div>
      ${sentences.map(s=>`
      <div onclick="TTS.speak('${s.vi}')" class="list-item" style="cursor:pointer;">
        <div>
          <div style="font-family:monospace;font-size:15px;font-weight:700;color:var(--accent);">${s.vi}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:2px;">${s.ko}</div>
          <div style="font-size:10px;color:var(--dim);">[${s.pron}]</div>
        </div>
        <span style="font-size:20px;opacity:.5;flex-shrink:0;">🔊</span>
      </div>`).join('')}
    </div>
    <div class="card" style="border-color:#6e5000;background:#1a1200;">
      <div style="font-size:13px;font-weight:700;color:var(--accent);margin-bottom:6px;">📚 오늘의 숙제</div>
      <div onclick="TTS.speak('Không phải')" style="cursor:pointer;">
        <div style="font-family:monospace;font-size:24px;font-weight:700;color:var(--accent);">Kh_ng phải.</div>
        <div style="font-size:12px;color:var(--muted);margin-top:4px;">아니야. [콤 파이]</div>
        <div style="font-size:11px;color:var(--dim);margin-top:2px;">빈칸에 들어갈 글자는? (정답: ô)</div>
      </div>
    </div>
  </div>`;
}
