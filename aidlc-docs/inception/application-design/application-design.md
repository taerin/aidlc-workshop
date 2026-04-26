# Application Design — TODO List Web Application

## Overview

React + Express + SQLite 기반 TODO List PoC 웹 애플리케이션.
이메일/비밀번호 인증, TODO CRUD, 완료 토글, 필터링 기능 제공.

## Architecture

```
+-------------------+       HTTP/REST       +-------------------+
|                   |  (JWT Auth Header)    |                   |
|   React Frontend  | --------------------> |  Express Backend  |
|                   |                       |                   |
|  - Pages          |                       |  - Routes         |
|  - Components     |  <-------------------- |  - Services       |
|  - Services       |     JSON Response     |  - Models         |
|  - AuthContext     |                       |  - Middleware      |
+-------------------+                       +-------------------+
                                                     |
                                                     | SQL
                                                     v
                                            +-------------------+
                                            |     SQLite DB     |
                                            |  - users table    |
                                            |  - todos table    |
                                            +-------------------+
```

## Frontend Components

| Component | Type | Purpose |
|-----------|------|---------|
| LoginPage | Page | 로그인 |
| RegisterPage | Page | 회원가입 |
| TodoPage | Page | TODO 관리 (메인) |
| TodoItem | UI | 개별 TODO 항목 |
| TodoList | UI | TODO 목록 렌더링 |
| TodoInput | UI | 새 TODO 입력 |
| TodoFilter | UI | 필터 버튼 (전체/완료/미완료) |
| AuthForm | UI | 로그인/회원가입 공통 폼 |
| ProtectedRoute | UI | 인증 가드 |
| AuthContext | State | 인증 상태 관리 |

## Backend Components

| Component | Type | Purpose |
|-----------|------|---------|
| authRoutes | Route | POST /api/auth/register, /api/auth/login |
| todoRoutes | Route | GET/POST/PUT/DELETE /api/todos |
| authMiddleware | Middleware | JWT 검증 |
| authService | Service | 인증 비즈니스 로직 |
| todoService | Service | TODO 비즈니스 로직 |
| userModel | Model | User DB 연산 |
| todoModel | Model | Todo DB 연산 |
| database | Infra | SQLite 연결/초기화 |

## API Endpoints

| Method | Endpoint | Auth | Purpose |
|--------|----------|------|---------|
| POST | /api/auth/register | No | 회원가입 |
| POST | /api/auth/login | No | 로그인 |
| GET | /api/todos | Yes | TODO 목록 조회 |
| POST | /api/todos | Yes | TODO 생성 |
| PUT | /api/todos/:id | Yes | TODO 수정 |
| DELETE | /api/todos/:id | Yes | TODO 삭제 |

## Database Schema

### users
| Column | Type | Constraints |
|--------|------|-------------|
| id | INTEGER | PRIMARY KEY AUTOINCREMENT |
| email | TEXT | UNIQUE NOT NULL |
| password | TEXT | NOT NULL (hashed) |
| created_at | TEXT | DEFAULT CURRENT_TIMESTAMP |

### todos
| Column | Type | Constraints |
|--------|------|-------------|
| id | INTEGER | PRIMARY KEY AUTOINCREMENT |
| user_id | INTEGER | FOREIGN KEY → users.id, NOT NULL |
| title | TEXT | NOT NULL |
| completed | INTEGER | DEFAULT 0 (boolean) |
| created_at | TEXT | DEFAULT CURRENT_TIMESTAMP |
| updated_at | TEXT | DEFAULT CURRENT_TIMESTAMP |

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, Tailwind CSS, shadcn/ui, react-router-dom |
| Backend | Node.js, Express |
| Database | SQLite (better-sqlite3) |
| Auth | bcryptjs, jsonwebtoken |

## Detailed Design Documents
- [components.md](components.md) — 컴포넌트 정의 및 책임
- [component-methods.md](component-methods.md) — 메서드 시그니처
- [services.md](services.md) — 서비스 정의 및 오케스트레이션
- [component-dependency.md](component-dependency.md) — 의존성 및 통신 패턴
