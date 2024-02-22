const commentService = require("../service/comment.service");

class CommentController {
  async create(ctx, next) {
    const { content, momentId } = ctx.request.body
    const { id } = ctx.user
    const result = await commentService.create(content, momentId, id)

    ctx.body = {
      code: 0,
      message: '评论发布成功'
    }
  }

  async reply(ctx, next) {
    const { content, momentId, commentId } = ctx.request.body
    const { id } = ctx.user

    const result = await commentService.reply(content, momentId, commentId, id)

    ctx.body = {
      code: 0,
      message: '回复成功'
    }
  }

  async remove(ctx, next) {
    const { commentId } = ctx.params
    
    await commentService.remove(commentId)
    ctx.body = {
      code: 0,
      message: '删除成功'
    }
  }
}

module.exports = new CommentController(); // 导出实例