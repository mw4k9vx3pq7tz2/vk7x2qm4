/* ═══════════════════════════════════════════════════════════════
   10강 · 레벨업 — 복모음 끝 ~i vs ~y 발음 심화
═══════════════════════════════════════════════════════════════ */
LECTURES[10] = {
  id: 10,
  title: '레벨업 ~i vs ~y',
  subtitle: '복모음 끝 ~i · ~y 발음 심화',
  emoji: '⚡',
  chapters: [
    { id: 0, title: '발음법',    emoji: '📌' },
    { id: 1, title: '단어 훈련', emoji: '🔤' },
    { id: 2, title: '문장 훈련', emoji: '📖' },
    { id: 3, title: '실전 + 잰말', emoji: '🎯' },
    { id: 4, title: '정리',      emoji: '✅' },
  ],
  screens: [renderL10C0, renderL10C1, renderL10C2, renderL10C3, renderL10C4],
};

/* ─── 10강 Ch0: 발음법 ─── */
function renderL10C0() {
  return `<div class="screen-scroll">

    <!-- ~i 발음법 -->
    <div class="card">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
        <span style="background:#f87171;color:#fff;font-size:11px;font-weight:700;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">!</span>
        <span style="font-size:15px;font-weight:700;color:#f0e6ff;">복모음 '~i' 발음 시 유의할 점</span>
      </div>

      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="background:var(--bg);border-left:3px solid var(--accent);border-radius:0 10px 10px 0;padding:10px 12px;">
          <div style="font-size:12px;color:var(--muted);line-height:1.8;">
            <span style="color:var(--dim);font-weight:700;">i ngắn</span> : 문자 자체가 짧아서 붙여진 명칭일 뿐, 발음과는 무관
          </div>
        </div>
        <div style="background:#1a1200;border:1.5px solid #6e5000;border-radius:12px;padding:10px 12px;">
          <div style="font-size:12px;color:#f0e6ff;line-height:1.8;">
            <span style="background:#f7c948;color:#1a1200;font-weight:700;padding:1px 6px;border-radius:4px;font-size:11px;">'a, o' 계열 결합 시</span>
            &nbsp;<span style="color:var(--accent);font-weight:700;">[장음]으로 발음</span>
          </div>
        </div>
        <div style="background:var(--bg);border-left:3px solid var(--purple);border-radius:0 10px 10px 0;padding:10px 12px;">
          <div style="font-size:12px;color:var(--muted);line-height:1.9;">
            'a+i' 예시 : [아~이] / [마~이] / [까~이]<br>
            <span style="background:#f7c948;color:#1a1200;font-weight:700;padding:1px 6px;border-radius:4px;font-size:11px;margin-top:4px;display:inline-block;">→ 앞모음을 길게 끌기</span>
          </div>
        </div>
        <div style="background:var(--bg);border-left:3px solid var(--dim);border-radius:0 10px 10px 0;padding:10px 12px;">
          <div style="font-size:12px;color:var(--muted);">
            'i' 혼자 단독으로 쓰이는 경우에는 장단음 구분 X
            <span style="color:var(--dim);font-size:11px;"> (ex. Đi)</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ~y 발음법 -->
    <div class="card">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
        <span style="background:#f87171;color:#fff;font-size:11px;font-weight:700;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">!</span>
        <span style="font-size:15px;font-weight:700;color:#f0e6ff;">복모음 '~y' 발음 시 유의할 점</span>
      </div>

      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="background:var(--bg);border-left:3px solid var(--accent);border-radius:0 10px 10px 0;padding:10px 12px;">
          <div style="font-size:12px;color:var(--muted);line-height:1.8;">
            <span style="color:var(--dim);font-weight:700;">y dài</span> : 문자 자체가 길어서 붙여진 명칭일 뿐, 발음과는 무관
          </div>
        </div>
        <div style="background:#1a1200;border:1.5px solid #6e5000;border-radius:12px;padding:10px 12px;">
          <div style="font-size:12px;color:#f0e6ff;line-height:1.8;">
            <span style="background:#f7c948;color:#1a1200;font-weight:700;padding:1px 6px;border-radius:4px;font-size:11px;">'a' 계열 결합 시</span>
            &nbsp;<span style="color:var(--accent);font-weight:700;">[단음]으로 발음</span>
          </div>
        </div>
        <div style="background:var(--bg);border-left:3px solid var(--purple);border-radius:0 10px 10px 0;padding:10px 12px;">
          <div style="font-size:12px;color:var(--muted);line-height:1.9;">
            'a+y' 예시 : [아이.] / [마이.] / [까이.]<br>
            <span style="background:#f7c948;color:#1a1200;font-weight:700;padding:1px 6px;border-radius:4px;font-size:11px;margin-top:4px;display:inline-block;">→ 빠르게 이어 읽고 끊기</span>
          </div>
        </div>
        <div style="background:var(--bg);border-left:3px solid var(--dim);border-radius:0 10px 10px 0;padding:10px 12px;">
          <div style="font-size:12px;color:var(--muted);">
            'y' 혼자 단독으로 쓰이는 경우에는 장단음 구분 X
            <span style="color:var(--dim);font-size:11px;"> (ex. Y tá)</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 핵심 비교 -->
    <div class="card" style="border-color:#6e5000;background:#1a1200;">
      <div style="font-size:13px;font-weight:700;color:var(--accent);margin-bottom:10px;">⚡ 핵심 비교</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div style="background:#0d0d1a;border:1.5px solid var(--accent);border-radius:12px;padding:12px;text-align:center;">
          <div style="font-family:monospace;font-size:24px;font-weight:700;color:var(--accent);">~i</div>
          <div style="font-size:12px;color:var(--muted);margin-top:6px;line-height:1.7;">a,o 계열 + i<br>→ <span style="color:var(--accent);font-weight:700;">앞모음 길~게</span></div>
          <div style="font-size:11px;color:var(--dim);margin-top:4px;">[아~이] [오~이]</div>
        </div>
        <div style="background:#0d0d1a;border:1.5px solid var(--purple);border-radius:12px;padding:12px;text-align:center;">
          <div style="font-family:monospace;font-size:24px;font-weight:700;color:var(--purple);">~y</div>
          <div style="font-size:12px;color:var(--muted);margin-top:6px;line-height:1.7;">a 계열 + y<br>→ <span style="color:var(--purple);font-weight:700;">빠르게 끊기</span></div>
          <div style="font-size:11px;color:var(--dim);margin-top:4px;">[아이.] [마이.]</div>
        </div>
      </div>
    </div>
  </div>`;
}

