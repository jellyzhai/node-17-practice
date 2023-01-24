const path = require('path')
const fs = require('fs')

const oldPath = path.resolve(__dirname, './public')
const newPath = path.resolve(__dirname, './public2')
fs.rename(oldPath, newPath, (err) => {
    console.log(err)
});