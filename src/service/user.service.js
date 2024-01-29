class UserService {
  create(user){
    console.log("将user对象保存到数据库中:",user)
  }
}

module.exports = new UserService(); // 导出实例