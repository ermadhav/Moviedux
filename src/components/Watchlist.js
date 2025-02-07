import React, { useEffect, useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

const API_KEY = "15c25776"; // Replace with your OMDb API key

export default function Watchlist({ watchlist, toggleWatchlist }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (watchlist.length === 0) {
      setMovies([]);
      return;
    }

    setLoading(true);
    Promise.all(
      watchlist.map(async (id) => {
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
        return response.json();
      })
    )
      .then((moviesData) => {
        setMovies(moviesData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching watchlist movies:", error);
        setLoading(false);
      });
  }, [watchlist]);

  return (
    <div>
      <h1 className="title">Your Watchlist</h1>

      {loading && <div className="loading-spinner"></div>} {/* Show loading spinner */}

      <div className="watchlist">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} toggleWatchlist={toggleWatchlist} isWatchlisted={true} />
          ))
        ) : (
          <p className="no-movies">No movies in your watchlist.</p>
        )}
      </div>
    </div>
  );
}
