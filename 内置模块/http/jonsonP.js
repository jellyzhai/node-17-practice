const http = require('http')
const url = require('url')

http.createServer((req,res) => {
    const urlObj = url.parse(req.url, true)
    const callback = urlObj.query?.callback;

    res.setHeader("content-type", "text/html;charset=utf-8" );
    if (callback) {
        res.end(`${callback}(${JSON.stringify({ name: "jelly", age: 30 })})`);
    } else {
        res.end('当前不是jsonp请求，请传递callback查询参数');
    }

}).listen(3000, () => {
    console.log("服务器启动成功：http://127.0.0.1:3000");
})