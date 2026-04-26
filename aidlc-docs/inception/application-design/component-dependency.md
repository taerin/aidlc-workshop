# Component Dependencies

## Dependency Matrix

### Frontend

| Component | Depends On |
|-----------|-----------|
| `LoginPage` | AuthForm, AuthContext |
| `RegisterPage` | AuthForm, AuthContext |
| `TodoPage` | TodoList, TodoInput, TodoFilter, AuthContext, todoService |
| `TodoList` | TodoItem |
| `TodoItem` | - (leaf component) |
| `TodoInput` | - (leaf component) |
| `TodoFilter` | - (leaf component) |
| `AuthForm` | - (leaf component) |
| `ProtectedRoute` | AuthContext |
| `AuthContext` | authService |
| `authService` | apiService |
| `todoService` | apiService |
| `apiService` | - (base HTTP client) |

### Backend

| Component | Depends On |
|-----------|-----------|
| `authRoutes` | authService (backend) |
| `todoRoutes` | todoService (backend), authMiddleware |
| `authMiddleware` | jwt |
| `authService (backend)` | userModel, bcrypt, jwt |
| `todoService (backend)` | todoModel |
| `userModel` | database |
| `todoModel` | database |
| `database` | sqlite3 |

## Communication Patterns

### Frontend → Backend (HTTP/REST)

```
AuthForm → authService → apiService → POST /api/auth/login
                                     → POST /api/auth/register

TodoPage → todoService → apiService → GET    /api/todos
                                     → POST   /api/todos
                                     → PUT    /api/todos/:id
                                     → DELETE /api/todos/:id
```

### Backend Internal

```
authRoutes → authService → userModel → database (SQLite)
                         → bcrypt (password hashing)
                         → jwt (token generation)

todoRoutes → authMiddleware → jwt (token verification)
           → todoService → todoModel → database (SQLite)
```

## Data Flow

```
[Browser]
    |
    |-- React App
    |     |-- AuthContext (state: token, user)
    |     |-- Pages (LoginPage, RegisterPage, TodoPage)
    |     |-- Services (apiService → authService, todoService)
    |
    |-- HTTP (JWT in Authorization header)
    |
[Express Server]
    |
    |-- authMiddleware (JWT verification)
    |-- Routes (authRoutes, todoRoutes)
    |-- Services (authService, todoService)
    |-- Models (userModel, todoModel)
    |
    |-- SQL queries
    |
[SQLite Database]
    |-- users table
    |-- todos table
```

## External Dependencies

| Package | Layer | Purpose |
|---------|-------|---------|
| react, react-dom | Frontend | UI framework |
| react-router-dom | Frontend | Client-side routing |
| tailwindcss | Frontend | Styling |
| shadcn/ui | Frontend | UI components |
| express | Backend | HTTP server |
| better-sqlite3 | Backend | SQLite driver |
| bcryptjs | Backend | Password hashing |
| jsonwebtoken | Backend | JWT generation/verification |
| cors | Backend | Cross-origin requests |
