class ContactsController {
  // @route POST /api/contacts
  // @desc Register contact
  // @access Public
  static postContact(req, res) {
    res.send('Contacts Post');
  }
}

module.exports = ContactsController;
