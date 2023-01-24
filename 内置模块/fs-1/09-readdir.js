const path = require("path");
const fs = require("fs");

const dirPath = path.resolve(__dirname, "./public");

fs.readdir(dirPath, (err, fileNameArr) => {
  if (err) {
    console.log(err);
    return;
  }
  fileNameArr.forEach((name) => {
    const filePath = path.resolve(__dirname, `./public/${name}`)

    fs.stat(filePath, (err, file) => {
      if (file.isFile()) {
        fs.rm(filePath, err => console.log(err));
      }
    });
  });

//   即使加了定时器，也有可能 上面的文件 没有删除完成，当前删除文件夹的代码 就执行了，导致报错
  setTimeout(() => {
    fs.rm(dirPath, (err) => {
      console.log(err);
    });
  }, 1000);
});
