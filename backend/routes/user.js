const express = require('express');
const router = express.Router();

const authenticateUser = require('../middleware/authenticateUser');
const userController = require('../controllers/user');

router.post('/register', userController.register);
router.post('/login', userController.login);

router.get('/me', authenticateUser, userController.getUser);

module.exports = router;
