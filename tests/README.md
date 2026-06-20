# tests — 회귀 검증

`index.html`을 수정한 뒤, 기능이 깨지지 않았는지 자동으로 확인하는 테스트입니다.
헤드리스 브라우저(Chromium)에 **가짜 데이터를 주입해** 돌리므로, 실제 학습 데이터는 전혀 건드리지 않습니다.

| 파일 | 검사 내용 | 통과 기준 |
|---|---|---|
| `verify.js` | 부팅 · 스피드런 풀사이클 · TTS 정지 | `✅ JS 에러 0` |
| `audit.js` | 22개 항목(렌더·SRS 격리·드릴·정상퀴즈·스피드런) | `22 PASS / 0 FAIL` |

---

## 최초 1회 설정

[Node.js](https://nodejs.org) 설치 후, 레포 루트에서:

```bash
npm install playwright
npx playwright install chromium
```

> `npm install playwright`는 `node_modules/` 폴더를 만듭니다.
> 레포에 올리고 싶지 않으면 `.gitignore`에 `node_modules/` 한 줄 추가하세요.

---

## 실행

레포 루트(= `index.html`이 있는 곳)에서:

```bash
node tests/verify.js
node tests/audit.js
```

두 파일은 자동으로 한 단계 위의 `../index.html`을 검사합니다.

---

## 통과 화면 예시

```
$ node tests/audit.js
  ✅ [홈] 깨진보간 없음 (svg=...)
  ...
  합계: 22 PASS / 0 FAIL
  ✅ JS 에러 0
```

```
$ node tests/verify.js
1) 부팅: loadError=false 홈=true ...
2) 게임: 시작 phase=play ...
3) TTS: 받아쓰기→탭이탈 시 cancel 호출=1 ...
✅ JS 에러 0
```

`FAIL`이 1개라도 뜨거나 `❌ 에러`가 보이면 — 방금 수정한 부분이 무언가를 깨뜨린 것입니다.

---

## 권장 워크플로

1. `index.html` 수정
2. `node tests/audit.js` 실행 → `22 PASS / 0 FAIL` 확인
3. `node tests/verify.js` 실행 → `✅ JS 에러 0` 확인
4. 통과하면 커밋
