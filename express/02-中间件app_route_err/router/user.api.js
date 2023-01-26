const express = require('express')

const router = express.Router()

router.use('/details', (req, res) => {
    res.send({name: 'jelly', age: 18, location: 'beijing'})
})


router.use("/list", (req, res) => {
  res.send([
    { name: "jelly", age: 18, location: "beijing" },
    { name: "marry", age: 20, location: "henan" },
  ]);
});

module.exports = router