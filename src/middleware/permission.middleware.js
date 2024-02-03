// 权限认证

const { OPERATION_NOT_ALLOW } = require("../config/error")
const pemissionService = require("../service/pemission.service")

const verifyMomentPermission = async (ctx, next) => {
  // 获取登录用户的id / 要修改的动态的id
  const { momentId } = ctx.params
  const { id } = ctx.user
  // 查询user的id是否有修改momentId的权限
  const isPermission = await pemissionService.checkMoment(momentId, id)
  if (!isPermission) {
    return ctx.app.emit('error', OPERATION_NOT_ALLOW, ctx)
  }
  await next()
}

module.exports = {
  verifyMomentPermission
}