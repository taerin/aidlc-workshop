# Build Instructions

## Prerequisites
- **Node.js**: v18+ (tested on v25.2.1)
- **npm**: v9+ (tested on 11.6.2)
- **OS**: macOS, Linux, Windows

## Build Steps

### 1. Install Dependencies
```bash
npm run install:all
```
이 명령어는 root, server, client 세 곳의 의존성을 모두 설치합니다.

### 2. Build Frontend
```bash
cd client && npm run build
```
- **Expected Output**: `✓ built in ~600ms`
- **Build Artifacts**: `client/dist/` (index.html, JS, CSS)

### 3. Start Development Servers
```bash
npm run dev
```
- **Frontend**: http://localhost:5173 (Vite dev server)
- **Backend**: http://localhost:3000 (Express server)
- Vite가 `/api` 요청을 백엔드로 프록시합니다.

### 4. Verify Build Success
- Frontend: 브라우저에서 http://localhost:5173 접속 → 로그인 페이지 표시
- Backend: `Server running on http://localhost:3000` 콘솔 출력 확인

## Troubleshooting

### Port Already in Use
```bash
# 포트 사용 중인 프로세스 확인
lsof -i :3000
lsof -i :5173
# 프로세스 종료
kill -9 <PID>
```

### SQLite Build Error (better-sqlite3)
```bash
# 네이티브 모듈 재빌드
cd server && npm rebuild better-sqlite3
```

### node_modules 문제
```bash
# 전체 재설치
rm -rf node_modules server/node_modules client/node_modules
npm run install:all
```
