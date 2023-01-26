const express = require("express");

// app 本身是个函数
const app = express()

const router = require('./router')

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