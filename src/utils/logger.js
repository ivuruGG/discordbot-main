const { createLogger, format, transports } = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

// フォーマットの設定
const logFormat = format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(info => `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`)
);

// ロガーの作成
const logger = createLogger({
    level: 'info', // デフォルトのログレベル
    format: logFormat,
    transports: [
        new transports.Console({ // コンソール出力
            format: format.combine(
                format.colorize(), // 色をつける
                logFormat
            ),
        }),
        new DailyRotateFile({ // ファイル出力 (日ごとにローテーション)
            filename: 'logs/%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true, // 古いログをZIP圧縮
            maxSize: '20m', // 最大サイズ
            maxFiles: '14d' // 保存期間
        })
    ],
    exitOnError: false, // エラー発生時に終了しない
});

// 開発環境向けの設定
if (process.env.NODE_ENV === 'development') {
    logger.add(new transports.Console({
        format: format.combine(
            format.colorize(),
            logFormat
        )
    }));
}

module.exports = logger;
