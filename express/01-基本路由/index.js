const express = require('express')

const app = express();

// 路由路径 可以是 字符串 字符串模式 或 正则表达式

app.get('/', (req, res) => {
    res.redirect("/home");
})

app.get('/home', (req, res, next) => {
    if (!Object.keys(req.query).length) {
        res.send('这是路径没有查询参数的页面')
        // return
    }
    next();
}, (req, res) => {
    res.send("这是路径有查询参数的页面\n" + JSON.stringify(req.query));
})


const middleWare1 = (req, res, next) => {
    res.middleWareCount = (res.middleWareCount ?? 0) + 1;
    next()
}

const middleWare2 = (req, res, next) => {
    res.middleWareCount = (res.middleWareCount ?? 0) + 1;
    next()
}

// 表示 * 号的位置可以使 任意字符，包括没有字符
app.get("/goo*ds", [middleWare1, middleWare2], (req, res) => {
  res.send("goods 中间件数量为：" + (res.middleWareCount + 1));
});

const googleMiddleWare = (req, res) => {
  res.send("google 中间件数量为：" + (res.middleWareCount + 1));
};

// 对于 + 号 前面的 o 至少要有1个，最多不限制，都可以匹配
app.get("/goo+gle", [middleWare1, googleMiddleWare]);

// 匹配路径 /detail/xxx/xxx
app.get('/detail/:id/:info', (req, res) => {
    res.send("detail");
})

// 匹配路径 /list /lists 后面的 s 可有可无
app.get('/lists?', (req, res) => {
  /* node 中 原write 方法 只能返回 字符串 buffer 或 unit8Array */
  // res.write('[1,2,3]')
  // res.end(() => {
  //     console.log('response finish');
  // })

  /**
   * Send a response.
   *
   * Examples:
   *
   *     res.send(new Buffer('wahoo'));
   *     res.send({ some: 'json' });
   *     res.send('<p>some html</p>');
   *     res.status(404).send('Sorry, cant find that');
   */
  res.send('list(s)');
})

app.listen(3000, () => {
    console.log("服务器启动成功：http://127.0.0.1:3000");
})