/* ─── 10강 Ch1: 단어 훈련 ─── */
function renderL10C1() {
  const iWords  = ['bơi','cởi','hỏi','sai','tôi','với'];
  const iMeans  = ['수영하다','벗다','묻다','틀린','나/저','~와 함께'];
  const yWords  = ['gầy','hay','hôm nay','máy bay','say','thấy'];
  const yMeans  = ['마른','좋은/재미있는','오늘','비행기','취한','느끼다/보이다'];

  return `<div class="screen-scroll">
    <!-- ~i 단어 훈련 -->
    <div class="card">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
        <span style="background:#f87171;color:#fff;font-size:11px;font-weight:700;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">!</span>
        <span style="font-size:14px;font-weight:700;color:#f0e6ff;">'~i' 발음 단어 훈련</span>
      </div>
      <div style="border-radius:12px;overflow:hidden;border:1px solid var(--border);">
        ${[0,1].map(row => `
        <div style="display:grid;grid-template-columns:repeat(3,1fr);">
          ${iWords.slice(row*3, row*3+3).map((w,ci) => `
          <div onclick="TTS.speak('${w}')"
            style="padding:14px 6px;text-align:center;background:${(row*3+ci)%2===0?'var(--bg)':'#0a0818'};
                   border:0.5px solid var(--border);cursor:pointer;">
            <div style="font-family:monospace;font-size:17px;font-weight:700;color:var(--accent);">${w}</div>
            <div style="font-size:10px;color:var(--dim);margin-top:3px;">${iMeans[row*3+ci]}</div>
          </div>`).join('')}
        </div>`).join('')}
      </div>
      <button onclick="playL10Words('i')" class="btn-full" style="margin-top:8px;">🔊 순서대로 듣기</button>
    </div>

    <!-- ~y 단어 훈련 -->
    <div class="card">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
        <span style="background:#f87171;color:#fff;font-size:11px;font-weight:700;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">!</span>
        <span style="font-size:14px;font-weight:700;color:#f0e6ff;">'~y' 발음 단어 훈련</span>
      </div>
      <div style="border-radius:12px;overflow:hidden;border:1px solid var(--border);">
        ${[0,1].map(row => `
        <div style="display:grid;grid-template-columns:repeat(3,1fr);">
          ${yWords.slice(row*3, row*3+3).map((w,ci) => `
          <div onclick="TTS.speak('${w}')"
            style="padding:14px 6px;text-align:center;background:${(row*3+ci)%2===0?'var(--bg)':'#0a0818'};
                   border:0.5px solid var(--border);cursor:pointer;">
            <div style="font-family:monospace;font-size:${w.length>5?'13':'17'}px;font-weight:700;color:var(--purple);">${w}</div>
            <div style="font-size:10px;color:var(--dim);margin-top:3px;">${yMeans[row*3+ci]}</div>
          </div>`).join('')}
        </div>`).join('')}
      </div>
      <button onclick="playL10Words('y')" class="btn-full" style="margin-top:8px;">🔊 순서대로 듣기</button>
    </div>
  </div>`;
}

