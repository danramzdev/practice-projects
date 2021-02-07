const router = require('express').Router();

module.exports = (controller) => {
  // @route POST /api/contacts
  // @desc Register contact
  // @access Public
  router.post('/', controller.postContact);

  return router;
};
