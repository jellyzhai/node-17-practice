var express = require("express");
const multer = require('multer')

// 设置上传文件的存储位置
const upload = multer({dest: 'public/uploads/'})
var router = express.Router();

const UserController = require("../controllers/userController");

/*
同一个表单字段需要上传多文件
app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  // 会在 req 对象上增加 files 属性，req.files 是 `photos` 文件数组
  // req.body will contain the text fields, if there were any
})

不同表单字段上传不同文件
const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', cpUpload, function (req, res, next) {
  // req.files 是一个对象 (String -> Array)，对象的字段名是 key, 值是 files 数组
  //
  // e.g.
  //  req.files['avatar'][0] -> File
  //  req.files['gallery'] -> Array
  //
  // req.body will contain the text fields, if there were any
})
*/
// 上传的单个文件的名字 avatar 要跟 页面中，表单项 name 属性名一致
router.post("/user", upload.single('avatar'), UserController.add);

router.get("/user", UserController.get);

router.put("/user/:id", UserController.update);

router.delete("/user/:id", UserController.delete);

router.post("/login", UserController.login);

module.exports = router;
