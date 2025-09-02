# 🏌️ SmartScore - 골프 스코어 관리 시스템

골프 라운드의 스코어와 성과를 체계적으로 관리하고 분석할 수 있는 현대적인 웹 애플리케이션입니다.

## ✨ 주요 기능

### 🎯 라운드 기록
- **기본 정보**: 골프장명, 날짜, 동반자 정보
- **홀별 기록**: 18홀 각각의 상세 스코어 기록
- **KPI 체크**: Regular On, 2 Putt 여부 체크
- **클럽 사용**: 드라이버, 아이언, 퍼터별 사용 내역과 결과

### 📊 통계 및 분석
- **전체 통계**: 총 라운드 수, 평균 스코어, 최고/최저 스코어
- **성과 분석**: Regular On %, 2 Putt % 추이
- **차트 시각화**: 
  - 라운드별 스코어 추이 (선 그래프)
  - Regular On & 2 Putt 추이 (영역 그래프)
  - 홀별 성과 분석 (막대 그래프)
  - 클럽 사용 결과 분포 (파이 차트)
- **클럽 사용 통계**: 가장 많이 사용한 클럽 순위

### 🔍 검색 및 필터링
- **골프장별 필터링**: 특정 골프장의 라운드만 조회
- **동반자별 필터링**: 특정 동반자와의 라운드 조회
- **다양한 정렬**: 날짜, 스코어, Regular On, 2 Putt 기준 정렬
- **실시간 검색**: 골프장명 또는 동반자명으로 검색

## 🚀 시작하기

### 필수 요구사항
- Node.js 16.0.0 이상
- npm 8.0.0 이상

### 설치 및 실행

1. **의존성 설치**
   ```bash
   npm install
   ```

2. **개발 서버 실행**
   ```bash
   npm run dev
   ```

3. **브라우저에서 확인**
   ```
   http://localhost:5173
   ```

### 빌드
```bash
npm run build
```

## 🛠️ 기술 스택

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Charts**: Recharts
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Styling**: CSS3 (Glassmorphism 디자인)

## 📱 반응형 디자인

- **데스크톱**: 최적화된 그리드 레이아웃
- **태블릿**: 적응형 컴포넌트 배치
- **모바일**: 터치 친화적 인터페이스

## 💾 데이터 저장

- **로컬 스토리지**: 브라우저에 데이터 자동 저장
- **실시간 동기화**: 입력 즉시 저장 및 업데이트
- **데이터 백업**: 브라우저 데이터 내보내기/가져오기 지원

## 🎨 UI/UX 특징

- **Glassmorphism**: 현대적이고 세련된 디자인
- **그라데이션**: 골프 테마에 맞는 색상 구성
- **애니메이션**: 부드러운 전환 효과와 호버 애니메이션
- **직관적 인터페이스**: 사용하기 쉬운 폼과 차트

## 🔧 커스터마이징

### 색상 테마 변경
`src/App.css`와 각 컴포넌트 CSS 파일에서 CSS 변수를 수정하여 색상 테마를 변경할 수 있습니다.

### 차트 스타일 수정
`src/components/Statistics.css`에서 Recharts 관련 스타일을 수정하여 차트의 외관을 변경할 수 있습니다.

## 📈 향후 개발 계획

- [ ] 사용자 계정 시스템
- [ ] 클라우드 데이터 동기화
- [ ] 골프장 정보 데이터베이스
- [ ] AI 기반 스코어 예측
- [ ] 모바일 앱 버전
- [ ] 소셜 기능 (친구와 스코어 공유)

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 문의

프로젝트에 대한 질문이나 제안사항이 있으시면 이슈를 등록해 주세요.

---

**SmartScore**로 골프 실력을 체계적으로 관리하고 향상시켜 보세요! 🏌️⛳
