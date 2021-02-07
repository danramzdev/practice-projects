class AuthController {
  // @route POST /api/auth
  // @desc Register auth
  // @access Public
  static postAuth(req, res) {
    res.send('Auth Post');
  }
}

module.exports = AuthController;
