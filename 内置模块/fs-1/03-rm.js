const path = require("path");
const fs = require("fs");

const filePath = path.resolve(__dirname, "./public");

// 当删除文件夹时，需要添加第二个对象参数 , {recursive: true}
fs.rm(filePath, { recursive: true }, (err) => console.log(err));
