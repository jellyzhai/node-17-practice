const express = require('express')

const router = express.Router()

const userApiRouter = require('./user.api')
const loginApiRouter = require("./login.api");

router.use("/login", loginApiRouter);

router.use("/user", userApiRouter);

router.use((req, res) => {
    res.status(404).send(`请求的 api 接口 ${req.originalUrl} 不存在`)
})

module.exports = router