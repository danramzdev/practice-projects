const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { validationResult } = require('express-validator')
const User = require('../models/User')

class AuthController {
  static getAuth(req, res) {
    res.send('Auth GET')
  }

  static async postAuth(req, res) {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
      return res.status(400).json(errors)
    }

    const { email, password } = req.body

    try {
      let user = await User.findOne({ email })

      if(!user) {
        return res.status(400).json({ msg: 'Invalid Credentials' })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if(!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' })
      }

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

module.exports = AuthController
