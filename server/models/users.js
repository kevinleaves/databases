var db = require('../db');

module.exports = {
  getAll: function (callback) {
    let query = 'SELECT * FROM users;';
    db.connection.query(
      query,
      function(err, results) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, results);
        }
      }
    );
  },
  create: function (obj, callback) {
    console.log(obj);
    let query = `INSERT IGNORE INTO users (username) VALUES ('${obj.username}')`;
    db.connection.query(query, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }
};