/* ─── 10강 Ch2: 문장 훈련 ─── */
function renderL10C2() {
  const iSentences = [
    { vi:'Chị tự gọi được.',      ko:'나 혼자(스스로) 부를 수 있어.',  key:'gọi' },
    { vi:'Cho em hỏi một chút.',  ko:'뭐 좀 물어볼게요.',              key:'hỏi' },
    { vi:'Anh có hai con gái.',   ko:'나는 딸이 두 명 있어.',           key:'hai,gái' },
  ];
  const ySentences = [
    { vi:'Hôm nay có chương trình giảm giá.', ko:'오늘 할인 행사가 있어.',      key:'nay' },
    { vi:'Anh ấy rất may mắn!',               ko:'그는 정말 운이 좋아!',        key:'ấy,may' },
    { vi:'Phim này càng xem càng thấy hay.',  ko:'이 영화는 볼수록 재미있어.',  key:'này,thấy,hay' },
  ];

  function highlightKeys(vi, keys) {
    let result = vi;
    keys.split(',').forEach(k => {
      result = result.replace(new RegExp(k.trim(), 'g'),
        `<span style="color:var(--red);font-weight:700;">${k.trim()}</span>`);
    });
    return result;
  }

  return `<div class="screen-scroll">
    <!-- ~i 문장 훈련 -->
    <div class="card">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
        <span style="background:#f87171;color:#fff;font-size:11px;font-weight:700;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">!</span>
        <span style="font-size:14px;font-weight:700;color:#f0e6ff;">'~i' 발음 문장 훈련</span>
      </div>
      ${iSentences.map(s => `
      <div onclick="TTS.speak('${s.vi}')" class="list-item" style="cursor:pointer;margin-bottom:8px;">
        <div>
          <div style="font-family:monospace;font-size:14px;font-weight:700;color:#f0e6ff;line-height:1.7;">${highlightKeys(s.vi, s.key)}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:2px;">${s.ko}</div>
        </div>
        <span style="font-size:18px;opacity:.5;flex-shrink:0;">🔊</span>
      </div>`).join('')}
    </div>

    <!-- ~y 문장 훈련 -->
    <div class="card">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
        <span style="background:#f87171;color:#fff;font-size:11px;font-weight:700;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">!</span>
        <span style="font-size:14px;font-weight:700;color:#f0e6ff;">'~y' 발음 문장 훈련</span>
      </div>
      ${ySentences.map(s => `
      <div onclick="TTS.speak('${s.vi}')" class="list-item" style="cursor:pointer;margin-bottom:8px;">
        <div>
          <div style="font-family:monospace;font-size:14px;font-weight:700;color:#f0e6ff;line-height:1.7;">${highlightKeys(s.vi, s.key)}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:2px;">${s.ko}</div>
        </div>
        <span style="font-size:18px;opacity:.5;flex-shrink:0;">🔊</span>
      </div>`).join('')}
    </div>
  </div>`;
}

