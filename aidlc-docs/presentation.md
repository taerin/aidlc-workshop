# AI-DLC (AI-Driven Development Life Cycle) 소개

> TODO List 웹앱 PoC 프로젝트를 통한 AI-DLC 워크플로우 실습 사례

---

## 1. AI-DLC란?

AI가 소프트웨어 개발 전 과정을 구조적으로 가이드하는 방법론입니다.

**핵심 특징:**
- 🤖 AI가 각 단계를 자동으로 판단하고 실행
- 📋 단계마다 사용자 승인 게이트 존재 — AI가 독단적으로 진행하지 않음
- ⚡ 프로젝트 복잡도에 따라 단계를 자동으로 조절 (Adaptive)
- 📝 모든 결정과 대화가 audit.md에 기록 — 완전한 감사 추적

**기존 개발 방식과의 차이:**

| 항목 | 기존 방식 | AI-DLC |
|------|----------|--------|
| 요구사항 정리 | 사람이 직접 문서화 | AI가 질문하고 문서 자동 생성 |
| 설계 | 사람이 직접 설계 | AI가 설계안 제시, 사람이 승인 |
| 코드 작성 | 사람이 직접 코딩 | AI가 계획 수립 후 코드 생성 |
| 문서화 | 개발 후 별도 작업 | 전 과정에서 자동 생성 |
| 의사결정 추적 | 대부분 유실 | audit.md에 전체 기록 |

---

## 2. 3-Phase 구조

```
  🔵 INCEPTION          🟢 CONSTRUCTION        🟡 OPERATIONS
  ─────────────         ────────────────        ──────────────
  WHAT & WHY            HOW                     DEPLOY & RUN
  (무엇을, 왜)          (어떻게)                 (배포, 운영)
```

### 🔵 INCEPTION — 기획 & 설계
| Stage | 필수 여부 | 역할 |
|-------|----------|------|
| Workspace Detection | ALWAYS | 프로젝트 상태 파악 (신규/기존) |
| Reverse Engineering | CONDITIONAL | 기존 코드 분석 (Brownfield만) |
| Requirements Analysis | ALWAYS | 요구사항 수집 및 문서화 |
| User Stories | CONDITIONAL | 사용자 스토리 및 수락 기준 정의 |
| Workflow Planning | ALWAYS | 실행 계획 수립 (어떤 단계를 실행할지) |
| Application Design | CONDITIONAL | 컴포넌트, API, DB 설계 |
| Units Generation | CONDITIONAL | 작업 단위 분해 (대규모 프로젝트) |

### 🟢 CONSTRUCTION — 구현 & 테스트
| Stage | 필수 여부 | 역할 |
|-------|----------|------|
| Functional Design | CONDITIONAL | 상세 비즈니스 로직 설계 |
| NFR Requirements | CONDITIONAL | 비기능 요구사항 (성능, 보안 등) |
| NFR Design | CONDITIONAL | NFR 패턴 설계 |
| Infrastructure Design | CONDITIONAL | 인프라 설계 |
| Code Generation | ALWAYS | 코드 생성 (계획 → 실행) |
| Build and Test | ALWAYS | 빌드/테스트 가이드 생성 |

### 🟡 OPERATIONS — 배포 & 운영
- 현재 Placeholder (향후 확장 예정)

---

## 3. 핵심 메커니즘

### 3.1 Adaptive Execution (적응형 실행)
AI가 프로젝트 특성을 분석해서 불필요한 단계는 자동으로 건너뜁니다.

**이번 프로젝트에서:**
- ✅ 실행: Requirements, User Stories, Workflow Planning, Application Design, Code Generation, Build & Test
- ⏭️ 건너뜀: Reverse Engineering (신규 프로젝트), Units Generation (단일 유닛), Functional Design (단순 CRUD), NFR (PoC), Infrastructure Design (로컬 개발)

### 3.2 Approval Gates (승인 게이트)
매 단계 완료 시 사용자 승인을 받아야 다음으로 진행합니다.

```
AI: 요구사항 분석 완료. 승인하시겠어요?
User: 승인한다
AI: → 다음 단계로 진행
```

### 3.3 Extension System (확장 시스템)
보안, 테스트 등 추가 규칙을 opt-in 방식으로 적용할 수 있습니다.

