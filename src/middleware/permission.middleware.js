// 权限认证

const { OPERATION_NOT_ALLOW } = require("../config/error")
const pemissionService = require("../service/pemission.service")

// const verifyMomentPermission = async (ctx, next) => {
//   // 获取登录用户的id / 要修改的动态的id
//   const { momentId } = ctx.params
//   const { id } = ctx.user
//   // 查询user的id是否有修改momentId的权限
//   const isPermission = await pemissionService.checkMoment(momentId, id)
//   if (!isPermission) {
//     return ctx.app.emit('error', OPERATION_NOT_ALLOW, ctx)
//   }
//   await next()
// }

// 一个方法：
// const verifyPermission = function (resouce) {
//   return async (ctx, next) => {
//     // 获取登录用户的id / 要修改的动态的id
//     const { momentId } = ctx.params
//     const { id } = ctx.user
//     // 查询user的id是否有修改momentId的权限
//     const isPermission = await pemissionService.checkMoment(momentId, id)
//     if (!isPermission) {
//       return ctx.app.emit('error', OPERATION_NOT_ALLOW, ctx)
//     }
//     await next()
//   }
// }
const verifyPermission = async (ctx, next) => {
  // 1.获取登录用户的id
  const { id } = ctx.user
  // const { momentId } = ctx.params
  // 2. 获取资源的name/id
  // params: { momentId: 4}
  // keyName => momentId
  // resouceId => 4
  // resouceName => moment
  const keyName = Object.keys(ctx.params)[0]
  const resouceId = ctx.params[keyName]
  const resouceName = keyName.replace('Id', '')

  // 查询user的id是否有修改资源的权限
  const isPermission = await pemissionService.chekResource(resouceName, resouceId, id)
  if (!isPermission) {
    return ctx.app.emit('error', OPERATION_NOT_ALLOW, ctx)
  }
  await next()
}
module.exports = {
  // verifyMomentPermission
  verifyPermission
}