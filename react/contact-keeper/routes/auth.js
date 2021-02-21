const router = require('express').Router()
const authValidator = require('../utils/validators/auth')

module.exports = controller => {
  // @route     GET /api/auth
  // @desc      Get logged user
  // @access    Private
  router.get('/', controller.getAuth)

  // @route     POST /api/auth
  // @desc      Register auth
  // @access    Public
  router.post('/', authValidator, controller.postAuth)

  return router
}
