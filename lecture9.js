/* ═══════════════════════════════════════════════════════════════
   9강 · 복자음 II — Gh / Gi / Ng / Ngh / Nh
═══════════════════════════════════════════════════════════════ */
LECTURES[9] = {
  id: 9,
  title: '복자음 II',
  subtitle: 'Gh · Gi · Ng · Ngh · Nh',
  emoji: '🔡',
  chapters: [
    { id: 0, title: '문자표',        emoji: '📋' },
    { id: 1, title: 'Gh / Gi',      emoji: '🔤' },
    { id: 2, title: 'Ng / Ngh / Nh', emoji: '🔤' },
    { id: 3, title: 'nh 발음 비법',  emoji: '💡' },
    { id: 4, title: '정리',          emoji: '✅' },
  ],
  screens: [renderL9C0, renderL9C1, renderL9C2, renderL9C3, renderL9C4],
};

/* ─── 9강 Ch0: 문자표 ─── */
function renderL9C0() {
  const prev  = ['Ch','Tr','Kh','Ph','Th',''];
  const today = ['Gh','Gi','Ng','Ngh','Nh',''];

  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">📋 9강 오늘의 문자 (복자음)</div>
      <div style="border-radius:12px;overflow:hidden;border:1px solid var(--border);margin-bottom:12px;">
        ${[prev.slice(0,3), prev.slice(3)].map(row => `
        <div style="display:grid;grid-template-columns:repeat(3,1fr);">
          ${row.map(c => `
          <div style="padding:16px 8px;text-align:center;background:var(--bg);border:0.5px solid var(--border);">
            ${c ? `<span style="font-family:monospace;font-size:20px;font-weight:700;color:#6a4aaa;">${c}</span>` : ''}
          </div>`).join('')}
        </div>`).join('')}
        ${[today.slice(0,3), today.slice(3)].map(row => `
        <div style="display:grid;grid-template-columns:repeat(3,1fr);">
          ${row.map(c => `
          <div style="padding:16px 8px;text-align:center;background:${c ? '#2a0a1a' : 'var(--bg)'};border:0.5px solid ${c ? 'var(--red)' : 'var(--border)'};">
            ${c ? `<span style="font-family:monospace;font-size:20px;font-weight:700;color:var(--red);">${c}</span>` : ''}
          </div>`).join('')}
        </div>`).join('')}
      </div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;">
        <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:#6a4aaa;">
          <span style="width:10px;height:10px;border-radius:2px;background:#6a4aaa;display:inline-block;"></span>8강 복습
        </div>
        <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--red);">
          <span style="width:10px;height:10px;border-radius:2px;background:var(--red);display:inline-block;"></span>오늘 집중 학습
        </div>
      </div>
    </div>

    <div class="card" style="border-color:#6e5000;background:#1a1200;">
      <div style="font-size:13px;font-weight:700;color:var(--accent);margin-bottom:8px;">💡 9강 핵심 포인트</div>
      <div style="font-size:12px;color:var(--muted);line-height:2.1;">
        • <span style="color:var(--red);font-weight:700">Gh</span> [ㄱ] · e/i/ê 앞에서만 사용<br>
        • <span style="color:var(--red);font-weight:700">Gi</span> [ㅈ(zi)] 북부 / [ㅇ(y)] 남부<br>
        • <span style="color:var(--red);font-weight:700">Ng</span> [응] 첫/끝자음 · <span style="color:var(--red);font-weight:700">Ngh</span> [응] e/i/ê 앞<br>
        • <span style="color:var(--red);font-weight:700">Nh</span> [니/잉,ㄴ] — ㄴ+이중모음으로 이어 읽기
      </div>
    </div>
  </div>`;
}

/* ─── 9강 Ch1: Gh / Gi ─── */
function renderL9C1() {
  const items = [
    {
      char: 'Gh', label: 'ghờ · 거', sound: 'ㄱ',
      note: 'e / i / ê 앞에서만 사용',
      examples: [
        { vi: 'ghế',  ko: '의자',    pron: '게' },
        { vi: 'ghi',  ko: '기록하다', pron: '기' },
        { vi: 'ghét', ko: '싫어하다', pron: '갯/객' },
      ],
    },
    {
      char: 'Gi', label: 'giờ · 저', sound: 'ㅈ(zi)',
      note: '북부: [ㅈ(zi)] / 남부: [ㅇ(y)]',
      examples: [
        { vi: 'gì',   ko: '무엇',   pron: '지/(ㅖ)이' },
        { vi: 'giúp', ko: '돕다',   pron: '줍/윱' },
        { vi: 'giờ',  ko: '돕다',   pron: '저/여' },
      ],
    },
  ];

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
    </div>`).join('')}
  </div>`;
}

/* ─── 9강 Ch2: Ng / Ngh / Nh ─── */
function renderL9C2() {
  const items = [
    {
      char: 'Ng', label: 'ngờ · 응어', sound: '응 / ㅇ,ㅁ',
      note: '첫자음: [응] / 끝자음: [ㅇ] 북부, [ㅁ] 남부',
      examples: [
        { vi: 'người', ko: '사람',       pron: '응으어이/응으이' },
        { vi: 'uống',  ko: '마시다',     pron: '우옹/움' },
        { vi: 'sang',  ko: '건너가다/오다', pron: '쌍' },
      ],
    },
    {
      char: 'Ngh', label: 'nghờ · 응어', sound: '응',
      note: 'e / i / ê / iê 앞에서만 사용. Ng와 발음 동일',
      examples: [
        { vi: 'nghe',  ko: '듣다',   pron: '응애' },
        { vi: 'nghi',  ko: '쉬다',   pron: '응이' },
        { vi: 'nghĩ',  ko: '생각하다', pron: '응이' },
      ],
    },
    {
      char: 'Nh', label: 'nhờ · 니어', sound: '니 / 잉,ㄴ',
      note: '첫자음: [니/ㄴ] — ㄴ+이중모음으로 이어 읽기<br>끝자음: [잉] 북부, [ㄴ] 남부',
      examples: [
        { vi: 'nhé',   ko: '~하렴 (문미 조사)', pron: '내' },
        { vi: 'xinh',  ko: '예쁜',             pron: '씽/씬' },
        { vi: 'nhớ',   ko: '그리워하다, 기억하다', pron: '녀' },
      ],
    },
  ];

  return `<div class="screen-scroll">
    ${items.map(item => `
    <div class="card">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:12px;">
        <div style="min-width:72px;height:72px;border:2px solid var(--accent);border-radius:14px;
             display:flex;flex-direction:column;align-items:center;justify-content:center;
             background:var(--bg);flex-shrink:0;padding:0 8px;">
          <span style="font-family:monospace;font-size:${item.char.length>2?'20':'26'}px;font-weight:700;color:var(--accent);">${item.char}</span>
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
    </div>`).join('')}

    <div class="card">
      <div class="section-title">📖 연습 문장</div>
      ${[
        { vi: 'Ngồi ghế.',   ko: '의자에 앉다.',  pron: '응오이 게' },
        { vi: 'Giúp nhau.',  ko: '서로 돕다.',    pron: '줍 나우/윱 나우' },
        { vi: 'Uống đi!',    ko: '마셔(마시자)!', pron: '우옹 디/움 디' },
        { vi: 'Nghe nhạc.',  ko: '음악을 듣다.',  pron: '응애 낙' },
        { vi: 'Xinh quá!',   ko: '너무 예쁘다!',  pron: '씽 꾸아/씬 우아' },
      ].map(s => `
      <div onclick="TTS.speak('${s.vi}')" class="list-item" style="cursor:pointer;">
        <div>
          <div style="font-family:monospace;font-size:15px;font-weight:700;color:var(--accent);">${s.vi}</div>
          <div style="font-size:12px;color:var(--muted);margin-top:1px;">${s.ko}</div>
          <div style="font-size:11px;color:var(--dim);">[${s.pron}]</div>
        </div>
        <span style="font-size:20px;opacity:.5;flex-shrink:0;">🔊</span>
      </div>`).join('')}
    </div>
  </div>`;
}

/* ─── 9강 Ch3: nh 발음 비법 + 빠르게 읽기 게임 ─── */
function renderL9C3() {
  const gameWords = ['như','nhé','nhà','nhỏ','nhở','nhanh'];

  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">💡 발음 고민 해결!</div>

      <div style="display:flex;align-items:center;justify-content:center;padding:18px 0 14px;">
        <div style="width:90px;height:72px;border:2.5px solid var(--accent);border-radius:14px;
             display:flex;align-items:center;justify-content:center;background:var(--bg);">
          <span style="font-family:monospace;font-size:32px;font-weight:700;color:var(--accent);">nh</span>
        </div>
      </div>

      <div style="background:#0a1a2a;border:1.5px solid #2a5e8a;border-radius:14px;padding:13px 15px;margin-bottom:14px;">
        <div style="font-size:13px;color:#f0e6ff;line-height:2.0;">
          ✓ <span style="color:var(--accent);font-weight:700">'ㄴ + 이중 모음'</span> 발음<br>
          ✓ 뒤에 오는 모음과 <span style="color:var(--accent);font-weight:700">자연스럽게 이어 읽기</span>
        </div>
      </div>

      <!-- 이어 읽기 예시 -->
      <div style="text-align:center;margin-bottom:14px;">
        <div style="font-size:15px;font-weight:700;color:var(--red);margin-bottom:10px;">녀, 냐, 뇨, 뉴, 늬으, 늬, 녜, …</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;text-align:left;">
          ${[
            { vi:'nhà',   ko:'집',         pron:'냐' },
            { vi:'nhanh', ko:'빠른',        pron:'나잉/난' },
            { vi:'nhưng', ko:'하지만',      pron:'느응' },
            { vi:'như',   ko:'~처럼',       pron:'느으' },
          ].map(e => `
          <div onclick="TTS.speak('${e.vi}')" style="background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:10px;cursor:pointer;">
            <span style="font-family:monospace;font-size:16px;font-weight:700;color:var(--accent);">${e.vi}</span>
            <span style="font-size:11px;color:var(--muted);margin-left:6px;">${e.ko}</span>
            <div style="font-size:10px;color:var(--dim);margin-top:2px;">[${e.pron}]</div>
          </div>`).join('')}
        </div>
      </div>

      <!-- nhớ 예문 -->
      <div style="background:#1a1200;border:1.5px solid var(--accent);border-radius:14px;padding:14px;">
        <div style="font-family:monospace;font-size:26px;font-weight:700;color:var(--red);text-align:center;margin-bottom:4px;">nhớ</div>
        <div style="font-size:11px;color:var(--muted);text-align:center;margin-bottom:12px;">그리워하다, 기억하다</div>
        ${[
          { vi:'Em nhớ đến sớm nhé.', ko:'일찍 오는 거 잊지 마.',  pron:'앰 녀 덴 썸 내/앰 녀 덴 썸 내' },
          { vi:'Chị nhớ quá.',        ko:'너무 그리워.',           pron:'찌 녀 꾸아/찌 녀 우아' },
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
    <div class="card" style="border-color:#2a7a2a;background:#0a1a0a;" id="l9-game-card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
        <div style="font-size:14px;font-weight:700;color:#4ade80;">'nh'가 들어간 단어 빠르게 읽기 게임</div>
        <span style="font-size:10px;color:var(--dim);">시간 제한: 5초</span>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-bottom:16px;" id="l9-game-words">
        ${gameWords.map((w,i) => `
        <span onclick="TTS.speak('${w}')" id="l9gw${i}"
          style="font-family:monospace;font-size:17px;font-weight:700;
                 color:${i%2===0?'var(--red)':'var(--orange)'};
                 background:var(--surface);border:1.5px solid var(--border);
                 border-radius:10px;padding:6px 11px;cursor:pointer;transition:all .2s;">${w}</span>
        ${i < gameWords.length-1 ? '<span style="color:var(--dim);font-size:13px;align-self:center;">–</span>' : ''}`).join('')}
      </div>

      <div style="display:flex;gap:10px;align-items:center;justify-content:center;flex-wrap:wrap;">
        <button onclick="l9GameStart()" id="l9-start-btn"
          style="padding:10px 22px;border-radius:24px;border:2px solid #4ade80;
                 background:#0a2a0a;color:#4ade80;font-size:14px;font-weight:700;
                 font-family:'Noto Sans KR',sans-serif;cursor:pointer;">▶ 시작</button>
        <div id="l9-timer"
          style="font-size:28px;font-weight:700;color:#4ade80;font-family:'Boogaloo',cursive;min-width:28px;text-align:center;">5</div>
        <button onclick="l9GameSpeak()" id="l9-speak-btn"
          style="padding:10px 18px;border-radius:24px;border:1.5px solid var(--border);
                 background:var(--bg);color:var(--muted);font-size:13px;
                 font-family:'Noto Sans KR',sans-serif;cursor:pointer;">🔊 전부 듣기</button>
      </div>
      <div id="l9-game-msg" style="text-align:center;margin-top:8px;font-size:12px;color:var(--dim);min-height:18px;"></div>
    </div>
  </div>`;
}

