const fs = require('fs')
const path = require('path')

// 需要加上 相对或 绝对路径符号
// 如果需要连续创建多层目录，需要添加第二个参数对象 {recursive: true}
const filePath = path.resolve(__dirname, './public/image')
fs.mkdir(filePath, { recursive: true }, (err) => {
  console.log(err);
});