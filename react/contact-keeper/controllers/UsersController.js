const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { validationResult } = require('express-validator')
const User = require('../models/User')

class UsersController {
  // @route POST /api/users
  // @desc Register user
  // @access Public
  static async createUser(req, res) {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
      return res.status(400).json(errors)
    }

    const { name, email, password } = req.body

    try {
      let user = await User.findOne({ email })

      if(user) {
        return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
      }

      user = new User({
        name,
        email, 
        password
      });

      const salt = await bcrypt.genSalt(10)

      user.password = await bcrypt.hash(password, salt)

      await user.save()

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(payload, config.get('jwtSecret'), {
        expiresIn: 3600
      }, (err, token) => {
        if(err) {
          throw err
        }
        res.json({ token })
      })
    } catch (error) {
      console.error(error.message)

      res.status(500).send('Server error')
    }
  }
}

module.exports = UsersController
