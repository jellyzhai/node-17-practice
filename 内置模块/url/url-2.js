const http = require("http");
const url = require('url')

url.f

const ulrArr = ["/home", "/list", "/api/home", "/api/list"];
const contentType = { "Content-Type": "text/html; charset=utf-8" };

http
  .createServer((req, res) => {
    /*
      req.url -> /home?address=newYork
     */
    const newUrl = new URL(req.url, 'http://127.0.0.1:3000');
    const { pathname, searchParams } = newUrl;
    if (pathname === "/favicon.ico") {
      return;
    }

    console.log(newUrl);

    if (!ulrArr.includes(pathname)) {
      res.writeHead(404, contentType);
    } else {
      res.writeHead(200, contentType);
    }

    res.end(getContentByUrl(pathname, searchParams));
  })
  .listen(3000, () => {
    console.log("服务器启动成功：http://127.0.0.1:3000");
  });

  function getContentByUrl(url, searchParams) {
    switch (url) {
      case "/home":
        return `<h1>home</h1><pre>${searchParams}</pre>`;
      case "/list":
        return `<h1>list</h1><pre>${searchParams}</pre>`;
      case "/api/home":
        return `<h1>name: jelly</h1><pre>${searchParams}</pre>`;
      case "/api/list":
        return searchParams ? `<pre>${searchParams}</pre>` : "[1,2,3]";

      default:
        return "<h1>404 not found</h1>";
    }
  }