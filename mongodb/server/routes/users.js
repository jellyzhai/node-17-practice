var express = require("express");
var router = express.Router();

const UserModel = require("../model/UserModel");
const UserController = require("../controllers/userController");

router.post("/user", UserController.add);

router.put("/user/:id", UserController.update);

router.delete("/user/:id", UserController.delete);

module.exports = router;
