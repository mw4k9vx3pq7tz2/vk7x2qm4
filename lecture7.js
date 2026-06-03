/* ═══════════════════════════════════════════════════════════════
   7강 · 이중모음 ia / ua / ưa / oa·ao / oe·eo
═══════════════════════════════════════════════════════════════ */
LECTURES[7] = {
  id: 7,
  title: '이중모음 II',
  subtitle: 'ia · ua · ưa · oa/ao · oe/eo',
  emoji: '🌿',
  chapters: [
    { id: 0, title: '문자표',      emoji: '📋' },
    { id: 1, title: 'ia / ua / ưa', emoji: '🔤' },
    { id: 2, title: 'oa·ao / oe·eo', emoji: '🔤' },
    { id: 3, title: 'o + a,e 규칙', emoji: '💡' },
    { id: 4, title: '정리',         emoji: '✅' },
  ],
  screens: [renderL7C0, renderL7C1, renderL7C2, renderL7C3, renderL7C4],
};

/* ─── 7강 Ch0: 문자표 ─── */
function renderL7C0() {
  const prev    = [['ai','ay','ơi'],['ây','iê','iêu']];
  const today   = [['ia','ua','ưa'],['oa/ao','oe/eo','']];

  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">📋 7강 오늘의 문자 (이중모음)</div>

      <div style="border-radius:12px;overflow:hidden;border:1px solid var(--border);margin-bottom:12px;">
        ${prev.map(row => `
        <div style="display:grid;grid-template-columns:repeat(3,1fr);">
          ${row.map(c => `
          <div style="padding:13px 8px;text-align:center;background:var(--bg);border:0.5px solid var(--border);">
            <span style="font-family:monospace;font-size:17px;font-weight:700;color:#6a4aaa;">${c}</span>
          </div>`).join('')}
        </div>`).join('')}
        ${today.map(row => `
        <div style="display:grid;grid-template-columns:repeat(3,1fr);">
          ${row.map(c => `
          <div style="padding:13px 8px;text-align:center;background:${c ? '#2a0a1a' : 'var(--bg)'};border:0.5px solid ${c ? 'var(--red)' : 'var(--border)'};">
            ${c ? `<span style="font-family:monospace;font-size:17px;font-weight:700;color:var(--red);">${c}</span>` : ''}
          </div>`).join('')}
        </div>`).join('')}
      </div>

      <div style="display:flex;gap:10px;">
        <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:#6a4aaa;">
          <span style="width:10px;height:10px;border-radius:2px;background:#6a4aaa;display:inline-block;"></span>6강 복습
        </div>
        <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--red);">
          <span style="width:10px;height:10px;border-radius:2px;background:var(--red);display:inline-block;"></span>오늘 학습
        </div>
      </div>
    </div>

    <div class="card" style="border-color:#6e5000;background:#1a1200;">
      <div style="font-size:13px;font-weight:700;color:var(--accent);margin-bottom:8px;">💡 7강 핵심 포인트</div>
      <div style="font-size:12px;color:var(--muted);line-height:2.1;">
        • <span style="color:var(--red);font-weight:700">ia</span> [이어] · <span style="color:var(--red);font-weight:700">ua</span> [우어] · <span style="color:var(--red);font-weight:700">ưa</span> [으어]<br>
        • <span style="color:var(--red);font-weight:700">oa/ao</span> [오아/아오] · <span style="color:var(--red);font-weight:700">oe/eo</span> [오애/애오]<br>
        • <span style="color:#60a5fa;font-weight:700">o</span> + <span style="color:#60a5fa;font-weight:700">a,e 계열</span>: 'o'가 앞에 오든 뒤에 오든 → <span style="color:var(--accent);">[오] 발음</span><br>
        • <span style="color:#60a5fa;font-weight:700">o + i</span>: 변동 없이 <span style="color:var(--accent);">[어] 발음</span>
      </div>
    </div>
  </div>`;
}

/* ─── 7강 Ch1: ia / ua / ưa ─── */
function renderL7C1() {
  const items = [
    {
      char: 'ia', sound: '이어', color: 'var(--accent)',
      note: '',
      examples: [
        { vi: 'bia',  ko: '맥주',           pron: '비어' },
        { vi: 'kia',  ko: '저 (지시 형용사)', pron: '끼어' },
        { vi: 'đĩa',  ko: '접시',            pron: '디어' },
      ],
    },
    {
      char: 'ua', sound: '우어', color: 'var(--accent)',
      note: '',
      examples: [
        { vi: 'của', ko: '~의',    pron: '꾸어' },
        { vi: 'mua', ko: '사다',   pron: '무어' },
        { vi: 'đũa', ko: '젓가락', pron: '두어' },
      ],
    },
    {
      char: 'ưa', sound: '으어', color: 'var(--accent)',
      note: '',
      examples: [
        { vi: 'mưa',  ko: '비',          pron: '므어' },
        { vi: 'sửa',  ko: '고치다',       pron: '쓰어' },
        { vi: 'vừa',  ko: '막~ 하다',     pron: '브어/(이)으어' },
      ],
    },
  ];

  return `<div class="screen-scroll">
    ${items.map(item => `
    <div class="card">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:12px;">
        <div style="width:72px;height:72px;border:2px solid ${item.color};border-radius:14px;display:flex;align-items:center;justify-content:center;background:var(--bg);flex-shrink:0;">
          <span style="font-family:monospace;font-size:28px;font-weight:700;color:${item.color};">${item.char}</span>
        </div>
        <div>
          <div style="font-size:22px;font-weight:700;color:var(--red);">[${item.sound}]</div>
          ${item.note ? `<div style="font-size:11px;color:var(--muted);margin-top:3px;line-height:1.7;">${item.note}</div>` : ''}
        </div>
      </div>
      ${item.examples.map(e => `
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
        { vi: 'Uống bia.',   ko: '맥주를 마시다.',  pron: '우옹 비어/움 비어' },
        { vi: 'Mua sắm.',    ko: '쇼핑하다.',       pron: '무어 쌈' },
        { vi: 'Trời mưa.',   ko: '비가 오다.',      pron: '쩌이 므어' },
      ].map(s => `
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

/* ─── 7강 Ch2: oa·ao / oe·eo ─── */
function renderL7C2() {
  const items = [
    {
      char: 'oa/ao', sound: '오아/아오', color: 'var(--accent)',
      note: '',
      examples: [
        { vi: 'áo',  ko: '옷',  pron: '아오' },
        { vi: 'hoa', ko: '꽃',  pron: '호아' },
        { vi: 'nào', ko: '어느, 어떤', pron: '나오' },
      ],
    },
    {
      char: 'oe/eo', sound: '오애/애오', color: 'var(--purple)',
      note: '',
      examples: [
        { vi: 'mèo',   ko: '고양이', pron: '매오' },
        { vi: 'khoẻ',  ko: '건강한', pron: '코애' },
        { vi: 'kẹo',   ko: '사탕',   pron: '깨오' },
      ],
    },
  ];

  return `<div class="screen-scroll">
    ${items.map(item => `
    <div class="card">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:12px;">
        <div style="width:88px;height:72px;border:2px solid ${item.color};border-radius:14px;display:flex;align-items:center;justify-content:center;background:var(--bg);flex-shrink:0;">
          <span style="font-family:monospace;font-size:24px;font-weight:700;color:${item.color};">${item.char}</span>
        </div>
        <div>
          <div style="font-size:20px;font-weight:700;color:var(--red);">[${item.sound}]</div>
          ${item.note ? `<div style="font-size:11px;color:var(--muted);margin-top:3px;">${item.note}</div>` : ''}
        </div>
      </div>
      ${item.examples.map(e => `
      <div onclick="TTS.speak('${e.vi}')" class="list-item" style="cursor:pointer;">
        <div>
          <span style="font-family:monospace;font-size:18px;font-weight:700;color:${item.color};">${e.vi}</span>
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
        { vi: 'Mặc áo.',    ko: '옷을 입다.',      pron: '막 아오' },
        { vi: 'Anh khoẻ.',  ko: '건강해/잘 지내.', pron: '아잉 코애/안 코애' },
        { vi: 'Mua hoa.',   ko: '꽃을 사다.',      pron: '무어 호아' },
      ].map(s => `
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

/* ─── 7강 Ch3: o + a,e 계열 발음 규칙 ─── */
function renderL7C3() {
  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">💡 발음 고민 해결!</div>

      <div style="display:flex;align-items:center;justify-content:center;gap:10px;padding:18px 0 10px;">
        <div style="width:60px;height:60px;border:2.5px solid #60a5fa;border-radius:14px;display:flex;align-items:center;justify-content:center;background:var(--bg);">
          <span style="font-family:monospace;font-size:30px;font-weight:700;color:#60a5fa;">o</span>
        </div>
        <span style="font-size:28px;font-weight:700;color:var(--red);">+</span>
        <div style="padding:12px 20px;border:2.5px solid #60a5fa;border-radius:14px;background:var(--bg);text-align:center;">
          <div style="font-family:monospace;font-size:22px;font-weight:700;color:#60a5fa;">a, e 계열</div>
          <div style="font-size:11px;color:var(--dim);margin-top:2px;">(a, ă, e)</div>
        </div>
      </div>

      <div style="background:#0a1a2a;border:1.5px solid #2a5e8a;border-radius:14px;padding:13px 15px;margin-bottom:14px;">
        <div style="font-size:13px;color:#f0e6ff;line-height:2.0;">
          ✓ <span style="color:var(--accent);font-weight:700">'o'가 앞에 오든 뒤에 오든</span> 동일하게 <span style="color:var(--accent);font-weight:700">[오] 발음</span><br>
          ✓ <span style="color:var(--accent);font-weight:700">'i'와 결합할 경우</span> 변동 없이 <span style="color:var(--accent);font-weight:700">[어] 발음</span>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;">
        <div style="background:var(--bg);border:1.5px solid var(--accent);border-radius:14px;padding:14px;">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:10px;">
            <div style="display:flex;align-items:center;gap:4px;">
              <span style="font-family:monospace;font-size:20px;font-weight:700;color:#60a5fa;background:var(--surface);border:1.5px solid #60a5fa;border-radius:8px;padding:3px 8px;">o</span>
              <span style="color:var(--red);font-weight:700;font-size:16px;">+</span>
              <span style="font-family:monospace;font-size:18px;font-weight:700;color:#60a5fa;background:var(--surface);border:1.5px solid #60a5fa;border-radius:8px;padding:3px 8px;">a, e</span>
            </div>
          </div>
          ${[
            { vi: 'chào', ko: '인사하다', pron: '짜오' },
            { vi: 'theo', ko: '따르다',   pron: '태오' },
          ].map(e => `
          <div onclick="TTS.speak('${e.vi}')" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;cursor:pointer;">
            <span style="font-family:monospace;font-size:16px;font-weight:700;color:var(--accent);">${e.vi}</span>
            <div style="text-align:right;">
              <div style="font-size:11px;color:var(--muted);">${e.ko}</div>
              <div style="font-size:10px;color:var(--dim);">[${e.pron}]</div>
            </div>
          </div>`).join('')}
        </div>

        <div style="background:var(--bg);border:1.5px solid var(--purple);border-radius:14px;padding:14px;">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:10px;">
            <div style="display:flex;align-items:center;gap:4px;">
              <span style="font-family:monospace;font-size:20px;font-weight:700;color:#60a5fa;background:var(--surface);border:1.5px solid #60a5fa;border-radius:8px;padding:3px 8px;">o</span>
              <span style="color:var(--red);font-weight:700;font-size:16px;">+</span>
              <span style="font-family:monospace;font-size:20px;font-weight:700;color:#60a5fa;background:var(--surface);border:1.5px solid #60a5fa;border-radius:8px;padding:3px 8px;">i</span>
            </div>
          </div>
          ${[
            { vi: 'nói', ko: '말하다', pron: '너이' },
            { vi: 'mọi', ko: '모든',   pron: '머이' },
          ].map(e => `
          <div onclick="TTS.speak('${e.vi}')" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;cursor:pointer;">
            <span style="font-family:monospace;font-size:16px;font-weight:700;color:var(--purple);">${e.vi}</span>
            <div style="text-align:right;">
              <div style="font-size:11px;color:var(--muted);">${e.ko}</div>
              <div style="font-size:10px;color:var(--dim);">[${e.pron}]</div>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </div>

    <div class="card">
      <div class="section-title">📖 연습 문장 — o 계열</div>
      ${[
        { vi: 'Nghỉ thoải mái.', ko: '편하게 쉬다.',      pron: '응이 토아이 마이' },
        { vi: 'Bánh xèo ngon quá!', ko: '반쎄오 너무 맛있다!', pron: '바잉 쌔오 응언 꾸아/반 쌔오 응영 우아' },
      ].map(s => `
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

/* ─── 7강 Ch4: 정리 + 인터랙티브 숙제 ─── */
function renderL7C4() {
  const summary = [
    { char: 'ia',    sound: '이어',    ex: 'bia' },
    { char: 'ua',    sound: '우어',    ex: 'mua' },
    { char: 'ưa',   sound: '으어',    ex: 'mưa' },
    { char: 'oa/ao', sound: '오아/아오', ex: 'hoa' },
    { char: 'oe/eo', sound: '오애/애오', ex: 'mèo' },
  ];

  const allSentences = [
    { vi: 'Uống bia.',    ko: '맥주를 마시다.',    pron: '우옹 비어/움 비어' },
    { vi: 'Mua sắm.',     ko: '쇼핑하다.',         pron: '무어 쌈' },
    { vi: 'Trời mưa.',    ko: '비가 오다.',         pron: '쩌이 므어' },
    { vi: 'Mặc áo.',      ko: '옷을 입다.',         pron: '막 아오' },
    { vi: 'Anh khoẻ.',    ko: '건강해/잘 지내.',   pron: '아잉 코애/안 코애' },
    { vi: 'Mua hoa.',     ko: '꽃을 사다.',         pron: '무어 호아' },
  ];

  // 숙제 데이터
  const hw = [
    {
      base: 'dưa',
      label: 'dưa :',
      words: [
        { vi: 'dưa',  ko: '메론' },
        { vi: 'dứa',  ko: '파인애플' },
        { vi: 'dừa',  ko: '코코넛' },
        { vi: 'dựa',  ko: '기대다' },
      ],
    },
    {
      base: 'hoa',
      label: 'hoa :',
      words: [
        { vi: 'hoa',  ko: '꽃' },
        { vi: 'hoá',  ko: '변하다' },
        { vi: 'hoà',  ko: '비기다' },
        { vi: 'hoả',  ko: '불' },
      ],
    },
  ];

  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">✅ 7강 이중모음 정리</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:10px;">
        ${summary.map(v => `
        <div onclick="TTS.speak('${v.ex}')" style="text-align:center;background:var(--bg);border:1.5px solid var(--border);border-radius:12px;padding:12px 4px;cursor:pointer;">
          <div style="font-family:monospace;font-size:19px;font-weight:700;color:var(--accent);">${v.char}</div>
          <div style="font-size:12px;color:var(--red);margin-top:3px;font-weight:700;">[${v.sound}]</div>
          <div style="font-size:10px;color:var(--dim);margin-top:2px;">${v.ex}</div>
        </div>`).join('')}
      </div>
      <div style="background:#0a1a2a;border:1px solid #2a5e8a;border-radius:12px;padding:10px;font-size:12px;color:#60a5fa;line-height:1.9;">
        💡 <strong>o + a,e 계열</strong> → [오] 발음<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<strong>o + i</strong> → 변동 없이 [어] 발음
      </div>
    </div>

    <div class="card">
      <div class="section-title">📝 전체 연습 문장</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        ${allSentences.map(s => `
        <div onclick="TTS.speak('${s.vi}')" style="background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:10px;cursor:pointer;">
          <div style="font-family:monospace;font-size:12px;font-weight:700;color:var(--accent);">${s.vi}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:2px;">${s.ko}</div>
          <div style="font-size:10px;color:var(--dim);margin-top:1px;">[${s.pron}]</div>
        </div>`).join('')}
      </div>
      <button onclick="playL7Sentences()" class="btn-full" style="margin-top:10px;">🔊 전부 듣기</button>
    </div>

    <div class="card" style="border-color:#6e5000;background:#1a1200;" id="l7hw-card">
      <div style="font-size:13px;font-weight:700;color:var(--accent);margin-bottom:10px;">📚 오늘의 숙제</div>
      <div style="font-size:12px;color:var(--muted);margin-bottom:12px;">음원을 듣고, 다음 단어를 5번씩 따라 읽어 보세요!</div>

      ${hw.map((group, gi) => `
      <div style="background:#0d0d1a;border:1px solid var(--border);border-radius:14px;padding:12px;margin-bottom:10px;">
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
          <span style="font-family:monospace;font-size:15px;font-weight:700;color:var(--accent);background:var(--surface);border:1.5px solid var(--border);border-radius:8px;padding:4px 12px;">${group.label}</span>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            ${group.words.map(w => `
            <div onclick="TTS.speak('${w.vi}')" style="text-align:center;cursor:pointer;">
              <div style="font-family:monospace;font-size:15px;font-weight:700;color:var(--red);background:#1a0a1a;border:1.5px solid var(--border);border-radius:8px;padding:4px 10px;">${w.vi}</div>
              <div style="font-size:10px;color:var(--dim);margin-top:2px;">${w.ko}</div>
            </div>`).join('<span style="color:var(--dim);font-size:14px;align-self:center;padding-top:0px;"> – </span>')}
          </div>
        </div>
      </div>`).join('')}

      <div style="margin-top:12px;">
        <div style="font-size:11px;color:var(--muted);margin-bottom:8px;">읽고 난 후, 체크로 표기해 봐요!</div>
        <div style="display:flex;gap:10px;justify-content:center;" id="l7-checks">
          ${[0,1,2,3,4].map(i => `
          <div onclick="l7Check(${i})" id="l7c${i}"
            style="width:36px;height:36px;border-radius:50%;border:2px solid var(--border);
                   background:var(--bg);cursor:pointer;display:flex;align-items:center;
                   justify-content:center;font-size:16px;transition:all .15s;">
          </div>`).join('')}
        </div>
        <div style="text-align:center;margin-top:8px;">
          <span id="l7-check-msg" style="font-size:11px;color:var(--dim);"></span>
        </div>
      </div>
    </div>
  </div>`;
}

/* ─── 7강 유틸 함수 ─── */
function playL7Sentences() {
  const s = ['Uống bia','Mua sắm','Trời mưa','Mặc áo','Anh khoẻ','Mua hoa'];
  let i = 0;
  function next() { if (i >= s.length) return; TTS.speak(s[i]); i++; setTimeout(next, 1600); }
  next();
}

/* 체크박스 인터랙션 */
const _l7checked = new Set();
function l7Check(idx) {
  const el = document.getElementById('l7c' + idx);
  if (!el) return;
  if (_l7checked.has(idx)) {
    _l7checked.delete(idx);
    el.style.background = 'var(--bg)';
    el.style.borderColor = 'var(--border)';
    el.innerHTML = '';
  } else {
    _l7checked.add(idx);
    el.style.background = '#4ade80';
    el.style.borderColor = '#4ade80';
    el.innerHTML = '✓';
    el.style.color = '#0d0d1a';
    el.style.fontWeight = '700';
  }
  const msg = document.getElementById('l7-check-msg');
  if (!msg) return;
  const n = _l7checked.size;
  const msgs = ['', '1번 완료! 💪', '2번 완료! 🔥', '3번 완료! ⭐', '4번 완료! 🌟', '5번 모두 완료! 🎉'];
  msg.textContent = msgs[n] || '';
  if (n === 5) msg.style.color = '#4ade80';
}
