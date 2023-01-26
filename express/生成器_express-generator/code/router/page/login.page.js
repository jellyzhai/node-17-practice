const express = require('express')

const router = express.Router()

router.get("/", (req, res) => {
  console.log("login get: ", req.req);

  let error = '';
  const { username='', password='' } = req.query;

  if ((username && username !== "jelly") || (password && password !== "123123")) {
    error = "用户名或密码错误";
  }

  // 会自动到 根目录的 views 文件夹中 寻找 login.ejs 渲染模板
  res.render("login", { username, password, error });

  //   返回 标签片段 & JSON
  //   res.send("login page");

  //   只能返回 JSON
  //   res.json([123, 456]);
});

module.exports = router;