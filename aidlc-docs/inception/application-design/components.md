# Components

## Frontend Components (React)

### Pages

| Component | Purpose |
|-----------|---------|
| `LoginPage` | 로그인 폼 표시, 인증 처리 |
| `RegisterPage` | 회원가입 폼 표시, 계정 생성 |
| `TodoPage` | TODO 목록 관리 (메인 페이지) |

### UI Components

| Component | Purpose |
|-----------|---------|
| `TodoItem` | 개별 TODO 항목 표시 (체크박스, 제목, 수정/삭제 버튼) |
| `TodoList` | TODO 항목 목록 렌더링 |
| `TodoInput` | 새 TODO 입력 폼 |
| `TodoFilter` | 필터 버튼 그룹 (전체/완료/미완료) |
| `AuthForm` | 로그인/회원가입 공통 폼 (이메일, 비밀번호 입력) |
| `ProtectedRoute` | 인증되지 않은 사용자를 로그인 페이지로 리다이렉트 |

### Context/State

| Component | Purpose |
|-----------|---------|
| `AuthContext` | 인증 상태 관리 (로그인 여부, 토큰, 사용자 정보) |

## Backend Components (Express)

### Routes

| Component | Purpose |
|-----------|---------|
| `authRoutes` | 인증 관련 API 엔드포인트 (/api/auth/*) |
| `todoRoutes` | TODO CRUD API 엔드포인트 (/api/todos/*) |

### Middleware

| Component | Purpose |
|-----------|---------|
| `authMiddleware` | JWT 토큰 검증, 요청에 사용자 정보 첨부 |

### Data Access

| Component | Purpose |
|-----------|---------|
| `userModel` | User 테이블 CRUD 연산 |
| `todoModel` | Todo 테이블 CRUD 연산 |

### Database

| Component | Purpose |
|-----------|---------|
| `database` | SQLite 연결 및 테이블 초기화 |
