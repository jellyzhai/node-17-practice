var express = require("express");
const UserModel = require("../model/UserModel");
var router = express.Router();

/* GET users listing. */
router.get("/list", (req, res) => {
  const limitCountArr = [Infinity, 2, 4, 6];
  let { pageNum, limitCount } = req.query;
  pageNum = pageNum || 1;
  limitCount = limitCount || Infinity;
  console.log(limitCount);

  UserModel.find({}, ["id", "username", "age"])
    .skip((pageNum - 1) * limitCount)
    .limit(limitCount)
    .sort({ age: 1 })
    .then((data) => {
      res.render("users", { data, pageNum, limitCount, limitCountArr });
    });
});

module.exports = router;
