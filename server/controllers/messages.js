var models = require('../models');

// the controller is still just the "front desk" where the request is first handled. Let us know what you need, then we'll head to the backroom to get it or to post it for you.
module.exports = {
  get: function (req, res) {}, // a function which handles a get request for all messages - probably asking the models for messages (the model is asking the database)
  post: function (req, res) {} // a function which handles posting a message to the database - add information to the database - in this case, it is message-specific
};
