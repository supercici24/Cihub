const KoaRouter = require('@koa/router')
const { verifyAuth } = require('../middleware/login.middleware')
const { create, list, detail, update, remove } = require('../controller/moment.controller')
const { verifyPermission } = require('../middleware/permission.middleware')

const momentRouter = new KoaRouter({ prefix: '/moment' })

// 增：发表动态前要先验证一个是否登录了，验证token
momentRouter.post('/', verifyAuth, create)

//查： 获取动态列表，不需要验证用户身份，游客都可以看到我发表的评论呢验证个啥
momentRouter.get('/', list)

// 查询单个详细动态
momentRouter.get('/:momentId', detail)

// 删
momentRouter.delete('/:momentId', verifyAuth, verifyPermission, remove)

// 改：1.验证是否登录 2.权限认证-能否修改动态 3.执行修改
momentRouter.patch('/:momentId', verifyAuth, verifyPermission, update)

module.exports = momentRouter