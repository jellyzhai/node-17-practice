const UserModel = require("../model/UserModel");

const UserService = {
  add: (username, password, age) => {
    // UserModel 集合的方法 create find update delete, 返回promise
    return UserModel.create({ username, password, age });
  },
  get: (pageNum, limitCount) => {
    return UserModel.find({}, ["id", "username", "age", "password"])
      .skip((pageNum - 1) * limitCount)
      .limit(limitCount)
      .sort({ age: 1 });
  },
  update: (req) => {
    return UserModel.updateOne({ _id: req.params.id }, { $inc: { age: 1 } });
  },
  delete: (req) => {
    return UserModel.deleteOne({ _id: req.params.id });
  },
};

module.exports = UserService;
