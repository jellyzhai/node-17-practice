const express = require('express')

const router = express.Router()

router.get('/details', (req, res) => {
    res.send({name: 'jelly', age: 18, location: 'beijing'})
})


router.get("/list", (req, res) => {
  res.send([
    { name: "jelly", age: 18, location: "beijing" },
    { name: "marry", age: 20, location: "henan" },
  ]);
});

module.exports = router