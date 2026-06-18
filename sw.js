/* ════════════════════════════════════════════════════════════
   베트남어 단어장 — Service Worker (오프라인 지원)

   ⚠️ 배포 규칙: index.html의 APP_VERSION을 올릴 때 아래 VERSION도 같이 올릴 것.
      캐시 이름(viet-shell-VERSION)이 바뀌어야 activate에서 옛 캐시가 자동 폐기됩니다.
      (이것이 "고쳤는데 폰에 반영 안 됨" = 스테일 캐시를 막는 핵심 장치)

   전략:
   • HTML 문서      → network-first(3s 타임아웃) → 캐시 폴백
                      온라인이면 항상 최신 코드, 오프라인이면 캐시본 제공.
   • 동일출처 정적   → cache-first → 네트워크 → 캐시 (manifest/icon/words.json)
   • 폰트(cross-origin) → cache-first, 버전 무관 영구 캐시 (안 바뀌므로)
   ════════════════════════════════════════════════════════════ */
'use strict';

const VERSION     = 'v4.9.1';                       // ← index.html의 APP_VERSION과 동기화
const SHELL_CACHE = 'viet-shell-' + VERSION;      // 버전별 앱 셸 (배포 시 교체→구버전 폐기)
const FONT_CACHE  = 'viet-fonts-v1';              // 폰트 (버전 무관 영구)
const KEEP        = [SHELL_CACHE, FONT_CACHE];    // activate에서 보존할 캐시

const SHELL_FILES  = ['./index.html', './manifest.json', './icon-180.png', './words.json'];
const FONT_ORIGINS = ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'];
const NET_TIMEOUT  = 3000;                         // HTML network-first 타임아웃(ms)

// ── 설치: 앱 셸 사전 캐싱 (개별 실패 허용 → 일부 파일 없어도 설치 성공) ──
self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(SHELL_CACHE);
    await Promise.allSettled(SHELL_FILES.map((f) => cache.add(f)));   // 404여도 나머지 캐싱 계속
    await self.skipWaiting();                       // 새 SW 즉시 대기 해제
  })());
});

// ── 활성화: 구버전 캐시 폐기 + 열린 페이지 즉시 제어 ──
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => KEEP.indexOf(k) === -1).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

// ── 요청 가로채기 ──
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;                 // GET만 캐시 대상 (POST 등은 패스)

  let url;
  try { url = new URL(req.url); } catch (e) { return; }

  // 1) 폰트(cross-origin): cache-first, 영구 캐시
  if (FONT_ORIGINS.indexOf(url.origin) !== -1) {
    event.respondWith(cacheFirst(req, FONT_CACHE));
    return;
  }

  // 그 외 cross-origin은 브라우저 기본 처리 (가로채지 않음)
  if (url.origin !== self.location.origin) return;

  // 2) HTML 문서(내비게이션): network-first → 캐시 폴백
  if (req.mode === 'navigate') {
    event.respondWith(networkFirstHTML(req));
    return;
  }

  // 3) 동일출처 정적 자원: cache-first
  event.respondWith(cacheFirst(req, SHELL_CACHE));
});

// ── 전략: cache-first (불투명 응답도 캐시 → 폰트 오프라인 지원) ──
async function cacheFirst(req, cacheName) {
  const cache  = await caches.open(cacheName);
  const cached = await cache.match(req);
  if (cached) return cached;
  try {
    const res = await fetch(req);
    if (res && (res.ok || res.type === 'opaque')) { cache.put(req, res.clone()); }
    return res;
  } catch (e) {
    return cached || Response.error();              // 오프라인 + 미캐시
  }
}

// ── 전략: HTML network-first (타임아웃 시 캐시 폴백) ──
async function networkFirstHTML(req) {
  const cache = await caches.open(SHELL_CACHE);
  try {
    const res = await Promise.race([
      fetch(req),
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), NET_TIMEOUT)),
    ]);
    if (res && res.ok) { cache.put('./index.html', res.clone()); }   // 최신본으로 캐시 갱신
    return res;
  } catch (e) {
    const cached = (await cache.match('./index.html')) || (await cache.match(req));
    return cached || Response.error();
  }
}

// ── 테스트 노출 (실제 SW 런타임엔 module 미정의 → 무시됨) ──
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { cacheFirst, networkFirstHTML, VERSION, SHELL_CACHE, FONT_CACHE, KEEP, SHELL_FILES, NET_TIMEOUT };
}
