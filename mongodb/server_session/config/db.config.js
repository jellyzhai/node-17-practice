const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

// 数据库 jelly_project 会自动创建，前提需要插入集合(表)和文档(行)
mongoose.connect('mongodb://127.0.0.1:27017/jelly_project')