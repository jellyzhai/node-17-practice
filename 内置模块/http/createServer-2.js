const http = require("http");

const ulrArr = ["/home", "/list", "/api/home", "/api/list"];
const contentType = { "Content-Type": "text/html; charset=utf-8" };

http
  .createServer((req, res) => {
    if (req.url === "/favicon.ico") {
      return;
    }

    if (!ulrArr.includes(req.url)) {
      res.writeHead(404, contentType);
    } else {
      res.writeHead(200, contentType);
    }
    console.log(req.url);
    res.end(getContentByUrl(req.url));
  })
  .listen(3000, () => {
    console.log("服务器启动成功：http://127.0.0.1:3000");
  });

  function getContentByUrl(url) {
    switch (url) {
      case "/home":
        return "<h1>home</h1>";
      case "/list":
        return "<h1>list</h1>";
      case "/api/home":
        return "<h1>name: jelly</h1>";
      case "/api/list":
        return "[1,2,3]";

      default:
        return "<h1>404 not found</h1>";;
    }
  }