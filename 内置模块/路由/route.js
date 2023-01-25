const fs = require("fs");
const path = require("path");
const mime = require("mime");

const defaultHeader = { "content-type": "text/html; charset=utf-8" };

const handleResponse = (code, res, relativeUrl, header = defaultHeader) => {
  const filePath = path.resolve(__dirname, relativeUrl);
  res.writeHead(code, header);

  // write 第一个参数可以为 string buffer 等, readFileSync 返回 buffer
  res.write(fs.readFileSync(filePath), "utf-8");
  res.end();
};

const route = {
  "/favicon.ico": (req, res) => {
    handleResponse(200, res, "./static/favicon.ico", {
      "content-type": "image/x-icon",
    });
  },
  "/": (req, res) => {
    handleResponse(200, res, "./static/login.html");
  },
  "/home": (req, res) => {
    handleResponse(200, res, "./static/home.html");
  },
  "/login": (req, res) => {
    handleResponse(200, res, "./static/login.html");
  },
  "/404": (req, res) => {
    const urlObj = new URL(req.url, 'http://127.0.0.1:3000')

    // 这里需要把 根路径去掉
    const relativeUrl = urlObj.pathname.startsWith('/') ? urlObj.pathname.slice(1) : urlObj.pathname;

    // 中间加上 static 路径，处理 静态资源文件
    const filePath = path.resolve(__dirname, "static", relativeUrl);

    if (fs.existsSync(filePath)) {

      // 需要安装 mime 包，根据文件类型(扩展名)，获取文件 内容类型，用于响应头
      const contentType = mime.getType(filePath.split(".").at(-1));
      handleResponse(200, res, filePath, { "content-type": contentType });

      return
    }

    handleResponse(404, res, "./static/404.html");
  },
};

module.exports = route;