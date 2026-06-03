/* ═══════════════════════════════════════════════════════════════
   8강 · 복자음 Ch / Tr / Kh / Ph / Th
   + Gh / Gi / Ng / Ngh / Nh (참고)
═══════════════════════════════════════════════════════════════ */
LECTURES[8] = {
  id: 8,
  title: '복자음 I',
  subtitle: 'Ch · Tr · Kh · Ph · Th',
  emoji: '🔠',
  chapters: [
    { id: 0, title: '문자표',      emoji: '📋' },
    { id: 1, title: 'Ch / Tr',    emoji: '🔤' },
    { id: 2, title: 'Kh / Ph / Th', emoji: '🔤' },
    { id: 3, title: 'ch vs tr',   emoji: '💡' },
    { id: 4, title: '정리',        emoji: '✅' },
  ],
  screens: [renderL8C0, renderL8C1, renderL8C2, renderL8C3, renderL8C4],
};

/* ─── 복자음 카드 렌더러 ─── */
function renderConsonantCards(items) {
  return `<div class="screen-scroll">
    ${items.map(item => `
    <div class="card">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:12px;">
        <div style="min-width:72px;height:72px;border:2px solid var(--accent);border-radius:14px;
             display:flex;flex-direction:column;align-items:center;justify-content:center;
             background:var(--bg);flex-shrink:0;padding:0 8px;">
          <span style="font-family:monospace;font-size:26px;font-weight:700;color:var(--accent);">${item.char}</span>
          <span style="font-size:9px;color:var(--dim);margin-top:1px;">${item.label}</span>
        </div>
        <div style="flex:1;">
          <div style="font-size:20px;font-weight:700;color:var(--red);">[${item.sound}]</div>
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
      ${item.endNote ? `
      <div style="background:#1a0a1a;border:1.5px solid #5a2a5a;border-radius:12px;padding:10px 12px;margin-top:8px;">
        <div style="font-size:11px;color:#d4a0ff;line-height:1.8;">${item.endNote}</div>
      </div>` : ''}
    </div>`).join('')}
  </div>`;
}

