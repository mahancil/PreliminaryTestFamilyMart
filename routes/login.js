var express = require('express');
var router = express.Router();
var login_controllers = require('../controllers/Login');

/* GET users listing. */
router.post('/login', login_controllers.Login);
module.exports = router;
