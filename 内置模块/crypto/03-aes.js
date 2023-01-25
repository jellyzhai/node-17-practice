const crypto = require('crypto')

// 代码执行报错 后面再调试
function encrypt(key, iv, data) {
    const dep = crypto.createCipheriv('aes-128-cbc', key, iv)

    return dep.update(data, 'binary', 'hex') + dep.final('hex')
}

function decrypt() {}

const key = "abcdefg1234567890";
const iv = "tbcdefg1234567890";
const data = 'jelly'

console.log(encrypt(key, iv, data));