/* ─── 8강 Ch0: 문자표 ─── */
function renderL8C0() {
  const todayChars  = ['Ch','Tr','Kh','Ph','Th'];
  const otherChars  = ['Gh','Gi','Ng','Ngh','Nh'];

  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">📋 8강 오늘의 문자 (복자음)</div>

      <div style="border-radius:12px;overflow:hidden;border:1px solid var(--border);margin-bottom:12px;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);">
          ${todayChars.slice(0,3).map(c => `
          <div style="padding:16px 8px;text-align:center;background:#2a0a1a;border:0.5px solid var(--red);">
            <span style="font-family:monospace;font-size:20px;font-weight:700;color:var(--red);">${c}</span>
          </div>`).join('')}
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);">
          ${[...todayChars.slice(3), ''].map(c => `
          <div style="padding:16px 8px;text-align:center;background:${c ? '#2a0a1a' : 'var(--bg)'};border:0.5px solid ${c ? 'var(--red)' : 'var(--border)'};">
            ${c ? `<span style="font-family:monospace;font-size:20px;font-weight:700;color:var(--red);">${c}</span>` : ''}
          </div>`).join('')}
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);">
          ${otherChars.slice(0,3).map(c => `
          <div style="padding:16px 8px;text-align:center;background:var(--bg);border:0.5px solid var(--border);">
            <span style="font-family:monospace;font-size:20px;font-weight:700;color:#6a4aaa;">${c}</span>
          </div>`).join('')}
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);">
          ${[...otherChars.slice(3), ''].map(c => `
          <div style="padding:16px 8px;text-align:center;background:var(--bg);border:0.5px solid var(--border);">
            ${c ? `<span style="font-family:monospace;font-size:20px;font-weight:700;color:#6a4aaa;">${c}</span>` : ''}
          </div>`).join('')}
        </div>
      </div>

      <div style="display:flex;gap:12px;flex-wrap:wrap;">
        <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--red);">
          <span style="width:10px;height:10px;border-radius:2px;background:var(--red);display:inline-block;"></span>오늘 집중 학습
        </div>
        <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:#6a4aaa;">
          <span style="width:10px;height:10px;border-radius:2px;background:#6a4aaa;display:inline-block;"></span>다음 강의 예고
        </div>
      </div>
    </div>

    <div class="card" style="border-color:#6e5000;background:#1a1200;">
      <div style="font-size:13px;font-weight:700;color:var(--accent);margin-bottom:8px;">💡 8강 핵심 포인트</div>
      <div style="font-size:12px;color:var(--muted);line-height:2.1;">
        • <span style="color:var(--red);font-weight:700">Ch</span> [쩌] 첫자음 [ㅉ] / 끝자음 [익,ㄷ/읃]<br>
        • <span style="color:var(--red);font-weight:700">Tr</span> [쩌] : 혀를 입천장에 <span style="color:var(--accent)">강하게</span> 밀며<br>
        • <span style="color:var(--red);font-weight:700">ch vs tr</span> : 혀 위치로 구별!<br>
        • <span style="color:var(--red);font-weight:700">Ph</span> [ㅍ(f)] · <span style="color:var(--red);font-weight:700">Th</span> [ㅌ] · <span style="color:var(--red);font-weight:700">Kh</span> [ㅋ]
      </div>
    </div>
  </div>`;
}

/* ─── 8강 Ch1: Ch / Tr ─── */
function renderL8C1() {
  const items = [
    {
      char: 'Ch', label: 'chờ · 쩌', sound: 'ㅉ / 익,ㄷ/읃',
      note: '첫자음: [ㅉ] / 끝자음: [익] 북부, [ㄷ/읃] 남부<br>✓ 혀를 입천장 <span style="color:var(--accent)">앞쪽으로</span>',
      endNote: '🔑 끝자음 ~ch<br>• 북부: <span style="color:#f7c948">\'~익\' 받침으로 발음</span> (ex. cách → 까익)<br>• 남부: <span style="color:#f87171">\'ㄷ/읃\' 받침으로 발음</span> (ex. cách → 깓)',
      examples: [
        { vi: 'cách',  ko: '수단, 방법', pron: '까익/깓' },
        { vi: 'chị',   ko: '누나, 언니', pron: '찌' },
        { vi: 'chắc',  ko: '확실한',     pron: '짝' },
      ],
    },
    {
      char: 'Tr', label: 'trờ · 쩌', sound: 'ㅉ',
      note: '✓ 혀를 입천장에 <span style="color:var(--accent)">강하게</span> 밀며 발음',
      examples: [
        { vi: 'trà',    ko: '차',          pron: '짜' },
        { vi: 'trong',  ko: '~안에',       pron: '쩜' },
        { vi: 'trước',  ko: '이전에, 먼저', pron: '쯔억/쪽' },
      ],
    },
  ];
  return renderConsonantCards(items);
}

/* ─── 8강 Ch2: Kh / Ph / Th ─── */
function renderL8C2() {
  const items = [
    {
      char: 'Kh', label: 'khờ · 커', sound: 'ㅋ',
      note: '',
      examples: [
        { vi: 'khám',  ko: '검사하다', pron: '캄' },
        { vi: 'khen',  ko: '칭찬하다', pron: '캔' },
        { vi: 'khác',  ko: '다른',     pron: '칵' },
      ],
    },
    {
      char: 'Ph', label: 'phờ · (f)퍼', sound: 'ㅍ(f)',
      note: '영어 f 발음과 동일',
      examples: [
        { vi: 'cà phê', ko: '커피',       pron: '까 페' },
        { vi: 'phim',   ko: '영화, 드라마', pron: '핌' },
        { vi: 'phút',   ko: '(몇)분',      pron: '푿/폭' },
      ],
    },
    {
      char: 'Th', label: 'thờ · 터', sound: 'ㅌ',
      note: '',
      examples: [
        { vi: 'thi',      ko: '시험 보다',  pron: '티' },
        { vi: 'thường',   ko: '보통, 자주', pron: '트엉/틍' },
        { vi: 'thẳng',    ko: '곧은, 직선의', pron: '탕' },
      ],
    },
  ];

  return renderConsonantCards(items);
}

/* ─── 8강 Ch3: ch vs tr 발음 고민 해결 + 빠르게 읽기 게임 ─── */
function renderL8C3() {
  const gameWords = ['tra','cha','trá','chá','trả','chả'];

  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">💡 발음 고민 해결!</div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;">
        <div style="background:var(--bg);border:2px solid var(--accent);border-radius:14px;padding:14px;text-align:center;">
          <div style="font-family:monospace;font-size:32px;font-weight:700;color:var(--accent);">ch</div>
          <div style="background:#1a1200;border:1px solid #6e5000;border-radius:10px;padding:8px;margin-top:8px;">
            <div style="font-size:11px;color:#f7c948;line-height:1.7;">✓ 혀를 입천장<br><span style="font-weight:700">앞쪽으로</span></div>
          </div>
          <div style="margin-top:10px;">
            ${[{vi:'chụp',ko:'찍다',pron:'쭙'},{vi:'chú ý',ko:'주의하다',pron:'쭈 이'}].map(e=>`
            <div onclick="TTS.speak('${e.vi}')" style="margin-bottom:5px;cursor:pointer;text-align:left;padding:4px 6px;border-radius:8px;background:var(--surface);">
              <span style="font-family:monospace;font-size:14px;font-weight:700;color:var(--accent);">${e.vi}</span>
              <span style="font-size:10px;color:var(--dim);margin-left:4px;">[${e.pron}] ${e.ko}</span>
            </div>`).join('')}
          </div>
        </div>

        <div style="background:var(--bg);border:2px solid var(--purple);border-radius:14px;padding:14px;text-align:center;">
          <div style="font-family:monospace;font-size:32px;font-weight:700;color:var(--purple);">tr</div>
          <div style="background:#1a0f30;border:1px solid #5a3a8a;border-radius:10px;padding:8px;margin-top:8px;">
            <div style="font-size:11px;color:#d4a0ff;line-height:1.7;">✓ 혀를 입천장에<br><span style="font-weight:700">강하게</span> 밀며</div>
          </div>
          <div style="margin-top:10px;">
            ${[{vi:'trứng',ko:'계란',pron:'쯩'},{vi:'trưa',ko:'점심',pron:'쯔어'}].map(e=>`
            <div onclick="TTS.speak('${e.vi}')" style="margin-bottom:5px;cursor:pointer;text-align:left;padding:4px 6px;border-radius:8px;background:var(--surface);">
              <span style="font-family:monospace;font-size:14px;font-weight:700;color:var(--purple);">${e.vi}</span>
              <span style="font-size:10px;color:var(--dim);margin-left:4px;">[${e.pron}] ${e.ko}</span>
            </div>`).join('')}
          </div>
        </div>
      </div>

      <div style="font-size:12px;color:var(--muted);font-weight:700;margin-bottom:8px;">문자의 발음에 유의하며 따라 읽어 보세요!</div>
      <div style="background:#1a1200;border:1.5px solid var(--accent);border-radius:14px;padding:14px;margin-bottom:4px;">
        <div style="font-family:monospace;font-size:22px;font-weight:700;color:var(--red);margin-bottom:6px;">chưa</div>
        <div style="font-size:11px;color:var(--muted);margin-bottom:10px;">아직 ~하다</div>
        ${[
          {vi:'Em ăn trưa chưa?',    ko:'밥 먹었어?',           pron:'앰 안 쯔어 쯔어/앰 앙 쯔어 쯔어'},
          {vi:'Cậu đến trường chưa?',ko:'학교 도착했어?',        pron:'꺼우 덴 쯔엉 쯔어/꺼우 덴 쯩 쯔어'},
        ].map(s => `
        <div onclick="TTS.speak('${s.vi}')" class="list-item" style="cursor:pointer;margin-bottom:6px;">
          <div>
            <div style="font-family:monospace;font-size:13px;font-weight:700;color:var(--accent);">${s.vi}</div>
            <div style="font-size:11px;color:var(--muted);margin-top:1px;">${s.ko}</div>
            <div style="font-size:10px;color:var(--dim);">[${s.pron}]</div>
          </div>
          <span style="font-size:18px;opacity:.5;flex-shrink:0;">🔊</span>
        </div>`).join('')}
      </div>
    </div>

    <!-- 빠르게 읽기 게임 -->
    <div class="card" style="border-color:#2a7a2a;background:#0a1a0a;" id="l8-game-card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
        <div style="font-size:14px;font-weight:700;color:#4ade80;">'ch/tr'가 들어간 단어 빠르게 읽기 게임</div>
        <span style="font-size:10px;color:var(--dim);">시간 제한: 10초</span>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-bottom:16px;" id="l8-game-words">
        ${gameWords.map((w,i) => `
        <span onclick="TTS.speak('${w}')" id="l8gw${i}"
          style="font-family:monospace;font-size:18px;font-weight:700;
                 color:${i%2===0?'var(--purple)':'var(--accent)'};
                 background:var(--surface);border:1.5px solid var(--border);
                 border-radius:10px;padding:6px 12px;cursor:pointer;transition:all .2s;">${w}</span>
        ${i < gameWords.length-1 ? '<span style="color:var(--dim);font-size:14px;align-self:center;">–</span>' : ''}`).join('')}
      </div>

      <div style="display:flex;gap:10px;align-items:center;justify-content:center;flex-wrap:wrap;">
        <button onclick="l8GameStart()" id="l8-start-btn"
          style="padding:10px 22px;border-radius:24px;border:2px solid #4ade80;
                 background:#0a2a0a;color:#4ade80;font-size:14px;font-weight:700;
                 font-family:'Noto Sans KR',sans-serif;cursor:pointer;">
          ▶ 시작
        </button>
        <div id="l8-timer"
          style="font-size:28px;font-weight:700;color:#4ade80;
                 font-family:'Boogaloo',cursive;min-width:36px;text-align:center;">10</div>
        <button onclick="l8GameSpeak()" id="l8-speak-btn"
          style="padding:10px 18px;border-radius:24px;border:1.5px solid var(--border);
                 background:var(--bg);color:var(--muted);font-size:13px;
                 font-family:'Noto Sans KR',sans-serif;cursor:pointer;">
          🔊 전부 듣기
        </button>
      </div>
      <div id="l8-game-msg" style="text-align:center;margin-top:8px;font-size:12px;color:var(--dim);min-height:18px;"></div>
    </div>
  </div>`;
}

