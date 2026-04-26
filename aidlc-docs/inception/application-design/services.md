# Services

## Frontend Services

### apiService
HTTP 클라이언트 래퍼. 모든 API 호출의 공통 로직 처리.

| Method | Purpose |
|--------|---------|
| `get(url)` | GET 요청, JWT 헤더 자동 첨부 |
| `post(url, data)` | POST 요청, JWT 헤더 자동 첨부 |
| `put(url, data)` | PUT 요청, JWT 헤더 자동 첨부 |
| `del(url)` | DELETE 요청, JWT 헤더 자동 첨부 |

**Responsibilities**:
- Base URL 관리
- JWT 토큰을 Authorization 헤더에 자동 첨부
- 401 응답 시 로그아웃 처리
- 에러 응답 파싱 및 전달

### authService
인증 관련 API 호출 캡슐화.

| Method | Purpose |
|--------|---------|
| `login(email, password)` | POST /api/auth/login 호출 |
| `register(email, password)` | POST /api/auth/register 호출 |

### todoService
TODO 관련 API 호출 캡슐화.

| Method | Purpose |
|--------|---------|
| `getAll()` | GET /api/todos 호출 |
| `create(title)` | POST /api/todos 호출 |
| `update(id, updates)` | PUT /api/todos/:id 호출 |
| `remove(id)` | DELETE /api/todos/:id 호출 |

## Backend Services

### authService (Backend)
인증 비즈니스 로직 처리.

| Method | Purpose |
|--------|---------|
| `register(email, password)` | 중복 확인 → 비밀번호 해싱 → 사용자 생성 |
| `login(email, password)` | 사용자 조회 → 비밀번호 검증 → JWT 생성 |

**Orchestration**:
- userModel.findByEmail → 중복/존재 확인
- bcrypt → 비밀번호 해싱/검증
- jwt.sign → 토큰 생성

### todoService (Backend)
TODO 비즈니스 로직 처리.

| Method | Purpose |
|--------|---------|
| `getAllByUser(userId)` | 사용자의 TODO 목록 조회 |
| `create(userId, title)` | 제목 유효성 검사 → TODO 생성 |
| `update(id, userId, updates)` | 소유자 확인 → TODO 수정 |
| `remove(id, userId)` | 소유자 확인 → TODO 삭제 |

**Orchestration**:
- todoModel → DB 연산 위임
- 소유자 확인 로직으로 다른 사용자의 TODO 접근 차단
