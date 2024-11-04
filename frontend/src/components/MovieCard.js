import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
    return (
        <Link to={`/movies/${movie._id}`}>
            <div className="movie-card">
                <img src={movie.image} alt={movie.title} className="movie-poster" />
                <div className="movie-details">
                    <h3>{movie.title}</h3>
                    <p>{movie.language}</p>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;
