const path = require('path')
const fs = require('fs')

// 删除空的文件夹
// 如果文件夹中有数据(目录或文件)， 需要添加第二个参数对象 {recursive: true}
// 该 rmdir 在 V14版本中 已提示 将弃用，改用 rm
const dirPath = path.resolve(__dirname, './public')
fs.rmdir(dirPath,  {recursive: true}, err => {
    console.log(err);
})