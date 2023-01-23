const http = require("http");
const https = require("https");
const url = require("url");

const server = http.createServer((req, res) => {
    const urlInfo = url.parse(req.url);
    if (urlInfo.pathname === "/api/movie/hot") {
        res.writeHead(200, {
            "content-type": "application/json; charset=utf-8",

            // 使用 cors 跨站资源共享 响应头 解决跨域
            "access-control-allow-origin": "*",
        });


        getHotMovieFromMaoYan((data) => {

            // 只能返回 字符串 或 buffer 实例
            res.end(data);
        })
    }
});

server.listen(3000, () => {
    console.log("服务器启动成功");
});

function getHotMovieFromMaoYan(cb) {
    https.get(
      "https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4",
      (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        })
        res.on('end', () => {
            cb(data)
        })
      }
    );
};