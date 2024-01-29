const userService = require('../service/user.service')
const { NAME_OR_PASSWORD_IS_REQUIRE, USER_ALREADY_EXIST } = require('../config/error')
const md5password = require('../utils/md5-password')

const verifyUser = async (ctx, next) => {
  // 验证客户端传递过来的user是否可以保存到数据库中
  // 1.验证用户名和密码是否为空
  const { name, password } = ctx.request.body
  if (!name || !password) {
    return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRE, ctx)
  }
  // 2.判断name是否在数据库中已存在 
  /**
   * 先要查询数据库是否有这条数据，既然涉及到数据库，
   * 那么就在service中写一个专门的异步函数，service是专门处理数据库相关的逻辑
   */
  const users = await userService.findUserByName(name)
  if (users.length) {
    return ctx.app.emit('error', USER_ALREADY_EXIST, ctx)
  }
  // 3.执行下一个中间件
  await next()
}

const handlePassword = async (ctx, next) => {
  // 1.取出密码
  const { password } = ctx.request.body

  // 2.对密码进行加密
  ctx.request.body.password = await md5password(password)

  // 执行下一个中间件
  await next()
}

module.exports = {
  verifyUser,
  handlePassword
}