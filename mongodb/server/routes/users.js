var express = require("express");
const UserModel = require("../model/UserModel");
var router = express.Router();

router.post("/user", (req, res, next) => {
  const { username, password, age } = req.body;

  // UserModel 集合的方法 create find update delete
  UserModel.create({ username, password, age })
    .then((data) => {
      res.send({ ok: 1 });
    })
    .catch(() => res.send({ok: 0}));
});

router.put("/user/:id", (req, res) => {
  UserModel.updateOne({ _id: req.params.id }, { $inc: { age: 1 } })
    .then((data) => {
      res.send({ ok: 1 });
    })
    .catch(() => res.send({ ok: 0 }));;
});

router.delete("/user/:id", (req, res) => {
  UserModel.deleteOne({ _id: req.params.id })
    .then((data) => {
      res.send({ ok: 1 });
    })
    .catch(() => res.send({ ok: 0 }));
});

module.exports = router;