/* ─── 8강 Ch4: 정리 + 인터랙티브 숙제 ─── */
function renderL8C4() {
  const summary = [
    { char:'Ch', sound:'ㅉ/익,ㄷ', ex:'chị',   note:'혀 앞쪽' },
    { char:'Tr', sound:'ㅉ',       ex:'trà',   note:'혀 강하게' },
    { char:'Kh', sound:'ㅋ',       ex:'khác',  note:'' },
    { char:'Ph', sound:'ㅍ(f)',    ex:'phim',  note:'영어 f' },
    { char:'Th', sound:'ㅌ',       ex:'thường',note:'' },
  ];

  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">✅ 8강 복자음 정리</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:10px;">
        ${summary.map(v => `
        <div onclick="TTS.speak('${v.ex}')" style="text-align:center;background:var(--bg);border:1.5px solid var(--border);border-radius:12px;padding:10px 4px;cursor:pointer;">
          <div style="font-family:monospace;font-size:22px;font-weight:700;color:var(--accent);">${v.char}</div>
          <div style="font-size:12px;color:var(--red);margin-top:3px;font-weight:700;">[${v.sound}]</div>
          <div style="font-size:10px;color:var(--dim);margin-top:2px;">${v.note || v.ex}</div>
        </div>`).join('')}
      </div>

      <div style="background:#1a0a1a;border:1.5px solid #5a2a5a;border-radius:12px;padding:12px;font-size:12px;color:#d4a0ff;line-height:1.9;">
        🔑 끝자음 ~ch<br>
        &nbsp;&nbsp;&nbsp;• 북부: <span style="color:#f7c948">['~익'] 받침</span> (cách → 까익)<br>
        &nbsp;&nbsp;&nbsp;• 남부: <span style="color:#f87171">['ㄷ/읃'] 받침</span> (cách → 깓)
      </div>
    </div>

    <div class="card">
      <div class="section-title">📝 연습 문장</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        ${[
          { vi:'Chào chị.',   ko:'안녕하세요.',         pron:'짜오 찌' },
          { vi:'Uống trà.',   ko:'차를 마시다.',        pron:'우옹 짜/움 짜' },
          { vi:'Khám bệnh.',  ko:'진찰하다.',           pron:'캄 베잉/캄 벤' },
          { vi:'Xem phim.',   ko:'영화/드라마 보다.',   pron:'쌤 핌' },
          { vi:'Thi đỗ.',     ko:'(시험에) 합격하다.',  pron:'티 도' },
          { vi:'Thi trước.',  ko:'먼저 시험 보다.',     pron:'티 쯔억/티 쪽' },
        ].map(s => `
        <div onclick="TTS.speak('${s.vi}')" style="background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:10px;cursor:pointer;">
          <div style="font-family:monospace;font-size:12px;font-weight:700;color:var(--accent);">${s.vi}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:2px;">${s.ko}</div>
          <div style="font-size:10px;color:var(--dim);margin-top:1px;">[${s.pron}]</div>
        </div>`).join('')}
      </div>
      <button onclick="playL8Sentences()" class="btn-full" style="margin-top:10px;">🔊 전부 듣기</button>
    </div>

    <!-- 인터랙티브 숙제 -->
    <div class="card" style="border-color:#6e5000;background:#1a1200;">
      <div style="font-size:13px;font-weight:700;color:var(--accent);margin-bottom:6px;">📚 오늘의 숙제</div>
      <div style="font-size:12px;color:var(--muted);margin-bottom:14px;">음원을 듣고, 다음 문장을 5번씩 따라 읽어 보세요!</div>

      <div onclick="TTS.speak('Em ăn trưa chưa')"
        style="background:#0d0d1a;border:1.5px solid var(--border);border-radius:14px;
               padding:16px;text-align:center;cursor:pointer;margin-bottom:16px;">
        <div style="font-family:monospace;font-size:22px;font-weight:700;line-height:1.5;">
          <span style="color:#f0e6ff;">Em ăn </span><span style="color:var(--purple);">trưa</span><span style="color:#f0e6ff;"> </span><span style="color:var(--red);">chưa</span><span style="color:#f0e6ff;">?</span>
        </div>
        <div style="font-size:12px;color:var(--muted);margin-top:6px;">밥 먹었어?</div>
        <div style="font-size:11px;color:var(--dim);margin-top:2px;">[앰 안 쯔어 쯔어/앰 앙 쯔어 쯔어]</div>
      </div>

      <div style="display:flex;gap:10px;justify-content:center;margin-bottom:8px;" id="l8-hw-checks">
        ${[0,1,2,3,4].map(i => `
        <div onclick="l8HwCheck(${i})" id="l8hw${i}"
          style="width:40px;height:40px;border-radius:50%;border:2px solid var(--border);
                 background:var(--bg);cursor:pointer;display:flex;align-items:center;
                 justify-content:center;font-size:18px;transition:all .2s;">
        </div>`).join('')}
      </div>
      <div style="text-align:center;">
        <span id="l8-hw-msg" style="font-size:12px;color:var(--dim);min-height:18px;display:block;"></span>
      </div>
    </div>
  </div>`;
}

/* ─── 8강 유틸 함수 ─── */
function playL8Sentences() {
  const s = ['Chào chị','Uống trà','Khám bệnh','Xem phim','Thi đỗ','Thi trước'];
  let i = 0;
  function next() { if (i >= s.length) return; TTS.speak(s[i]); i++; setTimeout(next, 1600); }
  next();
}

/* 빠르게 읽기 게임 */
let _l8Timer = null;
let _l8Time  = 10;
let _l8Running = false;

function l8GameStart() {
  if (_l8Running) return;
  _l8Running = true;
  _l8Time = 10;
  const btn = document.getElementById('l8-start-btn');
  const timerEl = document.getElementById('l8-timer');
  const msgEl   = document.getElementById('l8-game-msg');
  if (btn) btn.style.opacity = '0.4';
  if (msgEl) { msgEl.textContent = '읽는 중! 🔥'; msgEl.style.color = '#fb923c'; }

  // 단어 하이라이트 순환
  const words = document.querySelectorAll('[id^="l8gw"]');
  let wi = 0;
  function highlightNext() {
    words.forEach(w => { w.style.transform='scale(1)'; w.style.boxShadow='none'; });
    if (wi < words.length) {
      words[wi].style.transform = 'scale(1.15)';
      words[wi].style.boxShadow = '0 0 12px rgba(247,201,72,0.6)';
      wi++;
      if (wi >= words.length) wi = 0;
    }
  }
  const hlInterval = setInterval(highlightNext, 1600);

  _l8Timer = setInterval(() => {
    _l8Time--;
    if (timerEl) {
      timerEl.textContent = _l8Time;
      timerEl.style.color = _l8Time <= 3 ? '#f87171' : '#4ade80';
    }
    if (_l8Time <= 0) {
      clearInterval(_l8Timer);
      clearInterval(hlInterval);
      _l8Running = false;
      words.forEach(w => { w.style.transform='scale(1)'; w.style.boxShadow='none'; });
      if (btn) btn.style.opacity = '1';
      if (timerEl) { timerEl.textContent = '🎉'; timerEl.style.color = '#4ade80'; }
      if (msgEl) { msgEl.textContent = '완료! 잘 하셨어요 🎊'; msgEl.style.color = '#4ade80'; }
      setTimeout(() => {
        if (timerEl) timerEl.textContent = '10';
        if (msgEl) msgEl.textContent = '';
      }, 3000);
    }
  }, 1000);
}

function l8GameSpeak() {
  const words = ['tra','cha','trá','chá','trả','chả'];
  let i = 0;
  function next() { if (i >= words.length) return; TTS.speak(words[i]); i++; setTimeout(next, 800); }
  next();
}

/* 숙제 체크박스 */
const _l8hwChecked = new Set();
function l8HwCheck(idx) {
  const el = document.getElementById('l8hw' + idx);
  if (!el) return;
  if (_l8hwChecked.has(idx)) {
    _l8hwChecked.delete(idx);
    el.style.background = 'var(--bg)';
    el.style.borderColor = 'var(--border)';
    el.innerHTML = '';
  } else {
    _l8hwChecked.add(idx);
    el.style.background = '#4ade80';
    el.style.borderColor = '#4ade80';
    el.innerHTML = '✓';
    el.style.color = '#0d0d1a';
    el.style.fontWeight = '700';
  }
  const msg = document.getElementById('l8-hw-msg');
  if (!msg) return;
  const n = _l8hwChecked.size;
  const msgs = ['','1번 완료! 💪','2번 완료! 🔥','3번 완료! ⭐','4번 완료! 🌟','5번 모두 완료! 🎉'];
  msg.textContent = msgs[n] || '';
  msg.style.color = n === 5 ? '#4ade80' : 'var(--dim)';
}
