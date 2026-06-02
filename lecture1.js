/* ═══════════════════════════════════════════════════════════════
   1강 · 성조 데이터
═══════════════════════════════════════════════════════════════ */
LECTURES[1] = {
  id: 1,
  title: '성조',
  subtitle: '베트남어의 6가지 성조',
  emoji: '🎵',
  chapters: [
    { id: 0, title: '6성조',   emoji: '🎵' },
    { id: 1, title: '높낮이',  emoji: '📊' },
    { id: 2, title: '남부발음', emoji: '🗺️' },
    { id: 3, title: '표기법',  emoji: '✍️' },
    { id: 4, title: '정리',    emoji: '✅' },
  ],
  screens: [renderL1C0, renderL1C1, renderL1C2, renderL1C3, renderL1C4],
};

const TONES = [
  { name:'Dấu ngang (평성)',   symbol:'없음',           example:'MA',  desc:'기본음. \'솔~\' 음으로 일정하게 내뱉기. 성조 표시 없음.', pitch:'flat',   color:'#60a5fa', meaning:'ma (귀신)',    north:'ma',  south:'ma' },
  { name:'Dấu sắc (올림성조)', symbol:'́  (sắc)',        example:'MÁ',  desc:'낮은 곳에서 높게 올라가는 성조.',                         pitch:'rising', color:'#4ade80', meaning:'má (엄마/뺨)', north:'má',  south:'má' },
  { name:'Dấu huyền (내림성조)',symbol:'\u0300  (huyền)',example:'MÀ',  desc:'높은 곳에서 낮게 내려가는 성조.',                         pitch:'falling',color:'#f87171', meaning:'mà (하지만)', north:'mà',  south:'mà' },
  { name:'Dấu hỏi (물음성조)', symbol:'?  (hỏi)',       example:'MẢ',  desc:'내려갔다가 올라오는 성조. 물음표 느낌.',                   pitch:'dip',    color:'#fb923c', meaning:'mả (묘지)',   north:'mả',  south:'mả' },
  { name:'Dấu ngã (꺾임성조)', symbol:'~  (ngã)',       example:'MÃ',  desc:'올라가다가 꺾이는 성조. ⚠️ 남부에서는 hỏi와 동일하게 발음!', pitch:'broken', color:'#a259ff', meaning:'mã (말/코드)', north:'mã', south:'mả (hỏi와 동일)' },
  { name:'Dấu nặng (무거운성조)',symbol:'.  (nặng)',     example:'MẠ',  desc:'낮고 짧게 뚝 떨어지는 성조. 가장 낮은 음.',               pitch:'heavy',  color:'#f7c948', meaning:'mạ (모/벼)',   north:'mạ',  south:'mạ' },
];

const MINIMAL_PAIRS = [
  { vi:'ma',  ko:'귀신',    tone:'ngang' },
  { vi:'má',  ko:'엄마/뺨', tone:'sắc'  },
  { vi:'mà',  ko:'하지만',  tone:'huyền'},
  { vi:'mả',  ko:'묘지',    tone:'hỏi'  },
  { vi:'mã',  ko:'말/코드', tone:'ngã'  },
  { vi:'mạ',  ko:'모/벼',   tone:'nặng' },
];

const RULES = [
  { title:'★ 기본: 성조는 모음 위/아래에 표기',         desc:'성조 부호는 항상 모음에 붙어요.',                                      examples:['Tớ','Là','Họ'] },
  { title:'★ 모음이 두 개인 경우: 앞 모음에 표기',       desc:'단, oa, oe, uê, uơ, uy로 끝나는 경우 뒤 모음에 표기!',               examples:['Nói','Đợi','Kẹo','Toà','Khoẻ'] },
  { title:'★ 모음이 세 개인 경우: 가운데 모음에 표기',   desc:'',                                                                     examples:['Hội thoại','Thoải mái','Xoài'] },
  { title:'★ 끝자음(받침)이 있는 경우: 받침 앞 모음에 표기', desc:'',                                                                 examples:['Tiếng','Trường','Khoảng','Chuyện','Quyền'] },
];

const PRACTICE_SETS = [
  ['HA','HÁ','HÀ','HẢ','HÃ','HẠ'],
  ['CA','CÁ','CÀ','CẢ','CÃ','CẠ'],
  ['TA','TÁ','TÀ','TẢ','TÃ','TẠ'],
  ['LA','LÁ','LÀ','LẢ','LÃ','LẠ'],
];

