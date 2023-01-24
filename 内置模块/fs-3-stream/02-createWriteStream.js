const fs = require('fs')
const path = require("path");

const writeFilePath = path.resolve(__dirname, "./b.txt");

const writeStream = fs.createWriteStream(writeFilePath, 'utf-8')

writeStream.write('aaaa');
writeStream.write('bbbb');
writeStream.write('cccc');

writeStream.end()