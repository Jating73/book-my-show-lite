import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

// Components
import MovieCard from '../components/MovieCard';

// Dummy data
import moviesData from '../data/movies.json'

const Home = () => {
    const [movies, setMovies] = useState(moviesData);

    // useEffect(() => {
    //     // Fetch movie data from an API
    //     axios.get('/api/movies').then(response => setMovies(response.data));
    // }, []);

    return (
        <div className="home">
            <h1>Now Showing</h1>
            <div className="movie-list">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Home;
