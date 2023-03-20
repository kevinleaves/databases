/* You'll need to
 *   npm install sequelize
 * before running this example. Documentation is at http://sequelize.com/
 */

/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */
var {Sequelize, DataTypes} = require('sequelize');

var db = new Sequelize('chatter', 'root', '');

/* first define the data structure by giving property names and datatypes */

var User = db.define('User', {
  username: DataTypes.STRING
});

var Message = db.define('Message', {
  userid: DataTypes.INTEGER,
  text: DataTypes.STRING,
  roomname: DataTypes.STRING
});

/* Sequelize comes with built in support for promises
 * making it easy to chain asynchronous operations together */
User.sync() // sync User model
  .then(() => {
    // Now instantiate an object and save it:
    return User.create({username: 'Jean Valjean'});
  })
  .then(() => {
    // Retrieve objects from the database:
    return User.findAll({ where: {username: 'Jean Valjean'} });
  })
  .then((users) => {
    users.forEach(function(user) {
      console.log(user.username + ' exists');
    });
    db.close();
  })
  .catch((err) => {
    // Handle any error in the chain
    console.error(err);
    db.close();
  });
