const path = require("path");
const fs = require("fs");

const dirPath = path.resolve(__dirname, "./public");

fs.readdir(dirPath, (err, fileNameArr) => {
  if (err) {
    console.log(err);
    return;
  }
  fileNameArr.forEach((name) => {
    const filePath = path.resolve(__dirname, `./public/${name}`);

    try {
      fs.rmSync(filePath, { recursive: true });
    } catch (error) {
      console.log(err);
    }
  });

  fs.rm(dirPath, { recursive: true }, (err) => {
    console.log(err);
  });
});
