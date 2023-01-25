const crypto = require('crypto')

// 还可以是 sha1 sha256 算法，返回hash 对象
const md5Hash = crypto.createHash("md5");
// const md5Hash = crypto.createHash("sha1");

// 参数可以是 字符串 或 二进制buffer
// 可以调用多次 ，追加内容到 hash对象中，并返回 hash 对象
md5Hash.update("hello world");
md5Hash.update("hello world2");

/*
参数类型 type BinaryToTextEncoding = 'base64' | 'base64url' | 'hex' | 'binary';
参数用来指定 生成签名的数据格式
计算的摘要签名 是所有 update 的内容结果, 用于数据完整性校验 和 密码存储
*/
const signName = md5Hash.digest("hex");

console.log(signName)
console.log(md5Hash.__proto__);