import './App.css';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

// Pages
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';


function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
