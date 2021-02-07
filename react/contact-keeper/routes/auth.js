const router = require('express').Router();

module.exports = (controller) => {
  // @route POST /api/auth
  // @desc Register auth
  // @access Public
  router.post('/', controller.postAuth);

  return router;
};
