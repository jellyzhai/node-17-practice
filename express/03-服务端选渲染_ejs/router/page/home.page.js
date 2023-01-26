const express = require('express')

const router = express.Router()

router.get("/", (req, res) => {
  const list = ['aaaa', 'bbbb', 'cccc', 'dddd']
  // 会自动到 根目录的 views 文件夹中 寻找 home.ejs 渲染模板
  res.render("home", { list });

  //   返回 标签片段 & JSON
  //   res.send("login page");

  //   只能返回 JSON
  //   res.json([123, 456]);
});

module.exports = router;