const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const registerRouter = require('../router')

// 1、创建app
const app = new Koa();

// 2、对app使用中间件
app.use(bodyParser())

registerRouter(app)


// 将app导出
module.exports = app