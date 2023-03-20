var controller = require('./controllers'); // automatically goes to the controllers/index.js
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/messages', controller.messages.get); // if matches /classes/messages then we'll let controller.messages.get handle it

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);


module.exports = router;

