const UserModel = require("../model/UserModel");
const UserService = require("../services/userService");

const UserController = {
  add: (req, res) => {
    const { username, password, age } = req.body;

    UserService.add(username, password, age)
      .then((data) => {
        res.send({ ok: 1 });
      })
      .catch(() => res.send({ ok: 0 }));
  },
  getUserPage: (req, res) => {
    const limitCountArr = [Infinity, 2, 4, 6];
    let { pageNum, limitCount } = req.query;

    pageNum = pageNum || 1;
    limitCount = limitCount || Infinity;

    UserService.get(pageNum, limitCount)
      .then((data) => {
        res.render("users", { data, pageNum, limitCount, limitCountArr });
      })
      .catch(() => res.send("获取用户列表失败"));
  },
  update: (req, res) => {
    UserService.update(req)
      .then((data) => {
        res.send({ ok: 1 });
      })
      .catch(() => res.send({ ok: 0 }));
  },
  delete: (req, res) => {
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

      // 不同用户登陆时， res.session 是不同的对象，会根据客户端带来的cookie 自动匹配 对应 session
      req.session.user = userInfo
      res.send({ ok: 1 })
    } else {
      res.send({ ok: 0 })
    }
  },
  logout: (req, res) => {
    // 会把手动添加的数据，从数据库中删除
    req.session.destroy(() => {
      res.send({ok: 1})
    })
  }
};

module.exports = UserController;
