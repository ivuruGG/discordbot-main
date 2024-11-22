![Lunaria Header](https://capsule-render.vercel.app/api?type=waving&color=gradient&text=Lunaria&fontSize=40&fontAlign=50&fontAlignY=50&desc=Developer%20Guide&descAlign=70&descAlignY=60&height=200)

# 👨‍💻 Developer Guide for Lunaria Bot

Welcome to the Lunaria Bot Developer Guide! This document will guide you through setting up, customizing, and contributing to the Lunaria Bot.

---

## 📂 **Project Structure**
```plaintext
lunaria-bot/
├── src/
│   ├── commands/       # Command modules for the bot
│   ├── events/         # Event handlers (e.g., message creation, guild join)
│   ├── utils/          # Utility functions (e.g., logging, database)
│   ├── bot.js          # Main entry point for the bot
│   └── config.json     # Configuration settings
├── .env                # Environment variables
├── package.json        # Node.js dependencies
├── README.md           # Project overview
├── LICENSE             # License information
└── developer_guide.md  # This guide
```

---

## 🚀 **Getting Started**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/lunaria-bot.git
   cd lunaria-bot
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file with the following:
   ```plaintext
   DISCORD_TOKEN=your_discord_bot_token
   CLIENT_ID=your_client_id
   MONGO_URI=your_mongo_database_uri
   ```

4. **Run the bot**:
   ```bash
   npm start
   ```

---

## 🛠️ **Key Files and Their Roles**

- **`src/bot.js`**: The main entry point for the bot.
- **`src/commands/`**: Contains command modules (e.g., `fun.js`, `admin.js`).
- **`src/events/`**: Event listeners for bot actions (e.g., `ready.js`, `messageCreate.js`).
- **`src/utils/`**: Utility functions for logging and database operations.

---

## 🌟 **Contributing**

1. Fork the repository and create a new branch:
   ```bash
   git checkout -b feature/new-feature
   ```

2. Make your changes and test thoroughly.

3. Submit a pull request with a clear description of your changes.

---

## 🧪 **Testing**

Use `nodemon` for development:
```bash
npm run dev
```

For testing commands, use:
```bash
!ping
```

---

## 📜 **License**
This project is licensed under the MIT License.

---

![Lunaria Footer](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer)
