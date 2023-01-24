const path = require("path");
const fs = require("fs");

const dirPath = path.resolve(__dirname, "../../README.md");

fs.stat(dirPath, (err, file) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(file.isFile());
  console.log(file.isDirectory());
});
