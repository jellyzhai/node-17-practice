const path = require("path");
const fs = require("fs").promises;

const dirPath = path.resolve(__dirname, "./public");
const imgDirPath = path.resolve(__dirname, "./public/image");

fs.readdir(dirPath)
  .then(async (fileNameArr) => {
    const statPromises = fileNameArr.map((name) => {
      const filePath = path.resolve(__dirname, `./public/${name}`);

      return fs.stat(filePath).then(file => {
        if (file.isFile()) {
          fs.rm(filePath).catch((err) => console.log(err));
        } else {
          fs.rm(imgDirPath, {recursive: true}).catch((err) => console.log(err));
        }
      });
    });

    await Promise.all(statPromises);

    await fs.rm(dirPath, { recursive: true }).then((err) => {
      console.log(err);
    });
  })
  .catch((err) => {
    console.log(err);
  });
