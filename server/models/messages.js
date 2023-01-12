var db = require('../db');

module.exports = {
  getAll: function () {}, // a function which produces all the messages - actually talking to the database. A majority of the work goes here. When done, send it back to the controllers/messages.js through callbacks
  create: function () {} // a function which can be used to insert a message into the database
};
