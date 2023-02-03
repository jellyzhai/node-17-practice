// 多次引用同一个实例
const mongoose = require("mongoose");

const  Schema = mongoose.Schema

const UserType = {
  username: String,
  password: String,
  age: Number,
  avatar: String,
};

// 模型 UserModel 将会对应 数据库中的 users(根据下面模型名字user + s) 集合
const UserModel = mongoose.model("user", new Schema(UserType));

module.exports = UserModel;
