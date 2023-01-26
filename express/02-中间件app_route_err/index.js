const express = require("express");

// app 本身是个函数
const app = express()

const router = require('./router')

// 配置静态资源目录 可以直接访问：http://127.0.0.1:3000/home.html
app.use(express.static('public'))
// 以下配置 访问时 为：http://127.0.0.1:3000/static/list.html
app.use('/static', express.static('static'))

// 支持客户端 跨域请求，中间件函数执行后，需要调用 next 执行后面的中间件函数
app.use((req, res, next) => {
  res.setHeader("access-control-allow-origin", "*");
  next();
})

/*
    该中间件，只能解析请求头为 content-type: application/x-www-form-urlencoded 的post请求体数据：
    username=jelly&password=123123
*/
app.use(express.urlencoded({extended: true}))

/*
    解析 请求头为 content-type: application/json 的post请求体数据：
    {"name":"QWE","password":"QWE"}
*/
app.use(express.json())

// 使用 use 和 get post 等请求方法，挂载到 应用app 上的函数，都是应用级中间件
app.use('/', router)

// 错误中间件 放到最后，兜底处理，其他中间件 都匹配不到时，才执行
app.use((req, res) => {
    // res.status(404).send('Not Found')
    // 与 上面代码 等价
    res.sendStatus(404)
})

app.listen(3000, () => {
    console.log("服务器启动成功：http://127.0.0.1:3000");
})