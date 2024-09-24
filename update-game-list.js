const fs = require('fs');
const path = require('path');

// 读取当前目录
const currentDir = process.cwd();

// 获取所有子目录（假设每个子目录都是一个游戏）
const gameDirectories = fs.readdirSync(currentDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .filter(name => name !== 'node_modules' && name !== '.git' && name !== '.github'); // 排除 node_modules, .git 和 .github 目录

// 生成新的游戏列表 HTML
const gameListHtml = gameDirectories.map(game => {
  const gameTitle = game.charAt(0).toUpperCase() + game.slice(1); // 首字母大写
  return `        <div class="game-item"><a href="${game}/">${gameTitle}</a></div>`;
}).join('\n');

// 创建完整的 HTML 内容
const newHtmlContent = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Magape Games</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            text-align: center;
        }
        .game-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
        }
        .game-item {
            background-color: #f0f0f0;
            padding: 15px;
            border-radius: 5px;
            text-align: center;
        }
        .game-item a {
            text-decoration: none;
            color: #333;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Magape Games</h1>
    <div class="game-list">
${gameListHtml}
    </div>
</body>
</html>`;

// 写入更新后的内容到 index.html
const indexPath = path.join(currentDir, 'index.html');
fs.writeFileSync(indexPath, newHtmlContent, 'utf-8');

console.log('游戏列表已更新');