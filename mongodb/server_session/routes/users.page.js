var express = require("express");
var router = express.Router();

const UserController = require("../controllers/userController");

/* GET users listing. */
router.get("/", UserController.getUserPage);

module.exports = router;
