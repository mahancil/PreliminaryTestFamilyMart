var express = require('express');
var router = express.Router();
var login_controllers = require('../controllers/Login');
var register_controllers = require('../controllers/Register');

/* GET users listing. */
router.get('/id/:user_id', login_controllers.Auth, register_controllers.getUserById);
router.get('/profile/:user_id', login_controllers.Auth, register_controllers.getProfilePict);
router.post('/', login_controllers.Auth, register_controllers.multer_option, register_controllers.postInsertUser);
router.put('/id/:user_id', login_controllers.Auth, register_controllers.multer_option, register_controllers.putUpdateuUser);

module.exports = router;
