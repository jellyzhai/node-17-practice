const path = require('path')
const fs = require('fs')

const filePath = path.resolve(__dirname, './test.txt')

// 每次执行 都会向 原文件中追加内容
fs.appendFile(filePath, '\n你好世界', err => console.log(err))