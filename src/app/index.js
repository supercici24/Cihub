const Koa = require('koa');
const userRouter = require('../router/user.router')
const bodyParser = require('koa-bodyparser')

// 1、创建app
const app = new Koa();

// 2、对app使用中间件
app.use(bodyParser())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())


// 将app导出
module.exports = app