/* ─── 1강 Ch0: 6성조 기초 ─── */
function renderL1C0() {
  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">🎵 베트남어 6성조</div>
      <div class="info-text">
        • 성조 = Dấu (저우) 또는 Thanh điệu (타잉 디에우)<br>
        • 총 6개. <span style="color:var(--accent);font-weight:700">성조가 없는 것도 성조에 포함!</span><br>
        • 기본음: <span style="color:var(--accent)">'솔~'</span> 음으로 일정하게 내뱉기
      </div>
    </div>
    ${TONES.map(t => `
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;">
        <div>
          <div style="font-size:16px;font-weight:700;color:${t.color}">${t.name}</div>
          <div style="font-size:12px;color:var(--muted);margin-top:2px;">부호: ${t.symbol}</div>
        </div>
        <div style="font-family:'Boogaloo',cursive;font-size:36px;color:${t.color}">${t.example}</div>
      </div>
      <div class="pitch-box">${pitchSVG(t.pitch, t.color)}</div>
      <div style="font-size:13px;color:var(--muted);margin-top:6px;">${t.desc}</div>
      <div style="font-size:12px;color:var(--muted);margin-top:4px;">예시: <span style="font-family:monospace;color:${t.color}">${t.meaning}</span></div>
      <button class="tts-btn" onclick="TTS.speak('${t.north}')">🔊 듣기</button>
    </div>`).join('')}
  </div>`;
}

/* ─── 1강 Ch1: 성조 높낮이 ─── */
function renderL1C1() {
  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">📊 성조 높낮이 순서</div>
      <div class="info-text" style="margin-bottom:12px;">위에서 아래로 → 높은 음에서 낮은 음 순서</div>
      <div style="display:flex;gap:10px;">
        <div style="display:flex;flex-direction:column;justify-content:space-between;height:180px;padding:4px 0;">
          ${[{n:'Dấu sắc',c:'#4ade80'},{n:'Dấu ngã',c:'#a259ff'},{n:'Dấu ngang',c:'#60a5fa'},{n:'Dấu hỏi',c:'#fb923c'},{n:'Dấu huyền',c:'#f87171'},{n:'Dấu nặng',c:'#f7c948'}].map(t=>`<div style="font-size:11px;font-weight:700;color:${t.c}">${t.n}</div>`).join('')}
        </div>
        <div style="flex:1;position:relative;height:180px;background:#0d0d1a;border-radius:10px;border:1px solid var(--border);">
          <div style="position:absolute;inset:8px 0;display:flex;flex-direction:column;justify-content:space-between;">
            ${['#4ade80','#a259ff','#60a5fa','#fb923c','#f87171','#f7c948'].map(c=>`<div style="height:1px;background:${c};opacity:0.4;margin:0 8px;"></div>`).join('')}
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="section-title">🎯 성조별 음정 그래프</div>
      ${TONES.map(t => `
      <div style="margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
          <span style="font-size:13px;font-weight:700;color:${t.color}">${t.name}</span>
          <button class="tts-btn" onclick="TTS.speak('${t.north}')" style="padding:4px 10px;font-size:12px;">🔊</button>
        </div>
        <div class="pitch-box">${pitchSVG(t.pitch, t.color)}</div>
      </div>`).join('')}
    </div>
  </div>`;
}

/* ─── 1강 Ch2: 남부 발음 ─── */
function renderL1C2() {
  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">🗺️ 남부 발음 특징</div>
      <div style="background:#2a0a0a;border:1.5px solid #6e2a2a;border-radius:12px;padding:12px;margin-bottom:12px;">
        <div style="font-size:13px;font-weight:700;color:var(--red);margin-bottom:6px;">⚠️ 핵심 차이</div>
        <div style="font-size:13px;color:#f0e6ff;line-height:1.8;">
          남부에서는 <span style="color:#a259ff;font-weight:700">Dấu ngã (~)</span>를<br>
          <span style="color:#fb923c;font-weight:700">Dấu hỏi (?)</span>와 동일하게 발음해요!
        </div>
      </div>
      <div style="display:flex;gap:10px;align-items:center;justify-content:center;padding:16px;background:#0d0d1a;border-radius:12px;margin-bottom:12px;">
        <div style="text-align:center;">
          <div style="font-family:monospace;font-size:36px;font-weight:700;color:#fb923c;">MẢ</div>
          <div style="font-size:11px;color:var(--muted);">Dấu hỏi</div>
        </div>
        <div style="font-size:24px;color:var(--accent);">=</div>
        <div style="text-align:center;">
          <div style="font-family:monospace;font-size:36px;font-weight:700;color:#a259ff;">MÃ</div>
          <div style="font-size:11px;color:var(--muted);">Dấu ngã (남부)</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="section-title">🔊 성조 조합 예시</div>
      ${[
        {vi:'xin lỗi', ko:'미안합니다', combo:'ma mã'},
        {vi:'mạnh mẽ', ko:'건강하다',   combo:'mạ mã'},
        {vi:'bố mẹ',   ko:'부모님',     combo:'má mạ'},
      ].map(item=>`
      <div onclick="TTS.speak('${item.vi}')" class="list-item" style="cursor:pointer;">
        <div>
          <div style="font-size:11px;color:var(--dim);">성조조합: ${item.combo}</div>
          <div style="font-family:monospace;font-size:18px;font-weight:700;color:var(--accent);">${item.vi}</div>
          <div style="font-size:12px;color:var(--muted);">${item.ko}</div>
        </div>
        <span style="opacity:.5">🔊</span>
      </div>`).join('')}
    </div>
  </div>`;
}

/* ─── 1강 Ch3: 성조 표기법 ─── */
function renderL1C3() {
  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">✍️ 성조 표기 위치 규칙</div>
      ${RULES.map(r=>`
      <div style="background:var(--bg);border:1.5px solid var(--border);border-radius:14px;padding:13px 15px;margin-bottom:8px;">
        <div style="font-size:13px;font-weight:700;color:var(--accent);margin-bottom:6px;">${r.title}</div>
        ${r.desc?`<div style="font-size:12px;color:var(--muted);line-height:1.6;margin-bottom:6px;">${r.desc}</div>`:''}
        <div style="display:flex;flex-wrap:wrap;gap:6px;">
          ${r.examples.map(e=>`<span onclick="TTS.speak('${e}')" style="font-family:monospace;font-size:14px;color:#f0e6ff;background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:3px 10px;cursor:pointer;">${e}</span>`).join('')}
        </div>
      </div>`).join('')}
    </div>
    <div class="card">
      <div class="section-title">🎯 최소 대립쌍</div>
      <div style="font-size:12px;color:var(--muted);margin-bottom:10px;">같은 자음, 성조만 다른 단어 — 탭하면 발음!</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
        ${MINIMAL_PAIRS.map(p=>`
        <div onclick="TTS.speak('${p.vi}')" style="background:var(--bg);border:1.5px solid var(--border);border-radius:12px;padding:10px 8px;text-align:center;cursor:pointer;">
          <div style="font-family:monospace;font-size:22px;font-weight:700;color:var(--accent);">${p.vi}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:3px;">${p.ko}</div>
          <div style="font-size:10px;color:var(--dim);margin-top:2px;">${p.tone}</div>
        </div>`).join('')}
      </div>
      <button onclick="playMinimalPairs()" class="btn-full" style="margin-top:10px;">🔊 전부 순서대로 듣기</button>
    </div>
  </div>`;
}

