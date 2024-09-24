const fs = require('fs');
const path = require('path');

// 读取当前目录
const currentDir = process.cwd();

// 获取所有子目录（假设每个子目录都是一个游戏）
const gameDirectories = fs.readdirSync(currentDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .filter(name => name !== 'node_modules'); // 排除 node_modules 目录

// 读取 index.html 文件
const indexPath = path.join(currentDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf-8');

// 生成新的游戏列表 HTML
const gameListHtml = gameDirectories.map(game => {
  const gameTitle = game.charAt(0).toUpperCase() + game.slice(1); // 首字母大写
  return `        <div class="game-item"><a href="${game}/">${gameTitle}</a></div>`;
}).join('\n');

// 替换 index.html 中的游戏列表
const regex = /(<div class="game-list">)([\s\S]*?)(<\/div>)/;
const newContent = indexContent.replace(regex, `$1\n${gameListHtml}\n    $3`);

// 写入更新后的内容到 index.html
fs.writeFileSync(indexPath, newContent, 'utf-8');

console.log('游戏列表已更新');