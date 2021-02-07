class UsersController {
  // @route POST /api/users
  // @desc Register user
  // @access Public
  static postUser(req, res) {
    res.send('Users Post');
  }
}

module.exports = UsersController;
