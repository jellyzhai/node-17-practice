const express = require('express')

const router = express.Router()

const loginPageRouter = require("./login.page");
const homePageRouter = require("./home.page");

router.use("/login", loginPageRouter);

router.use("/home", homePageRouter);

router.use((req, res) => {
    res.status(404).send(`请求的 api 接口 ${req.originalUrl} 不存在`)
})

module.exports = router