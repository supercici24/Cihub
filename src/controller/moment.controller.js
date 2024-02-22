const momentService = require("../service/moment.service");
const MomentService = require("../service/moment.service");

class MomentController {
  async create(ctx, next) {
    // 获取动态内容
    const { content } = ctx.request.body
    // 动态由谁发布
    const { id } = ctx.user

    // 将动态相关的数据保存到数据库中
    const result = await MomentService.create(content, id)
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

  async detail(ctx, next) {
    //获取动态的id
    const { momentId } = ctx.params

    // 根据id查询动态详情
    const result = await MomentService.queryById(momentId)

    ctx.body = {
      code: 0,
      data: result[0]  //result是一个数组，这里获取某一条动态
    }
  }

  async update(ctx, next) {
    // 获取要修改的动态id
    const { momentId } = ctx.params
    // 修改的内容
    const { content } = ctx.request.body
    // 执行数据库操作
    const result = await momentService.update(content, momentId)

    ctx.body = {
      code: 0,
      message: '修改动态成功',
      data: result
    }
  }

  async remove(ctx, next) {
    const {momentId} = ctx.params
    const result = await momentService.remove(momentId)
    ctx.body = {
      code: 0,
      message: '删除动态成功',
      data: result
    }
  }
}

module.exports = new MomentController(); // 导出实例