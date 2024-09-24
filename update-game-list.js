const fs = require('fs');
const path = require('path');

// 读取当前目录
const currentDir = process.cwd();

// 获取所有子目录（假设每个子目录都是一个游戏）
const gameDirectories = fs.readdirSync(currentDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .filter(name => name !== 'node_modules' && name !== '.git' && name !== '.github'); // 排除 node_modules, .git 和 .github 目录

// 读取 index.html 文件
const indexPath = path.join(currentDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf-8');

// 删除所有 class="game-item" 的 div 元素
indexContent = indexContent.replace(/<div class="game-item">.*?<\/div>/g, '');

// 生成新的游戏列表 HTML
const gameListHtml = gameDirectories.map(game => {
  const gameTitle = game.charAt(0).toUpperCase() + game.slice(1); // 首字母大写
  return `        <div class="game-item"><a href="${game}/">${gameTitle}</a></div>`;
}).join('\n');

// 在 game-list div 中插入新的游戏列表
const regex = /(<div class="game-list">)([\s\S]*?)(<\/div>)/;
const newContent = indexContent.replace(regex, `$1\n${gameListHtml}\n    $3`);

// 写入更新后的内容到 index.html
fs.writeFileSync(indexPath, newContent, 'utf-8');

console.log('游戏列表已更新');