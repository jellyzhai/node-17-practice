var express = require("express");
var router = express.Router();

const UserController = require("../controllers/userController");

router.get("/", UserController.loginPage);

module.exports = router;
