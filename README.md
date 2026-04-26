# TODO List Web Application

React + Express + SQLite 기반 TODO List PoC 웹 애플리케이션입니다.

## 기능

- 이메일/비밀번호 회원가입 및 로그인
- TODO 추가, 조회, 수정, 삭제
- 완료/미완료 상태 토글
- 필터링 (전체 / 완료 / 미완료)

## 기술 스택

| Layer | Technology |
|-------|-----------|
| Frontend | React, Tailwind CSS, shadcn/ui, React Router |
| Backend | Node.js, Express |
| Database | SQLite (better-sqlite3) |
| Auth | bcryptjs, jsonwebtoken (JWT) |

## 실행 방법

### 1. 의존성 설치

```bash
npm run install:all
```

### 2. 개발 서버 실행

```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:3000

### 3. 사용

1. http://localhost:5173 접속
2. 회원가입 (이메일 + 비밀번호 6자 이상)
3. 로그인
4. TODO 추가, 수정, 삭제, 완료 토글, 필터링

## 프로젝트 구조

```
├── client/                    # React Frontend
│   ├── src/
│   │   ├── components/        # UI Components
│   │   ├── contexts/          # AuthContext
│   │   ├── pages/             # LoginPage, RegisterPage, TodoPage
│   │   ├── services/          # API Services
│   │   ├── App.jsx            # Routing
│   │   └── main.jsx           # Entry point
│   └── package.json
├── server/                    # Express Backend
│   ├── src/
│   │   ├── middleware/        # JWT Auth Middleware
│   │   ├── models/            # User, Todo Models
│   │   ├── routes/            # Auth, Todo Routes
│   │   ├── services/          # Auth, Todo Services
│   │   ├── db.js              # SQLite Setup
│   │   └── index.js           # Express Server
│   └── package.json
└── package.json               # Root (concurrently)
```
