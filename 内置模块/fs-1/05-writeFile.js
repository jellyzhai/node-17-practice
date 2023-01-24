const path = require('path')
const fs = require('fs')

const filePath = path.resolve(__dirname, './test.txt')

// 每次执行 都会重写全部内容，不会追加
fs.writeFile(filePath, 'hello world2', err => console.log(err))