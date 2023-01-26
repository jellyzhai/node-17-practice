const express = require('express')

const router = express.Router()

router.get("/", (req, res) => {;
  console.log('get: ', req.query);
  const { username, password } = req.query;

  if (username === "jelly" && password === "123123") {
    res.send({ ok: 1 });
    return;
  }
  res.send({ ok: 0 });
});

router.post("/", (req, res) => {
  console.log("post: ", req.body);
  const { username, password } = req.body;

  if (username === 'jelly' && password === '123123') {
    res.send({ok: 1});
    return
  }
  res.send({ok: 0});
});

module.exports = router