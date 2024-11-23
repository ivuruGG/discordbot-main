require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const { Pool } = require('pg'); // PostgreSQL 用モジュール
const fs = require('fs');
const path = require('path');
const logger = require('./utils/logger'); // ロガーの読み込み

// 環境変数の確認 (デバッグ用)
logger.info('環境変数のロードを開始します。');
console.log(`DISCORD_TOKEN: ${process.env.DISCORD_TOKEN}`);
logger.info(`DB_USER: ${process.env.DB_USER}`);
logger.info(`DB_PASSWORD: ${process.env.DB_PASSWORD}`);
logger.info(`DB_HOST: ${process.env.DB_HOST}`);
logger.info(`DB_NAME: ${process.env.DB_NAME}`);
logger.info(`DB_PORT: ${process.env.DB_PORT}`);

// データベース接続設定
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT, 10) || 5433,
});

// Discord クライアントの作成
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

// コマンドのコレクション
client.commands = new Collection();

// コマンドファイルを読み込む
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if (command.data && command.execute) {
        client.commands.set(command.data.name, command);
    } else {
        logger.warn(`コマンドファイル ${file} は "data" または "execute" プロパティを欠いています。`);
    }
}

// ボット起動時イベント
client.once('ready', async () => {
    logger.info(`${client.user.tag} としてログインしました！`);
    try {
        const res = await pool.query('SELECT NOW()');
        logger.info(`データベース接続に成功しました: ${res.rows[0].now}`);
    } catch (err) {
        logger.error(`データベース接続エラー: ${err.message}`);
    }
});

// メッセージイベント
client.on('messageCreate', async (message) => {
    logger.info(`メッセージを受信: ${message.content}`);
    if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;

    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);
    if (!command) return;

    try {
        await command.execute(message, args, pool);
        logger.info(`コマンド "${commandName}" が実行されました。`);
    } catch (error) {
        logger.error(`コマンド実行エラー: ${error.message}`);
        message.reply('⚠️ コマンドの実行中にエラーが発生しました。');
    }
});

// エラーハンドリング
client.on('error', (error) => {
    logger.error(`Discord 接続エラー: ${error.message}`);
});

// ボットのトークンを使用してログイン
client.login(process.env.DISCORD_TOKEN);
