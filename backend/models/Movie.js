const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    description: String,
    genre: [String],
    duration: Number, // in minutes
    releaseDate: Date,
    image: String,
    cast: [{ name: String, role: String, image: String }],
    crew: [{ name: String, role: String, image: String }],
});

module.exports = mongoose.model('Movie', movieSchema);
