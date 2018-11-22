const _ = require('lodash')

const UsersController = {
  index:async (ctx) => {
    ctx.body = '这是用户的路由'
  }
}
module.exports = UsersController