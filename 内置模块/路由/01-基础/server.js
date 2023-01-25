const http = require('http')

let router = {}

function use(route) {
    router = {...router, ...route}
}

function start() {
    http
      .createServer((req, res) => {
        const urlObj = new URL(req.url, "http://127.0.0.1:3000");

        try {
          router[urlObj.pathname](res);
        } catch (error) {
          router["/404"](res);
        }
      })
      .listen(3000, () => {
        console.log("服务器启动成功：http://127.0.0.1:3000");
      });
}

exports.start = start;
exports.use = use;