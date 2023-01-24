const fs = require('fs')
const path = require("path");

const readFilePath = path.resolve(__dirname, "./a.txt");
const writeFilePath = path.resolve(__dirname, "./b.txt");

const readStream = fs.createReadStream(readFilePath, 'utf-8')
const writeStream = fs.createWriteStream(writeFilePath, 'utf-8')

readStream.pipe(writeStream)