**이번 프로젝트에서:**
- Security Baseline → 미적용 (PoC)
- Property-Based Testing → 미적용 (단순 CRUD)

### 3.4 Audit Trail (감사 추적)
모든 사용자 입력과 AI 응답이 타임스탬프와 함께 `audit.md`에 기록됩니다.

---

## 4. 실습 사례: TODO List 웹앱

### 4.1 프로젝트 개요
- **목적**: PoC (프로토타입)
- **기능**: 회원가입/로그인 + TODO CRUD + 완료 토글 + 필터링
- **기술 스택**: React + shadcn/ui + Tailwind CSS / Express + SQLite / JWT

### 4.2 AI-DLC 실행 흐름

```
[사용자 요청] "TODO List webapp을 만들고싶어"
        │
        ▼
🔵 Workspace Detection ──── 신규 프로젝트 감지
        │
        ▼
🔵 Requirements Analysis ── 8개 질문 → 요구사항 문서 생성
        │                    (기능 범위, 기술 스택, 인증, UI 등)
        ▼
🔵 User Stories ──────────── 9개 스토리 생성 (US-1~US-9)
        │                    페르소나: 김민수 (바쁜 직장인)
        ▼
🔵 Workflow Planning ─────── 실행 계획 수립 (4단계 실행, 6단계 건너뜀)
        │
        ▼
🔵 Application Design ───── 컴포넌트, API, DB 스키마 설계
        │
        ▼
🟢 Code Generation ──────── 28 스텝 계획 → 전체 코드 생성
        │                    Backend 12파일 + Frontend 17파일
        ▼
🟢 Build and Test ────────── 빌드 확인 + 테스트 가이드 생성
        │
        ▼
    [완료] ✅
```

### 4.3 생성된 산출물

**코드:**
- Backend: Express 서버, SQLite DB, JWT 인증, REST API (6개 엔드포인트)
- Frontend: React 앱, shadcn/ui 컴포넌트, 3개 페이지, 인증/TODO 서비스

**문서 (aidlc-docs/):**
```
aidlc-docs/
├── aidlc-state.md                          # 프로젝트 상태 추적
├── audit.md                                # 전체 감사 로그
├── inception/
│   ├── requirements/                       # 요구사항 문서
│   ├── user-stories/                       # 스토리 + 페르소나
│   ├── plans/                              # 실행 계획
│   └── application-design/                 # 설계 문서 5개
└── construction/
    ├── plans/                              # 코드 생성 계획
    └── build-and-test/                     # 빌드/테스트 가이드
```

### 4.4 소요 시간
- **전체 프로세스**: 약 30분 (대화 포함)
- **INCEPTION (기획~설계)**: ~20분
- **CONSTRUCTION (코드 생성~테스트)**: ~10분

---

## 5. 장점과 한계

### 장점
- ✅ **구조화된 프로세스** — 빠뜨리는 단계 없이 체계적으로 진행
- ✅ **자동 문서화** — 요구사항, 설계, 코드 계획이 자동 생성
- ✅ **의사결정 추적** — 왜 이렇게 결정했는지 audit.md에 전부 기록
- ✅ **적응형** — 프로젝트 규모에 맞게 단계 자동 조절
- ✅ **빠른 PoC** — 30분 만에 동작하는 풀스택 앱 완성

### 한계 / 고려사항
- ⚠️ AI 판단이 항상 맞지는 않음 (예: User Stories를 건너뛰려 한 사례)
- ⚠️ 승인 게이트가 많아 대화가 길어질 수 있음
- ⚠️ 복잡한 비즈니스 로직은 사람의 검토가 필수
- ⚠️ 자동화된 테스트 코드 생성은 별도 설정 필요

---

## 6. 시작하기

### 필요한 것
1. AI-DLC 규칙 파일 (`.kiro/aws-aidlc-rule-details/`)
2. AI 코딩 도구 (Kiro CLI, Amazon Q Developer 등)

### 시작 방법
```
"AI-DLC 사용해서 [만들고 싶은 것]을 만들고 싶어"
```
이 한 마디면 AI가 전체 프로세스를 가이드합니다.

---

> 📎 **참고 자료**
> - 프로젝트 코드: `client/`, `server/`
> - AI-DLC 문서: `aidlc-docs/`
> - 감사 로그: `aidlc-docs/audit.md`
