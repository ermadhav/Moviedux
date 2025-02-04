import React from "react";
import "../styles.css";
import MoviesGrid from "./MoviesGrid";

export default function MovieCard({movie}) {
  return (
    <div>
      <div key={movie.id} className="movie-card">
        <img src={`images/${movie.image}`} alt={movie.title} />
        <div className="movie-card-info">
          <h3 className="movie-card-title">{movie.title}</h3>
          <p className="movie-card-genre">{movie.genre}</p>
          <p className="movie-card-rating">{movie.rating}</p>
        </div>
      </div>
    </div>
  );
}