/* ─── 9강 Ch4: 정리 + 인터랙티브 숙제 ─── */
function renderL9C4() {
  const summary = [
    { char:'Gh',  sound:'ㄱ',       ex:'ghế',  note:'e/i/ê 앞' },
    { char:'Gi',  sound:'ㅈ(zi)',    ex:'giúp', note:'북부ㅈ/남부ㅇ' },
    { char:'Ng',  sound:'응/ㅇ,ㅁ', ex:'uống', note:'끝자음 ㅇ/ㅁ' },
    { char:'Ngh', sound:'응',        ex:'nghe', note:'e/i/ê 앞' },
    { char:'Nh',  sound:'니/잉,ㄴ', ex:'nhớ',  note:'ㄴ+이중모음' },
  ];

  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">✅ 9강 복자음 정리</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:10px;">
        ${summary.map(v => `
        <div onclick="TTS.speak('${v.ex}')" style="text-align:center;background:var(--bg);border:1.5px solid var(--border);border-radius:12px;padding:10px 4px;cursor:pointer;">
          <div style="font-family:monospace;font-size:20px;font-weight:700;color:var(--accent);">${v.char}</div>
          <div style="font-size:11px;color:var(--red);margin-top:3px;font-weight:700;">[${v.sound}]</div>
          <div style="font-size:9px;color:var(--dim);margin-top:2px;">${v.note}</div>
        </div>`).join('')}
      </div>

      <div style="background:#0a1a2a;border:1px solid #2a5e8a;border-radius:12px;padding:10px;font-size:12px;color:#60a5fa;line-height:1.9;">
        💡 <strong>Gh / Ngh</strong> → e·i·ê 앞에서만 사용<br>
        💡 <strong>Nh</strong> → ㄴ + 뒤 모음을 자연스럽게 이어 읽기
      </div>
    </div>

    <!-- 인터랙티브 숙제 -->
    <div class="card" style="border-color:#6e5000;background:#1a1200;">
      <div style="font-size:13px;font-weight:700;color:var(--accent);margin-bottom:6px;">📚 오늘의 숙제</div>
      <div style="font-size:12px;color:var(--muted);margin-bottom:14px;">음원을 듣고, 다음 빈칸을 채워 보세요!</div>

      <div onclick="TTS.speak('Giúp nhau')"
        style="background:#0d0d1a;border:1.5px solid var(--border);border-radius:14px;
               padding:20px 16px;text-align:center;cursor:pointer;margin-bottom:14px;">
        <div style="font-family:monospace;font-size:28px;font-weight:700;line-height:1.6;display:flex;align-items:center;justify-content:center;gap:4px;flex-wrap:wrap;">
          <span style="display:inline-block;width:30px;height:30px;border:2.5px solid var(--accent);border-radius:6px;vertical-align:middle;"></span>
          <span style="color:var(--accent);">úp</span>
          <span style="display:inline-block;width:30px;height:30px;border:2.5px solid var(--red);border-radius:6px;vertical-align:middle;margin-left:10px;"></span>
          <span style="color:var(--red);">au.</span>
        </div>
        <div style="font-size:14px;color:var(--muted);margin-top:10px;">[줍 나우/윱 나우]</div>
        <div style="font-size:12px;color:var(--dim);margin-top:4px;">서로 돕다.</div>
      </div>

      <div style="background:#1a0f30;border:1px solid #5a3a8a;border-radius:12px;padding:10px 14px;" id="l9-hw-reveal" onclick="l9HwReveal()">
        <div style="font-size:12px;color:var(--dim);margin-bottom:4px;">정답 확인 (탭해서 보기)</div>
        <div id="l9-hw-answer" style="font-family:monospace;font-size:20px;font-weight:700;color:transparent;background:var(--surface);border-radius:8px;padding:8px;text-align:center;transition:color .3s;cursor:pointer;">
          <span style="color:var(--accent);">Gi</span>úp <span style="color:var(--red);">Nh</span>au.
        </div>
        <div id="l9-hw-note" style="font-size:11px;color:transparent;text-align:center;margin-top:4px;transition:color .3s;">
          Gi = [줍/윱] · Nh = [나우/나우]
        </div>
      </div>
    </div>
  </div>`;
}

/* ─── 9강 유틸 함수 ─── */
let _l9Timer = null, _l9Time = 5, _l9Running = false;

function l9GameStart() {
  if (_l9Running) return;
  _l9Running = true;
  _l9Time = 5;
  const btn     = document.getElementById('l9-start-btn');
  const timerEl = document.getElementById('l9-timer');
  const msgEl   = document.getElementById('l9-game-msg');
  if (btn) btn.style.opacity = '0.4';
  if (msgEl) { msgEl.textContent = '읽는 중! 🔥'; msgEl.style.color = '#fb923c'; }

  const words = document.querySelectorAll('[id^="l9gw"]');
  let wi = 0;
  function hl() {
    words.forEach(w => { w.style.transform='scale(1)'; w.style.boxShadow='none'; });
    if (words[wi]) {
      words[wi].style.transform = 'scale(1.18)';
      words[wi].style.boxShadow = '0 0 12px rgba(251,146,60,0.7)';
    }
    wi = (wi + 1) % words.length;
  }
  const hlInt = setInterval(hl, 800);

  _l9Timer = setInterval(() => {
    _l9Time--;
    if (timerEl) {
      timerEl.textContent = _l9Time;
      timerEl.style.color = _l9Time <= 2 ? '#f87171' : '#4ade80';
    }
    if (_l9Time <= 0) {
      clearInterval(_l9Timer);
      clearInterval(hlInt);
      _l9Running = false;
      words.forEach(w => { w.style.transform='scale(1)'; w.style.boxShadow='none'; });
      if (btn) btn.style.opacity = '1';
      if (timerEl) { timerEl.textContent = '🎉'; timerEl.style.color = '#4ade80'; }
      if (msgEl) { msgEl.textContent = '완료! 대단해요 🎊'; msgEl.style.color = '#4ade80'; }
      setTimeout(() => {
        if (timerEl) timerEl.textContent = '5';
        if (msgEl) msgEl.textContent = '';
      }, 3000);
    }
  }, 1000);
}

function l9GameSpeak() {
  const words = ['như','nhé','nhà','nhỏ','nhở','nhanh'];
  let i = 0;
  function next() { if (i >= words.length) return; TTS.speak(words[i]); i++; setTimeout(next, 700); }
  next();
}

let _l9Revealed = false;
function l9HwReveal() {
  if (_l9Revealed) return;
  _l9Revealed = true;
  const ans  = document.getElementById('l9-hw-answer');
  const note = document.getElementById('l9-hw-note');
  if (ans)  ans.style.color  = '#f0e6ff';
  if (note) note.style.color = 'var(--muted)';
  TTS.speak('Giúp nhau');
}
