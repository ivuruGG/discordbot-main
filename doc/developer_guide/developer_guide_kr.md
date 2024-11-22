![Lunaria Header](https://capsule-render.vercel.app/api?type=waving&color=gradient&text=Lunaria&fontSize=40&fontAlign=50&fontAlignY=50&desc=Developer%20Guide&descAlign=70&descAlignY=60&height=200)

# 👨‍💻 Lunaria Bot 개발자 가이드

Lunaria Bot 개발자 가이드에 오신 것을 환영합니다! 이 문서는 설정, 사용자 정의 및 기여 방법을 안내합니다.

---

## 📂 **프로젝트 구조**
```plaintext
lunaria-bot/
├── src/
│   ├── commands/       # 봇 명령어 모듈
│   ├── events/         # 이벤트 핸들러 (예: 메시지 생성, 서버 가입)
│   ├── utils/          # 유틸리티 함수 (예: 로깅, 데이터베이스)
│   ├── bot.js          # 봇의 메인 진입점
│   └── config.json     # 설정 파일
├── .env                # 환경 변수
├── package.json        # Node.js 종속성
├── README.md           # 프로젝트 개요
├── LICENSE             # 라이선스 정보
└── developer_guide.md  # 이 가이드
```

---

## 🚀 **시작하기**

1. **리포지토리 클론**:
   ```bash
   git clone https://github.com/your-repo/lunaria-bot.git
   cd lunaria-bot
   ```

2. **종속성 설치**:
   ```bash
   npm install
   ```

3. **환경 변수 설정**:
   `.env` 파일을 생성하고 다음을 추가하세요:
   ```plaintext
   DISCORD_TOKEN=your_discord_bot_token
   CLIENT_ID=your_client_id
   MONGO_URI=your_mongo_database_uri
   ```

4. **봇 실행**:
   ```bash
   npm start
   ```

---

## 🛠️ **주요 파일 및 역할**

- **`src/bot.js`**: 봇의 메인 진입점.
- **`src/commands/`**: 명령어 모듈 (예: `fun.js`, `admin.js`).
- **`src/events/`**: 봇 동작 이벤트 리스너 (예: `ready.js`, `messageCreate.js`).
- **`src/utils/`**: 로깅 및 데이터베이스 작업용 유틸리티 함수.

---

## 🌟 **기여하기**

1. 리포지토리를 포크하고 새 브랜치를 만드세요:
   ```bash
   git checkout -b feature/new-feature
   ```

2. 변경 사항을 적용하고 철저히 테스트하세요.

3. 변경 내용을 명확히 설명한 풀 리퀘스트를 제출하세요.

---

## 🧪 **테스트**

개발에는 `nodemon`을 사용합니다:
```bash
npm run dev
```

명령어 테스트 예:
```bash
!ping
```

---

## 📜 **라이선스**
이 프로젝트는 MIT 라이선스 하에 제공됩니다.

---

![Lunaria Footer](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer)

npm run dev
```

명령어 테스트 예:
```bash
!ping
```

---

## 📜 **라이선스**
이 프로젝트는 MIT 라이선스 하에 제공됩니다.

---

![Lunaria Footer](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer)
