const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    const urlInfo = url.parse(req.url);
    if (urlInfo.pathname === "/api/user/list") {
        res.writeHead(200, {
            "content-type": "application/json; charset=utf-8",

            // 使用 cors 跨站资源共享 响应头 解决跨域
            "access-control-allow-origin": "*",
        });

        // 只能返回 字符串 或 buffer 实例
        res.end(`
            [{ "name": "jelly", "age": 30 }, { "name": "marry", "age": 18 }]
        `);
    }
});

server.listen(3000, () => {
    console.log("服务器启动成功");
});
