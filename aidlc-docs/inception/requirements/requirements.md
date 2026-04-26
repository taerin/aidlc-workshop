# TODO List Web Application — Requirements

## Intent Analysis

- **User Request**: TODO List webapp 개발 (AI-DLC 워크플로우 사용)
- **Request Type**: New Project (Greenfield)
- **Scope Estimate**: Multiple Components (Frontend + Backend + DB)
- **Complexity Estimate**: Moderate
- **Project Purpose**: Prototype / PoC

## Functional Requirements

### FR-1: 사용자 인증
- FR-1.1: 이메일/비밀번호 기반 회원가입
- FR-1.2: 이메일/비밀번호 기반 로그인
- FR-1.3: 로그아웃
- FR-1.4: 인증된 사용자만 TODO 데이터 접근 가능

### FR-2: TODO CRUD
- FR-2.1: 새 TODO 항목 추가 (제목 필수)
- FR-2.2: TODO 목록 조회 (로그인한 사용자의 항목만)
- FR-2.3: TODO 항목 수정 (제목 편집)
- FR-2.4: TODO 항목 삭제

### FR-3: TODO 상태 관리
- FR-3.1: TODO 완료/미완료 상태 토글
- FR-3.2: 완료된 항목 시각적 구분 (취소선 등)

### FR-4: TODO 필터링
- FR-4.1: 전체 항목 보기
- FR-4.2: 완료된 항목만 보기
- FR-4.3: 미완료 항목만 보기

## Non-Functional Requirements

### NFR-1: 기술 스택
- **Frontend**: React + shadcn/ui + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: SQLite (PoC에 적합한 경량 DB)
- **Authentication**: JWT 기반 토큰 인증

### NFR-2: UI/UX
- 미니멀 디자인
- 반응형 레이아웃 (기본 수준)

### NFR-3: 프로젝트 특성
- PoC/프로토타입 수준
- Must-have 기능에 집중
- 보안 확장 규칙 미적용
- Property-Based Testing 미적용

## Out of Scope (향후 고려)
- 우선순위, 카테고리/태그
- 마감일, 알림, 검색, 정렬
- 소셜 로그인
- 다크모드
- 프로덕션 배포 설정
