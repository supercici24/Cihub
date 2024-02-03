// 查询该用户能修改的动态
const connectioc = require('../app/database');

class PermissionService{
  async checkMoment(momentId, userId){
    const statement = `SELECT * FROM moment WHERE id = ? AND user_id = ?;`
    const [result] = await connectioc.execute(statement, [momentId, userId])
    return !!result.length //如果不能查询到长度就是0那么就没有权限(转成了布尔类型)
  }
}

module.exports = new PermissionService()