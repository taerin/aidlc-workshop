# Component Methods

> 참고: 상세 비즈니스 규칙은 Functional Design 단계에서 정의됩니다.

## Frontend

### AuthContext
| Method | Input | Output | Purpose |
|--------|-------|--------|---------|
| `login(email, password)` | string, string | Promise\<void\> | 로그인 API 호출, 토큰 저장 |
| `register(email, password)` | string, string | Promise\<void\> | 회원가입 API 호출 |
| `logout()` | - | void | 토큰 삭제, 로그인 페이지 이동 |
| `isAuthenticated()` | - | boolean | 현재 인증 상태 반환 |

### TodoPage
| Method | Input | Output | Purpose |
|--------|-------|--------|---------|
| `fetchTodos()` | - | Promise\<Todo[]\> | 서버에서 TODO 목록 조회 |
| `addTodo(title)` | string | Promise\<Todo\> | 새 TODO 추가 |
| `updateTodo(id, updates)` | number, Partial\<Todo\> | Promise\<Todo\> | TODO 수정 |
| `deleteTodo(id)` | number | Promise\<void\> | TODO 삭제 |
| `toggleTodo(id)` | number | Promise\<Todo\> | 완료 상태 토글 |
| `setFilter(filter)` | 'all' \| 'completed' \| 'active' | void | 필터 변경 |

### AuthForm
| Method | Input | Output | Purpose |
|--------|-------|--------|---------|
| `handleSubmit(e)` | FormEvent | Promise\<void\> | 폼 제출 처리 (로그인 또는 회원가입) |
| `validate()` | - | string \| null | 입력값 유효성 검사, 에러 메시지 반환 |

## Backend

### authRoutes
| Endpoint | Method | Input | Output | Purpose |
|----------|--------|-------|--------|---------|
| `POST /api/auth/register` | POST | { email, password } | { message } \| { error } | 회원가입 |
| `POST /api/auth/login` | POST | { email, password } | { token } \| { error } | 로그인, JWT 발급 |

### todoRoutes
| Endpoint | Method | Input | Output | Purpose |
|----------|--------|-------|--------|---------|
| `GET /api/todos` | GET | - (JWT header) | Todo[] | 사용자의 TODO 목록 조회 |
| `POST /api/todos` | POST | { title } | Todo | 새 TODO 생성 |
| `PUT /api/todos/:id` | PUT | { title?, completed? } | Todo | TODO 수정 |
| `DELETE /api/todos/:id` | DELETE | - | { message } | TODO 삭제 |

### authMiddleware
| Method | Input | Output | Purpose |
|--------|-------|--------|---------|
| `authenticate(req, res, next)` | Request | Request (with userId) | JWT 검증, req.userId 설정 |

### userModel
| Method | Input | Output | Purpose |
|--------|-------|--------|---------|
| `create(email, hashedPassword)` | string, string | User | 사용자 생성 |
| `findByEmail(email)` | string | User \| null | 이메일로 사용자 조회 |

### todoModel
| Method | Input | Output | Purpose |
|--------|-------|--------|---------|
| `findAllByUserId(userId)` | number | Todo[] | 사용자의 전체 TODO 조회 |
| `create(userId, title)` | number, string | Todo | TODO 생성 |
| `update(id, userId, updates)` | number, number, object | Todo \| null | TODO 수정 (소유자 확인) |
| `delete(id, userId)` | number, number | boolean | TODO 삭제 (소유자 확인) |

## Data Types

```typescript
interface User {
  id: number;
  email: string;
  password: string; // hashed
  created_at: string;
}

interface Todo {
  id: number;
  user_id: number;
  title: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}
```
