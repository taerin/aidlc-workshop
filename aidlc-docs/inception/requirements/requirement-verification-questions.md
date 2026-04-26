# 요구사항 확인 질문

아래 질문에 답변해 주세요. 각 질문의 `[Answer]:` 태그 뒤에 선택한 알파벳을 입력해 주세요.
선택지 중 맞는 것이 없으면 마지막 옵션(Other)을 선택하고 설명을 추가해 주세요.

## Question 1
TODO List의 주요 기능 범위는 어떻게 되나요?

A) 기본 CRUD만 (할 일 추가, 조회, 수정, 삭제)
B) 기본 CRUD + 완료 상태 토글 + 필터링 (전체/완료/미완료)
C) 기본 CRUD + 완료 상태 + 필터링 + 우선순위 + 카테고리/태그
D) 풀 기능 (위 모든 것 + 마감일, 알림, 검색, 정렬 등)
X) Other (please describe after [Answer]: tag below)

[Answer]: B

## Question 2
프론트엔드 기술 스택은 무엇을 사용하고 싶으신가요?

A) React (가장 널리 사용되는 UI 라이브러리)
B) Vue.js (쉬운 학습 곡선, 직관적인 API)
C) Vanilla JavaScript/HTML/CSS (프레임워크 없이 순수 웹 기술)
D) Next.js (React 기반 풀스택 프레임워크)
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 3
백엔드/데이터 저장 방식은 어떻게 하고 싶으신가요?

A) 브라우저 로컬 스토리지만 사용 (서버 없음, 단일 기기)
B) 간단한 백엔드 API + 데이터베이스 (Node.js/Express + SQLite 등)
C) 서버리스 (AWS Lambda + DynamoDB 등 클라우드 서비스)
D) Firebase/Supabase 같은 BaaS (Backend as a Service)
X) Other (please describe after [Answer]: tag below)

[Answer]: B

## Question 4
사용자 인증(로그인) 기능이 필요한가요?

A) 필요 없음 (누구나 접근 가능한 단일 사용자 앱)
B) 간단한 로그인 (이메일/비밀번호)
C) 소셜 로그인 포함 (Google, GitHub 등)
D) 인증 없이 시작하되, 나중에 추가할 수 있는 구조로
X) Other (please describe after [Answer]: tag below)

[Answer]: B

## Question 5
이 프로젝트의 목적은 무엇인가요?

A) 학습/포트폴리오 목적 (기본적인 기능에 집중)
B) 개인 사용 목적 (실제로 사용할 앱)
C) 프로토타입/PoC (아이디어 검증용)
D) 프로덕션 배포 예정 (다수 사용자 대상)
X) Other (please describe after [Answer]: tag below)

[Answer]: C

## Question 6
UI/UX 디자인에 대한 선호가 있나요?

A) 심플하고 깔끔한 미니멀 디자인
B) Material Design 스타일 (Google 스타일)
C) 특별한 선호 없음 (기본적인 스타일링이면 충분)
D) 다크모드 지원 포함한 모던 디자인
X) Other (please describe after [Answer]: tag below)

[Answer]: A (shadcn/ui + Tailwind CSS 사용)

## Question: Security Extensions
이 프로젝트에 보안 확장 규칙을 적용할까요?

A) Yes — 모든 보안 규칙을 blocking constraint로 적용 (프로덕션급 애플리케이션에 권장)
B) No — 보안 규칙 건너뛰기 (PoC, 프로토타입, 실험적 프로젝트에 적합)
X) Other (please describe after [Answer]: tag below)

[Answer]: B

## Question: Property-Based Testing Extension
이 프로젝트에 Property-Based Testing(PBT) 규칙을 적용할까요?

A) Yes — 모든 PBT 규칙을 blocking constraint로 적용 (비즈니스 로직, 데이터 변환, 직렬화, 상태 관리 컴포넌트가 있는 프로젝트에 권장)
B) Partial — 순수 함수와 직렬화 round-trip에만 PBT 규칙 적용 (알고리즘 복잡도가 제한적인 프로젝트에 적합)
C) No — 모든 PBT 규칙 건너뛰기 (단순 CRUD 앱, UI 전용 프로젝트, 비즈니스 로직이 거의 없는 프로젝트에 적합)
X) Other (please describe after [Answer]: tag below)

[Answer]: C
