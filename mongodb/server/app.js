var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 引入 session 模块
const session = require('express-session')

const MongoStore = require('connect-mongo')

var loginPageRouter = require("./routes/login.page");
var addUserPageRouter = require("./routes/index");
var usersRouter = require('./routes/users');
const userPageRoute = require("./routes/users.page");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 注册session 中间件，发送到客户端的cookie 只能 http 在请求时使用，不用通过 document.cookie 获取
app.use(
  session({
    // 发送给客户端的cookie的名称
    name: "jelly-system",
    // 服务器生成 session 的签名
    secret: "happy chinese rabbit year",
    cookie: {
      // 过期时间
      maxAge: 1000 * 60 * 60,
      // true: 只有 https 协议才能访问cookie
      secure: false,
    },
    // true: 超时前刷新，cookie 会重新计时
    // false: 超时前刷新多少次，都是按照第一次刷新时开始计时
    rolling: true,
    /* store: MongoStore.create({
      mongoUrl: 'mongodb://127.0.0.1:27017/jelly_session',
      // 过期时间
      ttl: 1000 * 60 * 10
    }), */
    // true: 每次访问后端，重新计算过期时间
    resave: true,
    // tue: 第一次访问就返回 cookie，但无效，需要登陆后才有效
    saveUninitialized: true,
  })
);

// 设置 session 校验
app.use((req, res, next) => {
  if (req.url == "/" || req.url == "/login" || req.url == "/api/login") {
    next();
    return;
  }

  if (req.session.user) {
    next()
  } else {
    // 当客户端请求 api 接口时，需要返回 json，而不是在后端重定向，返回 html
    if (req.url.startsWith('/api')) {
      res.status(401).send({ok: 401})
    } else {
      res.redirect("/login");
    }
  }
})

app.use("/login", loginPageRouter);
app.use("/add", addUserPageRouter);
app.use("/users", userPageRoute);
app.use('/api', usersRouter);
app.use("/", (req, res) => {
  res.redirect("/login");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
