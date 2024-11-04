const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movie');

const authenticateUser = require('../middleware/authenticateUser');
const checkAdmin = require('../middleware/checkAdmin');

router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);

router.post('/add', authenticateUser, checkAdmin, movieController.addMovie);

module.exports = router;