/* ─── 10강 Ch3: 실전 회화 + 잰말놀이 ─── */
function renderL10C3() {
  const dialogue = [
    { speaker:'A', vi:'Ôi, lâu rồi mới gặp em.',                    ko:'이야, 오랜만에 만나네.',                side:'left'  },
    { speaker:'B', vi:'Đúng vậy! Hôm nay anh đi bơi hay gì ạ?',    ko:'그러게요! 오늘 수영하러 가세요 아니면 뭐 하세요?', side:'right' },
    { speaker:'A', vi:'Anh định đi đánh gôn với em gái. Còn em?',   ko:'여동생이랑 골프 치러 가려고. 너는?',    side:'left'  },
    { speaker:'B', vi:'Em định đi chơi với bạn trai ạ.',             ko:'저는 남자친구와 놀러가려고요.',          side:'right' },
  ];

  const tongue = [
    { num:1, vi:'Buổi trưa ăn bưởi chua.',   ko:'점심에 자몽을 먹다.' },
    { num:2, vi:'Anh Hạnh ăn hành hăng.',     ko:'하잉 씨가 파를 먹는다.' },
    { num:3, vi:'Nồi đồng nấu ốc, nồi đất nấu ếch.', ko:'구리 냄비엔 달팽이, 토기 냄비엔 개구리.' },
  ];

  return `<div class="screen-scroll">
    <!-- 실전 회화 -->
    <div class="card">
      <div style="text-align:center;margin-bottom:14px;">
        <span style="background:var(--surface);border:1.5px solid var(--border);border-radius:20px;padding:6px 16px;font-size:13px;font-weight:700;color:var(--accent);">실전 회화 차례</span>
      </div>

      ${dialogue.map(d => `
      <div onclick="TTS.speak('${d.vi}')"
        style="display:flex;flex-direction:column;align-items:${d.side==='right'?'flex-end':'flex-start'};margin-bottom:10px;cursor:pointer;">
        <div style="font-size:10px;color:var(--dim);margin-bottom:3px;padding:0 4px;">${d.speaker}</div>
        <div style="max-width:88%;background:${d.side==='right'?'#1e1440':'var(--bg)'};
             border:1.5px solid ${d.side==='right'?'var(--purple)':'var(--border)'};
             border-radius:${d.side==='right'?'14px 14px 4px 14px':'14px 14px 14px 4px'};
             padding:10px 13px;">
          <div style="font-family:monospace;font-size:13px;font-weight:700;
               color:${d.side==='right'?'var(--purple)':'var(--accent)'};">${d.vi}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:3px;">${d.ko}</div>
        </div>
      </div>`).join('')}
      <button onclick="playL10Dialogue()" class="btn-full" style="margin-top:6px;">🔊 대화 전체 듣기</button>
    </div>

    <!-- 잰말놀이 -->
    <div class="card" style="border-color:#2a5e8a;background:#0a1a2a;">
      <div style="text-align:center;margin-bottom:14px;">
        <span style="background:#1e3a5a;border:1.5px solid #2a5e8a;border-radius:20px;padding:6px 16px;font-size:13px;font-weight:700;color:#60a5fa;">잰말 놀이 베트남어 ver.</span>
      </div>

      ${tongue.map(t => `
      <div onclick="TTS.speak('${t.vi}')"
        style="background:#0d1a2a;border:1.5px solid #2a5e8a;border-radius:14px;padding:12px 14px;margin-bottom:8px;cursor:pointer;display:flex;align-items:center;gap:12px;">
        <span style="width:26px;height:26px;border-radius:50%;border:1.5px solid #60a5fa;
               display:flex;align-items:center;justify-content:center;font-size:13px;
               font-weight:700;color:#60a5fa;flex-shrink:0;">${t.num}</span>
        <div>
          <div style="font-family:monospace;font-size:14px;font-weight:700;color:#60a5fa;">${t.vi}</div>
          <div style="font-size:11px;color:var(--dim);margin-top:2px;">${t.ko}</div>
        </div>
        <span style="margin-left:auto;opacity:.5;font-size:16px;">🔊</span>
      </div>`).join('')}
      <button onclick="playL10Tongue()" class="btn-full" style="margin-top:4px;border-color:#2a5e8a;color:#60a5fa;">🔊 연속 듣기</button>
    </div>
  </div>`;
}

