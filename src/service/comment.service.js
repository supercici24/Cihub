const connection  = require("../app/database");

class CommentService {
  async create(content, momentId, userId) {
    const statement = 'INSERT INTO comment (content, moment_id, user_id) VALUES (?, ?, ?);'
    const [result] = await connection.execute(statement, [content, momentId, userId])
    return result
  }

  async reply(content, momentId, comment_id, userId) {
    const statement = 'INSERT INTO comment (content, moment_id, comment_id, user_id) VALUES (?,?,?, ?);'
    const [result] = await connection.execute(statement, [content, momentId, comment_id, userId])
    return result
  }

  async remove(commentId){
    const statement = 'DELETE FROM comment WHERE id = ?;'
    await connection.execute(statement, [commentId])
  }
}

module.exports = new CommentService(); // 导出CommentService类
