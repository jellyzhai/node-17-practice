const fs = require("fs");
const path = require("path");
const UserModel = require("../model/UserModel");
const UserService = require("../services/userService");
const JWT = require("../utils/jwt");

const UserController = {
  registry: (req, res) => {
    let { filename } = req.file || {};
    const avatar = filename ? `/uploads/${filename}` : "/images/default.jpg";
    const { username, password, age } = req.body;

    console.log("req.body: ", req.body);

    UserService.add(username, password, age, avatar)
      .then((data) => {
        const token = JWT.sign({ password, username }, "1h");

        res.header("authorization", token);
        res.send({ ok: 1 });
      })
      .catch(() => res.send({ ok: 0 }));
  },
  add: (req, res) => {
    let { filename } = req.file || {};
    const avatar = filename ? `/uploads/${filename}` : "/images/default.jpg";
    const { username, password, age } = req.body;

    UserService.add(username, password, age, avatar)
      .then((data) => {
        res.send({ ok: 1 });
      })
      .catch(() => res.send({ ok: 0 }));
  },
  get: (req, res) => {
    let { pageNum, limitCount } = req.query;

    pageNum = pageNum || 1;
    limitCount = limitCount || Infinity;

    UserService.get(pageNum, limitCount)
      .then((data) => {
        res.send(data);
      })
      .catch(() => res.send([]));
  },
  update: (req, res) => {
    UserService.update(req)
      .then((data) => {
        res.send({ ok: 1 });
      })
      .catch(() => res.send({ ok: 0 }));
  },
  delete: (req, res) => {
    const { avatar } = req.query;

    if (avatar.includes("uploads")) {
      fs.rm(path.resolve(__dirname, "../public/" + avatar), (err) => {
        console.log(err);
      });
    }

    UserService.delete(req)
      .then((data) => {
        res.send({ ok: 1 });
      })
      .catch(() => res.send({ ok: 0 }));
  },
  loginPage: (req, res) => {
    res.render("login");
  },
  login: async (req, res) => {
    const { username, password } = req.body;

    const userInfo = await UserModel.findOne({ username, password });

    if (userInfo) {
      const token = JWT.sign({ password, username: userInfo.username }, "1h");

      res.header("authorization", token);
      res.send({ ok: 1 });
    } else {
      res.send({ ok: 0 });
    }
  },
};

module.exports = UserController;
