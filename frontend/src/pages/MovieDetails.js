// MovieDetails.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import moviesData from '../data/movies.json'; // Import the JSON file
import './MovieDetails.css';

// Components
import SeatSelection from '../components/SeatSelection';
import CastList from '../components/CastList';
import CrewList from '../components/CrewList';
// import UserReview from '../components/UserReview';

const MovieDetails = () => {
    const { id } = useParams();
    const movieId = parseInt(id, 10); // Convert id to a number
    const movie = moviesData.find(movie => movie.id === movieId); // Find the movie by id
    const [showSeatSelection, setShowSeatSelection] = useState(false); // State to toggle seat selection

    if (!movie) return <div>Movie not found!</div>;

    const handleBookTickets = () => {
        setShowSeatSelection(true); // Show the seat selection component
    };

    return (
        <div className="movie-details-page">
            <div className="movie-banner">
                <div className="banner-content">
                    <h1 className="movie-title">{movie.title}</h1>
                    <div className="movie-rating">8/10 (50.4K Votes)</div>
                    <p className="movie-languages">English, Telugu, Tamil</p>
                    <p className="movie-genres">
                        1h 50m • Action, Adventure, Sci-Fi • UA • 24 Oct, 2024
                    </p>
                    <button className="book-tickets-btn" onClick={handleBookTickets} >Book tickets</button>
                </div>
                <div className="movie-poster">
                    <img
                        src={movie.image} // Replace with the actual poster image
                        alt={movie.title}
                    />
                </div>
            </div>
            {!showSeatSelection ? (
                <>
                    <div className="movie-info-section">
                        <h2>About the movie</h2>
                        <p>
                            {movie.description}
                        </p>
                    </div>
                    <div className="cast-crew-section">
                        <h2>Cast</h2>
                        <CastList castList={movie.cast} />
                        <h2>Crew</h2>
                        <CrewList crewList={movie.crew} />
                    </div>
                    <div className="reviews-section">
                        <h2>Top reviews</h2>
                        <p className="review-summary">Summary of 28.3K reviews.</p>
                        <div className="review-tags">
                            <span className="tag">#GreatActing</span>
                            <span className="tag">#Blockbuster</span>
                            <span className="tag">#Wellmade</span>
                            <span className="tag">#SuperDirection</span>
                            <span className="tag">#Rocking</span>
                        </div>
                        <div className="reviews">
                            {/* <UserReview /> */}
                        </div>
                    </div>
                </>
            ) : (
                <SeatSelection movieId={movieId} />
            )}

        </div>
    );
};

export default MovieDetails;
