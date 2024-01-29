const connection = require('../app/database')
class UserService {
  async create(user) {

    // 1.获取到用户 user
    const { name, password } = user

    // 2.拼接statement
    const statement = 'INSERT INTO `user` (name,password) VALUES (?, ?)'

    // 3.执行sql语句 [result]是把result结构出来
    const [result] = await connection.execute(statement, [name, password])
    return result
  }
  // 查询数据库
  async findUserByName(name) {
    const statement = 'SELECT * FROM `user` WHERE name = ?'
    const [valuse] = await connection.execute(statement, [name])
    return valuse
  }
}

module.exports = new UserService(); // 导出实例