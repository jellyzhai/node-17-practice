const fs = require("fs");
const path = require("path");

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
    handleResponse(200, res, "./static//favicon.ico", {
      "content-type": "image/x-icon",
    });
  },
  "/": (req, res) => {
    handleResponse(200, res, "./static/home.html");
  },
  "/home": (req, res) => {
    handleResponse(200, res, "./static/home.html");
  },
  "/login": (req, res) => {
    handleResponse(200, res, "./static/login.html");
  },
  "/404": (req, res) => {
    handleResponse(404, res, "./static/404.html");
  },
};

module.exports = route;