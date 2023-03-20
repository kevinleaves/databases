var db = require('../db');

module.exports = {
  getAll: function (callback) {
    let query = 'SELECT * FROM messages;';
    db.connection.query(
      query,
      function(err, results) {
        if (err) {
          callback(err, null);
        } else {
          // sends results to controller/messages, for example
          console.log(results);
          callback(null, results);
        }
      }
    );
  }, // a function which produces all the messages - actually talking to the database. A majority of the work goes here. When done, send it back to the controllers/messages.js through callbacks
  create: function (obj, callback) {
    console.log(obj, 'obj');
    let query = `INSERT INTO messages (text, created_at, roomname, user_id) VALUES ("${obj.message}", '${Date.now()}', '${obj.roomname}', (
      SELECT id FROM users WHERE username='${obj.username}'
    ))`;
    console.log('this is the query: ', query);
    // console.log(query);
    db.connection.query(query, (err, result) => {
      if (err) {
        console.log(err)
        callback(err);
      } else {
        callback(null, obj);
      }
    });
  } // a function which can be used to insert a message into the database
};

// VALUES(?,?,?,?)
// `INSERT INTO messages (text, created_at, roomname, user_id) VALUES (${obj.text}, ${obj.created_at}, ${obj.roomname}, ${obj.user_id});`

// 'INSERT INTO messages (text, created_at, roomname, user_id) VALUES (?, ?, ?, ?);',
// [obj.text, obj.created_at, obj.roomname, obj.user_id]


// 'INSERT INTO messages SET ?',

// `INSERT INTO messages (text, created_at, roomname, user_id) VALUES ('${obj.text}', ${obj.created_at}, '${obj.roomname}', ${obj.user_id})`



// `INSERT INTO messages (text, created_at, roomname, user_id) VALUES ('${obj.text}', ${obj.created_at}, '${obj.roomname}', ${obj.user_id})`;