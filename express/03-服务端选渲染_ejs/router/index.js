const express = require("express");

const router = express.Router();

const apiRouter = require("./api");
const pageRouter = require("./page");

router.use("/api", apiRouter);

router.use("/", pageRouter);

// 重定向的路径匹配，要放到最后，放到前面会报错
router.use((req, res) => {
  res.send("路径不存在");
  // res.redirect("/home");
});

module.exports = router;
