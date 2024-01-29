const app = require('../app');
const { NAME_OR_PASSWORD_IS_REQUIRE, USER_ALREADY_EXIST } = require('../config/error');

app.on('error', (error, ctx) => {
  let code = 0
  let message = ''
  switch (error) {
    case NAME_OR_PASSWORD_IS_REQUIRE:
      code = -1001
      message = '用户名或密码不能为空'
      break
    case USER_ALREADY_EXIST:
      code = -1002
      message = '用户名已存在'
      break
  }
  ctx.body = { code, message }
})