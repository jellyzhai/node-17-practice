const path = require("path");
const fs = require("fs");

const filePath = path.resolve(__dirname, "./test.txt");

fs.readFile(filePath, 'utf-8', (err, buffer) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(buffer.toString());
});
