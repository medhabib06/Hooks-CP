import React from "react";
import MovieCard from "./MovieCard";
import "./App.css";

function MovieList({ movies }) {
  return (
    <div className="ML">
      <ul>
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
