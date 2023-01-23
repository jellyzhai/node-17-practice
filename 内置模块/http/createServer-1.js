const http = require("http");

http
  .createServer((req, res) => {
    // res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    // res.write("hello\r");
    // res.write("世界1");
    // res.end();

    // res.setHeader('content-type', 'text/plain; charset=utf-8')
    res.setHeader("content-type", "text/html; charset=utf-8");

    res.end(`
        <h1>hello 世界2</h1>
        `);
    // 只能返回 字符串 或 Buffer or Uint8Array 的 实例
    // res.end('[1,2,4]')
  })
  .listen(3000, () => {
    console.log("服务器启动成功：http://127.0.0.1:3000");
  });
