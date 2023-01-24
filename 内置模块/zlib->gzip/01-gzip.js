const http = require("http");
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const gzip = zlib.createGzip();

http
  .createServer((req, res) => {
    // res 相应对象 是一个 可写流

    const filePath = path.resolve(__dirname, "./index.html");
    const readStream = fs.createReadStream(filePath, "utf-8");

    res.writeHead(200, {
      "content-type": "text/html; charset=utf-8",

    //   指定内容压缩方式
      "content-encoding": "gzip",
    });
    readStream.pipe(gzip).pipe(res);
  })
  .listen(3000, () => {
    console.log("服务器创建成功：http://127.0.0.1:3000");
  });
