// 1、导入app
const app = require('./app')
const { SERVER_PORT } = require('./config/server')

// 2、将app启动
app.listen(SERVER_PORT, () => {
  console.log('服务器启动成功')
})