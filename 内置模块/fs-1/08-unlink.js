const path = require("path");
const fs = require("fs");

const filePath = path.resolve(__dirname, "./test.txt");

// 效果和 rm  一样， 但只能删除文件，不能删除文件夹
fs.unlink(filePath, (err) => {
  console.log(err);
});

// fs.rm(filePath, (err) => {
//   console.log(err);
// });
