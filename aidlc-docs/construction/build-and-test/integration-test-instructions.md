# Integration Test Instructions

> Frontend ↔ Backend ↔ Database 간 통합 테스트입니다.
> `npm run dev`로 서버를 실행한 후 진행하세요.

## Scenario 1: 회원가입 → 로그인 → TODO 관리 (전체 플로우)

### Setup
1. `npm run dev`로 개발 서버 실행
2. 기존 DB 초기화가 필요하면 `rm server/todo.db` 후 서버 재시작

### Test Steps
1. http://localhost:5173/register 접속
2. `test@example.com` / `password123` 으로 회원가입
3. 로그인 페이지로 리다이렉트 확인
4. 동일 계정으로 로그인
5. TODO 페이지 표시 확인
6. "회의 준비" TODO 추가
7. "보고서 작성" TODO 추가
8. "회의 준비" 완료 체크
9. "미완료" 필터 → "보고서 작성"만 표시 확인
10. "보고서 작성" 제목을 "보고서 작성 (긴급)"으로 수정
11. "회의 준비" 삭제
12. "전체" 필터 → "보고서 작성 (긴급)"만 표시 확인
13. 로그아웃
14. 다시 로그인 → 데이터 유지 확인

### Expected Results
- 모든 단계가 에러 없이 완료
- 데이터가 서버에 영구 저장 (새로고침/재로그인 후에도 유지)

## Scenario 2: 사용자 간 데이터 격리

### Test Steps
1. 사용자 A (`user-a@test.com`) 회원가입 + 로그인
2. "A의 할 일" TODO 추가
3. 로그아웃
4. 사용자 B (`user-b@test.com`) 회원가입 + 로그인
5. "B의 할 일" TODO 추가
6. 사용자 B의 TODO 목록에 "A의 할 일"이 없는지 확인
7. 로그아웃 → 사용자 A 로그인
8. 사용자 A의 TODO 목록에 "B의 할 일"이 없는지 확인

### Expected Results
- 각 사용자는 자신의 TODO만 볼 수 있음
- 다른 사용자의 데이터에 접근 불가

## Scenario 3: 인증 만료/무효 토큰

### Test Steps
1. 로그인 후 TODO 페이지 접속
2. 브라우저 개발자 도구 → Application → Local Storage
3. `token` 값을 임의의 문자열로 변경
4. TODO 추가 시도

### Expected Results
- 401 에러 발생 → 로그인 페이지로 리다이렉트

## Scenario 4: Backend API 직접 테스트 (curl)

### 회원가입
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"curl@test.com","password":"password123"}'
```
Expected: `{"message":"회원가입이 완료되었습니다"}`

### 로그인
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"curl@test.com","password":"password123"}'
```
Expected: `{"token":"eyJ..."}`

### TODO 생성 (토큰 필요)
```bash
TOKEN="<위에서 받은 토큰>"
curl -X POST http://localhost:3000/api/todos \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"title":"curl로 추가한 TODO"}'
```
Expected: `{"id":1,"user_id":1,"title":"curl로 추가한 TODO","completed":0,...}`

### 인증 없이 TODO 접근
```bash
curl http://localhost:3000/api/todos
```
Expected: `{"error":"인증이 필요합니다"}`
