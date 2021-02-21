const router = require('express').Router()
const userValidator = require('../utils/validators/user')

module.exports = controller => {
  // @route POST /api/users
  // @desc Register user
  // @access Public
  router.post('/', userValidator, controller.createUser)

  return router
}
