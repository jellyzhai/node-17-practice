const defaultHeader = { "content-type": "application/json" };

const handleResponse = (code, data, res, header = defaultHeader) => {
  res.writeHead(code, header);
  res.write(data);
  res.end();
};

const apiRouter = {
  "/api/login": (req, res) => {
    const urlObj = new URL(req.url, "http://127.0.0.1:3000");
    let resData = {
      login: false,
    };

    console.log(urlObj.searchParams);

    // urlObj.searchParams 是 iterator 接口对象
    if (
      urlObj.searchParams.get("name") === "jelly" &&
      urlObj.searchParams.get("password") === "123123"
    ) {
      resData = {
        login: true,
      };
    }

    handleResponse(200, JSON.stringify(resData), res);
  },
  "/api/login_post": (req, res) => {
    let reqData = {};
    let dataStr = "";

    let resData = {
      login: false,
    };

    req.on("data", (chunk) => {
      dataStr += chunk;
    });

    req.on("end", () => {
      console.log("dataStr: ", dataStr);
      reqData = JSON.parse(dataStr);

      if (reqData.name === "jelly" && reqData.password === "123123") {
        resData = {
          login: true,
        };
      }
      // 在请求数据 接受完成后 返回响应
      handleResponse(200, JSON.stringify(resData), res);
    });

  },
};

module.exports = apiRouter;
