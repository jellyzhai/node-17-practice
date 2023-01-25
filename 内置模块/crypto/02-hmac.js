const crypto = require('crypto')

/*
HMAC是密钥相关的哈希运算消息认证码（Hash-based Message Authentication Code）的缩写
一种基于Hash函数和密钥进行消息认证的方法;比 hash 算法更安全
第二个参数 “key”是用于生成加密HMAC哈希的HMAC密钥。
*/
const md5Hmac = crypto.createHmac('md5', 'jelly')

md5Hmac.update('this is secret')

// 参数类型 type BinaryToTextEncoding = 'base64' | 'base64url' | 'hex' | 'binary';
const signName = md5Hmac.digest("hex");

console.log(signName)