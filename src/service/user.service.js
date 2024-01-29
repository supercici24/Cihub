const connection = require('../app/database')

class UserService {
  create(user){
    connection.execute()
  }
}

module.exports = new UserService(); // 导出实例