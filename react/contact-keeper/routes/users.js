const router = require('express').Router();

module.exports = (controller) => {
  // @route POST /api/users
  // @desc Register user
  // @access Public
  router.post('/', controller.postUser);

  return router;
};
