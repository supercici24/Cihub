const mysql2 = require('mysql2')

// 1.创建连接池
const connectionPool = mysql2.createPool({
  host : 'localhost',
  port: 3306,
  database:'cihub',
  user:'root',
  password:'SuperCiCi@zx123_com',
  connectionLimit: 5
})

// 2.获取连接是否成功
/**
 * getConnection可以从connectionPool连接池中拿到一个连接，连接在回调函数中
 * 有问题的话会报错，比如端口号写错，密码写错等
 */
connectionPool.getConnection((err, connection) => {
  // 判断是否有错误信息
  if(err){
    console.log('建立连接失败', err)
    return
  }

  // 获取到connection连接之后，尝试和数据库建立连接（类似执行sql语句，这里就是为了测试能否执行sql语句）
  connection.connect((err) => {
    if(err){
      console.log('数据库连接失败', err)
      return
    }else{
      console.log('数据库连接成功，可以操作数据库')
    }
  })
})

// 3.获取到连接池中连接对象
const connection = connectionPool.promise()

module.exports = connection