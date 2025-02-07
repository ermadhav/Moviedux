import React from "react";
import "../styles.css";

export default function MovieCard({ movie, isWatchlisted, toggleWatchlist }) {
  const handleError = (e) => {
    e.target.src = "images/default.jpg"; // Default image if missing
  };

  return (
    <div className="movie-card">
      <img className="movie-image" src={movie.Poster} alt={movie.Title} onError={handleError} />
      <div className="movie-card-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-genre">🎭 {movie.Genre || "Unknown"}</p>
        <p className="movie-rating">⭐ IMDb: {movie.imdbRating || "N/A"}</p>
        <p className="movie-runtime">⏳ {movie.Runtime || "N/A"}</p>
        <label className="switch">
          <input type="checkbox" checked={isWatchlisted} onChange={() => toggleWatchlist(movie.imdbID)} />
          <span className="slider">
            <span className="slider-label">{isWatchlisted ? "In Watchlist" : "Add to Watchlist"}</span>
          </span>
        </label>
      </div>
    </div>
  );
}
