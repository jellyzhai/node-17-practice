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
  get: (req, res) => {
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
};

module.exports = UserController;
