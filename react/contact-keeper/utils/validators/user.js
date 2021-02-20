const { check } = require('express-validator')

module.exports = [
  check('name', 'Plase add a name').not().isEmpty(),
  check('email', 'Include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({
    min: 6
  })
]
