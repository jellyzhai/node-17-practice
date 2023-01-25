const defaultHeader = { "content-type": "application/json" };

const handleResponse = (code, data, res, header = defaultHeader) => {
  res.writeHead(code, header);
  res.write(data);
  res.end();
};

const apiRouter = {
  "/api/login": (res) => {
    handleResponse(200, JSON.stringify({name: 'jelly'}), res);
  },
};

module.exports = apiRouter;
