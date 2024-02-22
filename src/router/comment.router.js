const KoaRouter = require('@koa/router')
const { verifyAuth } = require('../middleware/login.middleware')
const { create, reply, remove } = require('../controller/comment.controller')
const { verifyPermission } = require('../middleware/permission.middleware')
const commentRouter = new KoaRouter({ prefix: '/comment' })

// 新增评论(对动态)
commentRouter.post('/', verifyAuth, create)

// 新增评论（对评论，也就是楼中楼）
commentRouter.post('/reply', verifyAuth, reply)

// 删除
commentRouter.delete('/:commentId', verifyAuth, verifyPermission, remove)

// 查询
commentRouter.get('/',)

module.exports = commentRouter