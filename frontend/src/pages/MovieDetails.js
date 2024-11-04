// MovieDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import moviesData from '../data/movies.json';
import './MovieDetails.css';

// Components
import SeatSelection from '../components/SeatSelection';
import CastList from '../components/CastList';
import CrewList from '../components/CrewList';
// import UserReview from '../components/UserReview';

const MovieDetails = () => {
    const { id } = useParams();
    const movieId = id;
    const [movie, setMovie] = useState(null); // State to hold movie data
    const [loading, setLoading] = useState(true); // State to handle loading
    const [error, setError] = useState(null); // State to handle errors
    const [showSeatSelection, setShowSeatSelection] = useState(false); // State to toggle seat selection

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(`/api/movies/${movieId}`);
                setMovie(response.data);
            } catch (err) {
                setError('Failed to load movie data');
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [movieId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

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
                <SeatSelection movie={movie} />
            )}

        </div>
    );
};

export default MovieDetails;
