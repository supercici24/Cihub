const KoaRouter = require('@koa/router')
const { verifyAuth } = require('../middleware/login.middleware')
const { create, list } = require('../controller/moment.controller')

const momentRouter = new KoaRouter({ prefix: '/moment'})

// 编写接口 发表动态前要先验证一个是否登录了，验证token
momentRouter.post('/',verifyAuth, create)

// 获取动态列表，不需要验证用户身份，游客都可以看到我发表的评论呢验证个啥
momentRouter.get('/',list)

module.exports = momentRouter