const express = require('express')

const router = express.Router()

const apiRouter = require('./api')

router.use('/home', (req, res) => {
    res.send("home page");
})

router.use('/login', (req, res) => {
    res.send("login page");
})

router.use('/api', apiRouter)

// 重定向的路径匹配，要放到最后，放到前面会报错
router.use((req, res) => {
    res.redirect("/home");
})

module.exports = router