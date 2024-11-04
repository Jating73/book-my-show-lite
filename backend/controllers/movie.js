const Movie = require('../models/Movie');

async function getAllMovies(req, res) {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch movies', error });
    }
}

async function getMovieById(req, res) {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({ message: 'Movie not found' });
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch movie', error });
    }
}

async function addMovie(req, res) {
    const { title, description, genre, duration, releaseDate, image, cast, crew } = req.body;

    try {
        const movie = new Movie({
            title,
            description,
            genre,
            duration,
            releaseDate,
            image,
            cast,
            crew,
        });

        await movie.save();
        res.status(201).json({ message: 'Movie added successfully', movie });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add movie', error });
    }
}

module.exports = {
    getAllMovies,
    getMovieById,
    addMovie
}