const http = require("http");
const https = require("https");
const url = require("url");

const server = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url);
  if (urlInfo.pathname === "/api/cellphone/goods") {
    res.writeHead(200, {
      "content-type": "application/json; charset=utf-8",

      // 使用 cors 跨站资源共享 响应头 解决跨域
      "access-control-allow-origin": "*",
    });

    getCellphoneFromXiaoMi((data) => {
      // 只能返回 字符串 或 buffer 实例
      res.end(data);
    });
  }
});

server.listen(3000, () => {
  console.log("服务器启动成功");
});

function getCellphoneFromXiaoMi(cb) {
  const options = {
    hostname: "b.xiaomiyoupin.com",
    path: "/mtop/merchant/khadgar/searchGoods",
    port: '443',
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  };

  const req = https.request(options, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      cb(data);
    });
  });

  req.write(
    JSON.stringify([
      {},
      {
        categoryId: null,
        keyword: "COOWOO重力车载手机支架T200  伯爵黑 1个/盒",
        pageIndex: 1,
        pageSize: 20,
      },
    ])
  );
  req.end()
}
