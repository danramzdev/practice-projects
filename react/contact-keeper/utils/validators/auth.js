const { check } = require('express-validator')

module.exports = [
  check('email', 'Include a valid email').isEmail(),
  check('password', 'Password is required').exists()
]
