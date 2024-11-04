const express = require('express');
const router = express.Router();

const movieRoute = require('./movie');
const userRoute = require('./user');

router.use('/movies', movieRoute);
router.use('/user', userRoute);

module.exports = router