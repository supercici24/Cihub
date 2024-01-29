const crypto = require('crypto') //node内置的库，可以对某些数据进行加密

function md5password(password){
  const md5 = crypto.createHash('md5') //告诉库创建一个md5的加密hash算法
  const md5pwd = md5.update(password).digest('hex') //直接返回的是一个二进制的hash值，可以使用digest转换成十六进制的形式

  return md5pwd
}
module.exports = md5password