![Lunaria Header](https://capsule-render.vercel.app/api?type=waving&color=gradient&text=Lunaria&fontSize=40&fontAlign=50&fontAlignY=50&desc=Developer%20Guide&descAlign=70&descAlignY=60&height=200)

# 👨‍💻 Lunaria Bot 開発者ガイド

Lunaria Botの開発者ガイドへようこそ！このドキュメントでは、セットアップ、カスタマイズ、コントリビュート方法について説明します。

---

## 📂 **プロジェクト構成**
```plaintext
lunaria-bot/
├── src/
│   ├── commands/       # ボット用のコマンドモジュール
│   ├── events/         # イベントハンドラー（例: メッセージ作成、サーバー参加）
│   ├── utils/          # ユーティリティ関数（例: ロギング、データベース操作）
│   ├── bot.js          # ボットのメインエントリーポイント
│   └── config.json     # 設定ファイル
├── .env                # 環境変数
├── package.json        # Node.js 依存関係
├── README.md           # プロジェクト概要
├── LICENSE             # ライセンス情報
└── developer_guide.md  # このガイド
```

---

## 🚀 **セットアップ方法**

1. **リポジトリをクローン**:
   ```bash
   git clone https://github.com/your-repo/lunaria-bot.git
   cd lunaria-bot
   ```

2. **依存関係をインストール**:
   ```bash
   npm install
   ```

3. **環境変数を設定**:
   `.env` ファイルを作成し、以下を追加してください:
   ```plaintext
   DISCORD_TOKEN=your_discord_bot_token
   CLIENT_ID=your_client_id
   MONGO_URI=your_mongo_database_uri
   ```

4. **ボットを起動**:
   ```bash
   npm start
   ```

---

## 🛠️ **主なファイルと役割**

- **`src/bot.js`**: ボットのメインエントリーポイント。
- **`src/commands/`**: コマンドモジュール（例: `fun.js`、`admin.js`）。
- **`src/events/`**: ボットのアクション用イベントリスナー（例: `ready.js`、`messageCreate.js`）。
- **`src/utils/`**: ログ管理やデータベース操作用のユーティリティ関数。

---

## 🌟 **コントリビューション**

1. リポジトリをフォークし、新しいブランチを作成します:
   ```bash
   git checkout -b feature/new-feature
   ```

2. 変更を加え、十分にテストしてください。

3. 変更内容を明確に記述したプルリクエストを送信してください。

---

## 🧪 **テスト**

開発には `nodemon` を使用します:
```bash
npm run dev
```

コマンドのテスト例:
```bash
!ping
```

---

## 📜 **ライセンス**
このプロジェクトは MIT ライセンスのもとで提供されています。

---

![Lunaria Footer](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer)
