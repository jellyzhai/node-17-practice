const fs = require("fs").promises;
const path = require("path");

const filePath = path.resolve(__dirname, "./public/image");
const aFilePath = path.resolve(__dirname, "./public/a.txt");
const bFilePath = path.resolve(__dirname, "./public/b.txt");

// 需要加上 相对或 绝对路径符号
// 如果需要连续创建多层目录，需要添加第二个参数对象 {recursive: true}
fs.mkdir(filePath, { recursive: true })
  .then(() => {
    return Promise.all([
      fs.writeFile(aFilePath, "1111"),
      fs.writeFile(bFilePath, "2222"),
    ]);
  })
  .catch((err) => {
    console.log(err);
  });
