const MomentService = require("../service/moment.service");

class MomentController {
  async create(ctx, next) {
    // 获取动态内容
    const { content } = ctx.request.body
    // 动态由谁发布
    const { id } = ctx.user

    // 将动态相关的数据保存到数据库中
    const result = await MomentService.create(content, id)
    console.log("resu:", result)
    ctx.body = {
      code: 0,
      message: '发布动态成功',
      data: result
    }
  }

  async list(ctx, next) {
    // 获取offset/size
    const { offset, size } = ctx.query
    const result = await MomentService.queryList(offset, size)

    ctx.body = {
      code: 0,
      data: result
    }
  }
}

module.exports = new MomentController(); // 导出实例