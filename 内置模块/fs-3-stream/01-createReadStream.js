const fs = require('fs')
const path = require('path')

const readFilePath = path.resolve(__dirname, './a.txt');

const readStream = fs.createReadStream(readFilePath, 'utf-8');

readStream.on('data', data => {
    console.log('data: ', data);
});

readStream.on('end', () => {
    console.log("end: ");
});

readStream.on('error', err => {
    console.log("err: ", err);
});