/* ─── 1강 Ch4: 정리 & 연습 ─── */
function renderL1C4() {
  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">✅ 오늘 배운 내용 정리</div>
      <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:6px;margin-bottom:12px;">
        ${TONES.map(t=>`
        <div style="text-align:center;background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:6px 3px;">
          <div style="height:28px;">${pitchSVG(t.pitch,t.color)}</div>
          <div style="font-family:monospace;font-size:13px;color:${t.color};margin-top:3px;">${t.example}</div>
        </div>`).join('')}
      </div>
      <div onclick="TTS.speak('Tạm biệt các bạn')" style="font-family:monospace;font-size:22px;font-weight:700;color:var(--accent);text-align:center;background:var(--bg);border:1.5px solid var(--border);border-radius:14px;padding:16px;cursor:pointer;">
        Tạm biệt các bạn!
      </div>
      <div style="display:flex;justify-content:center;gap:12px;font-size:12px;color:var(--muted);margin-top:6px;">
        <span>↘ 땀</span><span>↘ 비엗(빅)</span><span>↗ 깍</span><span>↘ 반(방)</span>
      </div>
    </div>
    <div class="card">
      <div class="section-title">📝 성조별 연습</div>
      ${PRACTICE_SETS.map(row=>`
      <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:6px;margin-bottom:8px;">
        ${row.map(cell=>`
        <div onclick="TTS.speak('${cell.toLowerCase()}')" style="text-align:center;background:var(--bg);border:1.5px solid var(--border);border-radius:10px;padding:8px 4px;cursor:pointer;">
          <div style="font-family:monospace;font-size:17px;font-weight:700;color:var(--accent);">${cell}</div>
        </div>`).join('')}
      </div>`).join('')}
    </div>
    <div class="card">
      <div class="section-title">🗺️ 북부 vs 남부</div>
      ${[
        {combo:'ma mã', north:'xin lỗi [씬 로이]',   south:'동일'},
        {combo:'mạ mã', north:'mạnh mẽ [마잉 매]',   south:'만 매 (ngã→hỏi)'},
        {combo:'má mạ', north:'bố mẹ [보 매]',        south:'동일'},
      ].map(item=>`
      <div style="background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:10px;margin-bottom:8px;">
        <div style="font-size:11px;color:var(--dim);margin-bottom:4px;">성조조합: ${item.combo}</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <span style="font-size:11px;background:#0a1a2a;border:1px solid #2a5e8a;border-radius:20px;padding:2px 8px;color:#60a5fa;">🔵 북부: ${item.north}</span>
          <span style="font-size:11px;background:#1a0a0a;border:1px solid #8a2a2a;border-radius:20px;padding:2px 8px;color:#f87171;">🔴 남부: ${item.south}</span>
        </div>
      </div>`).join('')}
    </div>
  </div>`;
}

function playMinimalPairs() {
  let i = 0;
  function next() {
    if (i >= MINIMAL_PAIRS.length) return;
    TTS.speak(MINIMAL_PAIRS[i].vi);
    i++; setTimeout(next, 1200);
  }
  next();
}
