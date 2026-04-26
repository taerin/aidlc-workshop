# Code Generation Plan — TODO List Web Application

## Unit Context
- **Unit**: todo-app (단일 유닛)
- **Stories**: US-1 ~ US-9 (전체)
- **Architecture**: React Frontend + Express Backend + SQLite DB
- **Workspace Root**: /Users/taerin/workspace/aidlc-workshop

## Project Structure
```
aidlc-workshop/
├── client/                    # React Frontend
│   ├── src/
│   │   ├── components/        # UI Components
│   │   ├── contexts/          # AuthContext
│   │   ├── pages/             # Page Components
│   │   ├── services/          # API Services
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── server/                    # Express Backend
│   ├── src/
│   │   ├── middleware/        # authMiddleware
│   │   ├── models/            # userModel, todoModel
│   │   ├── routes/            # authRoutes, todoRoutes
│   │   ├── services/          # authService, todoService
│   │   ├── db.js              # SQLite setup
│   │   └── index.js           # Express entry point
│   └── package.json
└── package.json               # Root package.json (scripts)
```

## Generation Steps

### Phase 1: Project Setup
- [x] Step 1: Root package.json 생성 (concurrently로 client/server 동시 실행)
- [x] Step 2: Backend package.json + 의존성 설정
- [x] Step 3: Frontend package.json + Vite + Tailwind + shadcn/ui 설정

### Phase 2: Backend — Database & Models
- [x] Step 4: SQLite 데이터베이스 설정 (db.js) — users, todos 테이블 생성
- [x] Step 5: User 모델 (userModel.js) — create, findByEmail [US-1, US-2]
- [x] Step 6: Todo 모델 (todoModel.js) — findAllByUserId, create, update, delete [US-4~US-9]

### Phase 3: Backend — Services & Auth
- [x] Step 7: Auth 서비스 (authService.js) — register, login [US-1, US-2]
- [x] Step 8: Auth 미들웨어 (authMiddleware.js) — JWT 검증 [US-2]
- [x] Step 9: Todo 서비스 (todoService.js) — CRUD + 소유자 확인 [US-4~US-9]

### Phase 4: Backend — Routes & Entry Point
- [x] Step 10: Auth 라우트 (authRoutes.js) — POST /register, /login [US-1, US-2, US-3]
- [x] Step 11: Todo 라우트 (todoRoutes.js) — GET/POST/PUT/DELETE [US-4~US-9]
- [x] Step 12: Express 서버 진입점 (index.js) — 미들웨어, 라우트 연결

### Phase 5: Frontend — Setup & Auth
- [x] Step 13: Vite + Tailwind + shadcn/ui 설정 파일들
- [x] Step 14: API 서비스 (apiService.js) — HTTP 클라이언트, JWT 헤더
- [x] Step 15: Auth 서비스 (authService.js) — login, register API 호출
- [x] Step 16: AuthContext — 인증 상태 관리, 토큰 저장 [US-2, US-3]
- [x] Step 17: AuthForm 컴포넌트 — 이메일/비밀번호 폼, 유효성 검사 [US-1, US-2]
- [x] Step 18: LoginPage, RegisterPage — 로그인/회원가입 페이지 [US-1, US-2]
- [x] Step 19: ProtectedRoute — 인증 가드 [US-2]

### Phase 6: Frontend — TODO Features
- [x] Step 20: Todo 서비스 (todoService.js) — CRUD API 호출
- [x] Step 21: TodoInput 컴포넌트 — 새 TODO 입력 [US-4]
- [x] Step 22: TodoItem 컴포넌트 — 개별 항목 (체크박스, 수정, 삭제) [US-6, US-7, US-8]
- [x] Step 23: TodoList 컴포넌트 — 목록 렌더링 [US-5]
- [x] Step 24: TodoFilter 컴포넌트 — 필터 버튼 [US-9]
- [x] Step 25: TodoPage — 메인 페이지 (모든 TODO 컴포넌트 통합) [US-4~US-9]

### Phase 7: App Assembly & Routing
- [x] Step 26: App.jsx — 라우팅 설정 (Login, Register, Todo 페이지)
- [x] Step 27: main.jsx — 앱 진입점

### Phase 8: Documentation
- [x] Step 28: README.md 업데이트 — 실행 방법, 프로젝트 구조 설명

## Story Traceability
| Story | Steps |
|-------|-------|
| US-1 (회원가입) | 5, 7, 10, 17, 18 |
| US-2 (로그인) | 5, 7, 8, 10, 15, 16, 17, 18, 19 |
| US-3 (로그아웃) | 10, 16 |
| US-4 (TODO 추가) | 6, 9, 11, 20, 21, 25 |
| US-5 (TODO 조회) | 6, 9, 11, 20, 23, 25 |
| US-6 (TODO 수정) | 6, 9, 11, 20, 22, 25 |
| US-7 (TODO 삭제) | 6, 9, 11, 20, 22, 25 |
| US-8 (완료 토글) | 6, 9, 11, 20, 22, 25 |
| US-9 (필터링) | 20, 24, 25 |
