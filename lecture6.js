/* ═══════════════════════════════════════════════════════════════
   6강 · 이중모음 데이터
   ai / ay / ơi / ây / iê / iêu / ia / ua / ưa / oa·ao / oe·eo
═══════════════════════════════════════════════════════════════ */
LECTURES[6] = {
  id: 6,
  title: '이중모음',
  subtitle: 'ai·ay·ơi·ây·iê·iêu 외',
  emoji: '🔗',
  chapters: [
    { id: 0, title: '문자표',    emoji: '📋' },
    { id: 1, title: 'ai/ay/ơi', emoji: '🔤' },
    { id: 2, title: 'ây/iê/iêu',emoji: '🔤' },
    { id: 3, title: 'iêu vs yêu',emoji: '💡' },
    { id: 4, title: '정리',      emoji: '✅' },
  ],
  screens: [renderL6C0, renderL6C1, renderL6C2, renderL6C3, renderL6C4],
};

/* ─── 이중모음 헬퍼: 발음 카드 렌더러 ─── */
function renderDiphthongCards(items) {
  return `<div class="screen-scroll">
    ${items.map(item => `
    <div class="card">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:12px;">
        <div style="width:64px;height:64px;border:2px solid var(--accent);border-radius:14px;display:flex;align-items:center;justify-content:center;background:var(--bg);flex-shrink:0;">
          <span style="font-family:monospace;font-size:26px;font-weight:700;color:var(--accent);">${item.char}</span>
        </div>
        <div>
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

/* ─── 6강 Ch0: 오늘의 문자표 ─── */
function renderL6C0() {
  const todayChars  = ['ai','ay','ơi','ây','iê','iêu'];
  const otherChars  = ['ia','ua','ưa','oa/ao','oe/eo',''];

  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">📋 6강 오늘의 문자 (이중모음)</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:8px;">
        ${todayChars.map(c => `
        <div style="text-align:center;padding:14px 4px;border-radius:10px;background:#2a0a1a;border:1.5px solid var(--red);">
          <span style="font-family:monospace;font-size:20px;font-weight:700;color:var(--red);">${c}</span>
        </div>`).join('')}
      </div>
      <div style="font-size:11px;color:var(--red);margin-bottom:12px;">★ 빨간색 = 오늘 집중 학습</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;">
        ${otherChars.map(c => `
        <div style="text-align:center;padding:14px 4px;border-radius:10px;background:var(--bg);border:1.5px solid ${c ? 'var(--border)' : 'transparent'};">
          ${c ? `<span style="font-family:monospace;font-size:16px;font-weight:700;color:#f0e6ff;">${c}</span>` : ''}
        </div>`).join('')}
      </div>
      <div style="font-size:11px;color:var(--dim);margin-top:8px;">추가 이중모음 (참고)</div>
    </div>

    <div class="card" style="border-color:#6e5000;background:#1a1200;">
      <div style="font-size:13px;font-weight:700;color:var(--accent);margin-bottom:8px;">💡 6강 핵심 포인트</div>
      <div style="font-size:12px;color:var(--muted);line-height:2.0;">
        • <span style="color:var(--red);font-weight:700">ai</span> → [아이] · <span style="color:var(--red);font-weight:700">ay</span> → [아이] · <span style="color:var(--red);font-weight:700">ơi</span> → [어이]<br>
        • <span style="color:var(--red);font-weight:700">ây</span> → [어이] · <span style="color:var(--red);font-weight:700">iê</span> → [이에] · <span style="color:var(--red);font-weight:700">iêu</span> → [이에우]<br>
        • <span style="color:#a259ff;font-weight:700">iêu = yêu</span> : 표기만 다르고 발음 동일<br>
        • 실제 발음 시 <span style="color:var(--accent)">'이여우'</span>가 더 자연스러운 발음!
      </div>
    </div>
  </div>`;
}

/* ─── 6강 Ch1: ai / ay / ơi ─── */
function renderL6C1() {
  const items = [
    {
      char: 'ai', sound: '아이',
      note: '',
      examples: [
        { vi: 'ai',   ko: '누구',   pron: '아이' },
        { vi: 'bài',  ko: '숙제',   pron: '바이' },
        { vi: 'mai',  ko: '내일',   pron: '마이' },
      ],
    },
    {
      char: 'ay', sound: '아이',
      note: '',
      examples: [
        { vi: 'bay',  ko: '날다',         pron: '바이' },
        { vi: 'hay',  ko: '좋은, 재미있는', pron: '하이' },
        { vi: 'cay',  ko: '매운',         pron: '까이' },
      ],
    },
    {
      char: 'ơi', sound: '어이',
      note: '',
      examples: [
        { vi: 'bơi',  ko: '수영하다',       pron: '버이' },
        { vi: 'mới',  ko: '방금 ~막 하다',  pron: '머이' },
        { vi: 'ơi',   ko: '~야 (부를 때)',  pron: '어이' },
      ],
    },
  ];
  return renderDiphthongCards(items);
}

/* ─── 6강 Ch2: ây / iê / iêu ─── */
function renderL6C2() {
  const items = [
    {
      char: 'ây', sound: '어이',
      note: '',
      examples: [
        { vi: 'đây',  ko: '이것, 이분',   pron: '더이' },
        { vi: 'mấy',  ko: '몇 (10 이하)', pron: '머이' },
        { vi: 'cây',  ko: '나무',         pron: '꺼이' },
      ],
    },
    {
      char: 'iê', sound: '이에',
      note: '북부: [이에] / <span style="color:#f7c948;font-weight:700">남부식: [이]</span><br>✓ 2중 모음: 앞모음만 발음<br><span style="color:var(--dim);">(받침이 있는 단어의 경우)</span>',
      examples: [
        { vi: 'biết',    ko: '알다',    pron: '비엔/빅' },
        { vi: 'tiền',    ko: '돈',      pron: '띠엔/띵' },
        { vi: 'liên hệ', ko: '연락하다', pron: '리엔 헤/링 헤' },
      ],
    },
    {
      char: 'iêu', sound: '이에우',
      note: '북부: [이에우] / <span style="color:#f7c948;font-weight:700">남부식: [이우(유)]</span><br>✓ 3중 모음: 가운데 발음 탈락<br><span style="color:var(--dim);">(받침이 없는 단어의 경우)</span><br>실제 발음 시 <span style="color:var(--accent)">\'이여우\'</span>가 더 자연스러운 발음',
      examples: [
        { vi: 'hiểu',   ko: '이해하다',  pron: '히에우/히유' },
        { vi: 'nhiều',  ko: '많은, 많다', pron: '니에우/니유' },
        { vi: 'chiều',  ko: '오후',      pron: '찌에우/찌유' },
      ],
    },
  ];

  return `<div class="screen-scroll">
    ${items.map(item => `
    <div class="card">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:12px;">
        <div style="width:64px;height:64px;border:2px solid var(--accent);border-radius:14px;display:flex;align-items:center;justify-content:center;background:var(--bg);flex-shrink:0;">
          <span style="font-family:monospace;font-size:${item.char.length > 2 ? '20' : '26'}px;font-weight:700;color:var(--accent);">${item.char}</span>
        </div>
        <div>
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
        { vi: 'Ai vậy?',   ko: '누구세요?',  pron: '아이 버이/아이 여이' },
        { vi: 'Hay quá!',  ko: '너무 좋다!', pron: '하이 꾸아/하이 우아' },
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

/* ─── 6강 Ch3: iêu vs yêu 발음 고민 해결 ─── */
function renderL6C3() {
  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">💡 발음 고민 해결!</div>
      <div style="display:flex;gap:10px;align-items:center;justify-content:center;padding:20px 0 16px;background:var(--bg);border-radius:14px;margin-bottom:14px;">
        <div style="text-align:center;background:var(--surface);border:2px solid var(--accent);border-radius:14px;padding:14px 20px;">
          <div style="font-family:monospace;font-size:30px;font-weight:700;color:var(--accent);">iêu</div>
        </div>
        <div style="font-size:28px;color:var(--muted);font-weight:700;">/</div>
        <div style="text-align:center;background:var(--surface);border:2px solid var(--purple);border-radius:14px;padding:14px 20px;">
          <div style="font-family:monospace;font-size:30px;font-weight:700;color:var(--purple);">yêu</div>
        </div>
      </div>

      <div style="background:#1a0f30;border:1.5px solid var(--purple);border-radius:14px;padding:14px;margin-bottom:10px;">
        <div style="font-size:13px;color:var(--muted);line-height:2.0;">
          ✓ 발음 표기는 <span style="color:var(--accent);font-weight:700">'이에우'</span><br>
          ✓ 실제 발음 시 <span style="color:var(--accent);font-weight:700">'이여우'</span>가 더 자연스러운 발음
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px;">
        <div style="background:#1a1200;border:1.5px solid #6e5000;border-radius:14px;padding:12px;text-align:center;">
          <div style="font-family:monospace;font-size:22px;font-weight:700;color:var(--accent);">iê</div>
          <div style="font-size:11px;font-weight:700;color:#f7c948;margin-top:4px;">*남부식 [이]</div>
          <div style="font-size:10px;color:var(--dim);margin-top:4px;line-height:1.6;">2중 모음: 앞모음만 발음<br>(받침이 있는 단어)</div>
        </div>
        <div style="background:#1a1200;border:1.5px solid #6e5000;border-radius:14px;padding:12px;text-align:center;">
          <div style="font-family:monospace;font-size:22px;font-weight:700;color:var(--accent);">iêu</div>
          <div style="font-size:11px;font-weight:700;color:#f7c948;margin-top:4px;">*남부식 [이우(유)]</div>
          <div style="font-size:10px;color:var(--dim);margin-top:4px;line-height:1.6;">3중 모음: 가운데 발음 탈락<br>(받침이 없는 단어)</div>
        </div>
      </div>

      <div style="font-size:12px;color:var(--muted);margin-bottom:10px;font-weight:700;">단어 비교 — 탭하면 발음!</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px;">
        ${[
          { vi: 'phiếu', ko: '표',       pron: '피에우/피유',  type: 'iêu' },
          { vi: 'siêu',  ko: '대단한, 매우', pron: '씨에우/씨유', type: 'iêu' },
          { vi: 'thiếu', ko: '부족한',    pron: '티에우/티유',  type: 'iêu' },
          { vi: 'yếu',   ko: '약한',      pron: '이에우/이유',  type: 'yêu' },
        ].map(w => `
        <div onclick="TTS.speak('${w.vi}')" style="background:var(--bg);border:1.5px solid ${w.type === 'yêu' ? 'var(--purple)' : 'var(--accent)'};border-radius:12px;padding:12px;cursor:pointer;text-align:center;">
          <div style="font-family:monospace;font-size:20px;font-weight:700;color:${w.type === 'yêu' ? 'var(--purple)' : 'var(--accent)'};">${w.vi}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:3px;">${w.ko}</div>
          <div style="font-size:10px;color:var(--dim);margin-top:1px;">[${w.pron}]</div>
        </div>`).join('')}
      </div>
    </div>

    <div class="card">
      <div class="section-title">📖 연습 문장</div>
      ${[
        { vi: 'Mới mua.',   ko: '(방금) 막 사다.',     pron: '머이 무어' },
        { vi: 'Đây là...',  ko: '이것(분)은 …입니다.', pron: '더이 라' },
        { vi: 'Tính tiền.', ko: '(돈을) 계산하다.',    pron: '띵 띠엔/띤 띠잉(띵)' },
        { vi: 'Ăn nhiều.',  ko: '많이 먹다.',          pron: '안 니에우/앙 니유' },
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

    <div class="card">
      <div class="section-title">💜 yêu 문장</div>
      ${[
        { vi: 'Đáng yêu quá!', ko: '너무 귀엽다!',      pron: '당 이에우 꾸아/당 이유 우아' },
        { vi: 'Em yêu anh.',   ko: '나 오빠 사랑해.',   pron: '앰 이에우 아잉/앰 이유 안' },
      ].map(s => `
      <div onclick="TTS.speak('${s.vi}')" style="background:var(--bg);border:1.5px solid var(--purple);border-radius:14px;padding:14px;margin-bottom:8px;cursor:pointer;">
        <div style="font-family:monospace;font-size:18px;font-weight:700;color:var(--purple);">${s.vi}</div>
        <div style="font-size:12px;color:var(--muted);margin-top:4px;">${s.ko}</div>
        <div style="font-size:11px;color:var(--dim);margin-top:2px;">[${s.pron}]</div>
      </div>`).join('')}
    </div>
  </div>`;
}

/* ─── 6강 Ch4: 정리 ─── */
function renderL6C4() {
  const summary = [
    { char: 'ai',  sound: '아이',  ex: 'mai' },
    { char: 'ay',  sound: '아이',  ex: 'bay' },
    { char: 'ơi',  sound: '어이',  ex: 'ơi' },
    { char: 'ây',  sound: '어이',  ex: 'đây' },
    { char: 'iê',  sound: '이에',  ex: 'tiền' },
    { char: 'iêu', sound: '이에우', ex: 'nhiều' },
  ];

  const sentences = [
    { vi: 'Mới mua.',   ko: '(방금) 막 사다.',     pron: '머이 무어' },
    { vi: 'Hay quá!',   ko: '너무 좋다!',          pron: '하이 꾸아/하이 우아' },
    { vi: 'Ai vậy?',    ko: '누구세요?',            pron: '아이 버이/아이 여이' },
    { vi: 'Tính tiền.', ko: '(돈을) 계산하다.',    pron: '띵 띠엔/띤 띠잉' },
    { vi: 'Ăn nhiều.',  ko: '많이 먹다.',          pron: '안 니에우/앙 니유' },
    { vi: 'Em yêu anh.',ko: '나 오빠 사랑해.',     pron: '앰 이에우 아잉' },
  ];

  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">✅ 6강 이중모음 정리</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:10px;">
        ${summary.map(v => `
        <div onclick="TTS.speak('${v.ex}')" style="text-align:center;background:var(--bg);border:1.5px solid var(--border);border-radius:12px;padding:12px 4px;cursor:pointer;">
          <div style="font-family:monospace;font-size:22px;font-weight:700;color:var(--accent);">${v.char}</div>
          <div style="font-size:12px;color:var(--red);margin-top:3px;font-weight:700;">[${v.sound}]</div>
          <div style="font-size:10px;color:var(--dim);margin-top:2px;">${v.ex}</div>
        </div>`).join('')}
      </div>
      <div style="background:#0a1a0a;border:1px solid #2a5a2a;border-radius:12px;padding:10px;font-size:12px;color:#4ade80;line-height:1.8;">
        💡 <strong>iêu = yêu</strong> : 표기만 다를 뿐, 발음은 동일!<br>
        &nbsp;&nbsp;&nbsp;&nbsp;표기: 이에우 / 실제: <strong>이여우</strong>
      </div>
    </div>

    <div class="card">
      <div class="section-title">📝 연습 문장</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        ${sentences.map(s => `
        <div onclick="TTS.speak('${s.vi}')" style="background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:10px;cursor:pointer;">
          <div style="font-family:monospace;font-size:13px;font-weight:700;color:var(--accent);">${s.vi}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:2px;">${s.ko}</div>
          <div style="font-size:10px;color:var(--dim);margin-top:1px;">[${s.pron}]</div>
        </div>`).join('')}
      </div>
      <button onclick="playL6Sentences()" class="btn-full" style="margin-top:10px;">🔊 전부 듣기</button>
    </div>

    <div class="card" style="border-color:#6e5000;background:#1a1200;">
      <div style="font-size:13px;font-weight:700;color:var(--accent);margin-bottom:8px;">📚 오늘의 숙제</div>
      <div onclick="TTS.speak('Mới mua')" style="cursor:pointer;">
        <div style="font-family:monospace;font-size:28px;font-weight:700;color:var(--accent);">M<span style="display:inline-block;width:24px;height:24px;border:2px solid var(--accent);border-radius:4px;vertical-align:middle;margin:0 2px;"></span>i mua.</div>
        <div style="font-size:13px;color:var(--muted);margin-top:6px;">(방금) 막 사다. [머이 무어]</div>
        <div style="font-size:11px;color:var(--dim);margin-top:4px;">빈칸에 들어갈 글자는? (정답: ớ)</div>
        <div style="font-size:11px;color:var(--dim);">→ Mới mua.</div>
      </div>
    </div>
  </div>`;
}

function playL6Sentences() {
  const s = ['mai','bay','ơi','đây','tiền','nhiều','Mới mua','Hay quá','Ai vậy','Tính tiền','Ăn nhiều','Em yêu anh'];
  let i = 0;
  function next() { if (i >= s.length) return; TTS.speak(s[i]); i++; setTimeout(next, 1600); }
  next();
}
