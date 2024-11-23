const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ログ用の設定（オプション）
console.log(`🌟 Dashboard server is starting...`);

// 静的ファイルの提供
app.use(express.static(path.join(__dirname, '../public')));

// すべてのルートで `index.html` を返す設定
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

// サーバー起動
app.listen(PORT, () => {
    console.log(`🌟 Dashboard is running at http://localhost:${PORT}`);
});
