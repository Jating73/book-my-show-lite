import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={movie.image} alt={movie.title} />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <Link to={`/movies/${movie.id}`}>View Details</Link>
            </div>
        </div>
    );
};

export default MovieCard;
