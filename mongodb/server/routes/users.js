var express = require("express");
var router = express.Router();

const UserController = require("../controllers/userController");

router.post("/user", UserController.add);

router.put("/user/:id", UserController.update);

router.delete("/user/:id", UserController.delete);

router.post("/login", UserController.login);

module.exports = router;