/* ─── 10강 Ch4: 정리 + 인터랙티브 숙제 ─── */
function renderL10C4() {
  const hwSentences = [
    { vi:'Chị ấy nói tiếng Hàn hay.',         ko:'그녀는 한국어를 잘해요.',    iKeys:'ấy,nói', yKeys:'hay' },
    { vi:'Tôi thấy hôm nay trời rất đẹp.',    ko:'오늘 날씨가 참 맑은 것 같아요.', iKeys:'tôi', yKeys:'thấy,nay' },
    { vi:'Ngày mai đi bơi, phải không?',       ko:'내일 수영 가는 거 맞지?',    iKeys:'bơi,phải', yKeys:'mai' },
  ];

  return `<div class="screen-scroll">
    <div class="card">
      <div class="section-title">✅ 10강 정리</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;">
        <div style="background:var(--bg);border:1.5px solid var(--accent);border-radius:14px;padding:14px;">
          <div style="font-family:monospace;font-size:26px;font-weight:700;color:var(--accent);text-align:center;margin-bottom:8px;">~i</div>
          <div style="font-size:11px;color:var(--muted);line-height:1.9;text-align:center;">
            a, o 계열 + i<br>
            <span style="color:var(--accent);font-weight:700;">앞모음을 길~게</span><br>
            [아~이] [오~이]
          </div>
        </div>
        <div style="background:var(--bg);border:1.5px solid var(--purple);border-radius:14px;padding:14px;">
          <div style="font-family:monospace;font-size:26px;font-weight:700;color:var(--purple);text-align:center;margin-bottom:8px;">~y</div>
          <div style="font-size:11px;color:var(--muted);line-height:1.9;text-align:center;">
            a 계열 + y<br>
            <span style="color:var(--purple);font-weight:700;">빠르게 이어 끊기</span><br>
            [아이.] [마이.]
          </div>
        </div>
      </div>
      <div style="background:#0a1a0a;border:1px solid #2a5a2a;border-radius:12px;padding:10px 12px;font-size:11px;color:#4ade80;line-height:1.9;">
        💡 i·y 단독 사용 시 → 장단음 구분 없음 (Đi, Y tá)
      </div>
    </div>

    <!-- 숙제 -->
    <div class="card" style="border-color:#6e5000;background:#1a1200;">
      <div style="font-size:13px;font-weight:700;color:var(--accent);margin-bottom:4px;">📚 오늘의 숙제</div>
      <div style="font-size:12px;color:var(--muted);margin-bottom:12px;">음원을 듣고, 발음에 유의하며 5번씩 따라 읽어 보세요!</div>

      <div style="background:#0d0d1a;border:1.5px solid var(--border);border-radius:12px;padding:10px 12px;margin-bottom:8px;text-align:center;">
        <div style="font-size:12px;font-weight:700;color:var(--dim);margin-bottom:8px;">'~i'와 '~y' 발음이 함께 들어간 문장</div>
        ${hwSentences.map(s => `
        <div onclick="TTS.speak('${s.vi}')"
          style="background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:10px;margin-bottom:6px;cursor:pointer;text-align:left;">
          <div style="font-family:monospace;font-size:13px;font-weight:700;color:#f0e6ff;line-height:1.8;">
            ${s.vi.split(' ').map(word => {
              const bare = word.replace(/[.,?!]/g,'');
              if (s.iKeys.split(',').includes(bare))
                return `<span style="color:var(--red);">${word}</span>`;
              if (s.yKeys.split(',').includes(bare))
                return `<span style="color:#60a5fa;">${word}</span>`;
              return word;
            }).join(' ')}
          </div>
          <div style="font-size:11px;color:var(--muted);margin-top:3px;">${s.ko}</div>
        </div>`).join('')}
        <div style="display:flex;gap:8px;margin-top:6px;font-size:10px;color:var(--dim);justify-content:center;">
          <span style="color:var(--red);">■</span> ~i 발음&nbsp;&nbsp;
          <span style="color:#60a5fa;">■</span> ~y 발음
        </div>
      </div>

      <div style="display:flex;gap:10px;justify-content:center;margin-top:10px;margin-bottom:6px;" id="l10-hw-checks">
        ${[0,1,2,3,4].map(i => `
        <div onclick="l10HwCheck(${i})" id="l10hw${i}"
          style="width:40px;height:40px;border-radius:50%;border:2px solid var(--border);
                 background:var(--bg);cursor:pointer;display:flex;align-items:center;
                 justify-content:center;font-size:18px;transition:all .2s;"></div>`).join('')}
      </div>
      <div style="text-align:center;">
        <span id="l10-hw-msg" style="font-size:12px;color:var(--dim);min-height:18px;display:block;"></span>
      </div>
    </div>
  </div>`;
}

/* ─── 10강 유틸 함수 ─── */
function playL10Words(type) {
  const iW = ['bơi','cởi','hỏi','sai','tôi','với'];
  const yW = ['gầy','hay','hôm nay','máy bay','say','thấy'];
  const list = type === 'i' ? iW : yW;
  let i = 0;
  function next() { if (i >= list.length) return; TTS.speak(list[i]); i++; setTimeout(next, 1000); }
  next();
}

function playL10Dialogue() {
  const lines = [
    'Ôi lâu rồi mới gặp em',
    'Đúng vậy Hôm nay anh đi bơi hay gì ạ',
    'Anh định đi đánh gôn với em gái Còn em',
    'Em định đi chơi với bạn trai ạ',
  ];
  let i = 0;
  function next() { if (i >= lines.length) return; TTS.speak(lines[i]); i++; setTimeout(next, 2200); }
  next();
}

function playL10Tongue() {
  const lines = [
    'Buổi trưa ăn bưởi chua',
    'Anh Hạnh ăn hành hăng',
    'Nồi đồng nấu ốc nồi đất nấu ếch',
  ];
  let i = 0;
  function next() { if (i >= lines.length) return; TTS.speak(lines[i]); i++; setTimeout(next, 2000); }
  next();
}

const _l10hwChecked = new Set();
function l10HwCheck(idx) {
  const el = document.getElementById('l10hw' + idx);
  if (!el) return;
  if (_l10hwChecked.has(idx)) {
    _l10hwChecked.delete(idx);
    el.style.background = 'var(--bg)';
    el.style.borderColor = 'var(--border)';
    el.innerHTML = '';
  } else {
    _l10hwChecked.add(idx);
    el.style.background = '#4ade80';
    el.style.borderColor = '#4ade80';
    el.innerHTML = '✓';
    el.style.color = '#0d0d1a';
    el.style.fontWeight = '700';
  }
  const msg = document.getElementById('l10-hw-msg');
  if (!msg) return;
  const n = _l10hwChecked.size;
  const msgs = ['','1번 완료! 💪','2번 완료! 🔥','3번 완료! ⭐','4번 완료! 🌟','5번 모두 완료! 🎉'];
  msg.textContent = msgs[n] || '';
  msg.style.color = n === 5 ? '#4ade80' : 'var(--dim)';
}
