import "../styles.css";
import MovieCard from "./MovieCard";
import React, { useState } from "react";

const API_KEY = "15c25776"; // Replace with your OMDb API key

export default function MoviesGrid({ watchlist, toggleWatchlist }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    
    setLoading(true); // Show loading spinner
    
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`);
      const data = await response.json();

      if (data.Response === "True") {
        const detailedMovies = await Promise.all(
          data.Search.map(async (movie) => {
            const movieResponse = await fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`);
            return movieResponse.json();
          })
        );
        setMovies(detailedMovies);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }

    setLoading(false); // Hide loading spinner
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="movies-container">
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown} // Press Enter to search
        />
        <button className="search-button" onClick={handleSearch}>
          🔍 Search
        </button>
      </div>

      {loading && <div className="loading-spinner"></div>} {/* Loading Spinner */}

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} toggleWatchlist={toggleWatchlist} isWatchlisted={watchlist.includes(movie.imdbID)} />
        ))}
      </div>
    </div>
  );
}
