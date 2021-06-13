import "./App.css";
import MovieList from "./MovieList";
import React, { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({
    name: "",
    description: "",
    rate: "",
    imageLink:"",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setMovies([movie, ...movies]);
    setMovie({
      name: "",
      description: "",
      rate: "",
      imageLink: "",
    });
  }

  function handleNameChange(e) {
    setMovie({ ...movie, name: e.target.value });
  }

  function handleDescriptionChange(e) {
    setMovie({ ...movie, description: e.target.value });
  }

  function handleRateChange(e) {
    setMovie({ ...movie, rate: e.target.value });
  }

  function handleImageLinkChange(e) {
    setMovie({ ...movie, imageLink: e.target.value });
  }

  return (
    <div className="App">
      <div className="title">MOVIES</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={movie.name}
          placeholder="movie name"
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          value={movie.description}
          placeholder="movie description"
          onChange={handleDescriptionChange}
        />
        <br />
        <input
          type="text"
          value={movie.rate}
          placeholder="movie rate"
          onChange={handleRateChange}
        />
        <br />
        <input
          type="text"
          value={movie.imagelink}
          placeholder="image link"
          onChange={handleImageLinkChange}
        />
        <br />
        <input type="submit" value="Submit" />
        <br />
      </form>

      <MovieList movies={movies} />
    </div>
  );
}

export default App;
