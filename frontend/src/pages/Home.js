import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

// Components
import MovieList from '../components/MovieList';
import FilterSidebar from '../components/FilterSideBar';


// import moviesData from '../data/movies.json'

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('/api/movies').then(response => setMovies(response.data));
    }, []);

    return (
        <div className="home-container">
            <FilterSidebar />
            <div className="movies-section">
                <h2>Movies In Cinema</h2>
                <MovieList movies={movies} />
            </div>
        </div>
    );
};

export default Home;
