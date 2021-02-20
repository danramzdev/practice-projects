const User = require('../models/User')
const { validationResult } = require('express-validator')

class UsersController {
  // @route POST /api/users
  // @desc Register user
  // @access Public
  static postUser(req, res) {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
      return res.status(400).json(errors)
    }

    res.send(req.body)
  }
}

module.exports = UsersController
