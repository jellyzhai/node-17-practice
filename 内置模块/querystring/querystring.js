const queryString = require('querystring')

const searchStr = 'name=jelly&age=30&single=true'

const obj = queryString.parse(searchStr)

const convertToStr = queryString.stringify(obj)

// console.log(obj);
// console.log(convertToStr);

const urlStr = 'name=铁锤&age=18&single=false'

// 字符串转义编码
const escapeStr = queryString.escape(urlStr)

// 解码
const unescapeStr = queryString.unescape(escapeStr)

console.log(escapeStr);
console.log(unescapeStr);