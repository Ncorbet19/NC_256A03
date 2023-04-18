import React, { useState, useEffect } from "react";
import List from "./List";
import Movie from "./Movie";
import ActorSelect from "./ActorSelect";
import YearSelect from "./YearSelect";
import "../App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch("http://localhost:8888/movies");
    const data = await response.json();
    setMovies(data);
  };

  const handleSelectMovie = async (id) => {
    const response = await fetch(`http://localhost:8888/movies/${id}`);
    const data = await response.json();
    setSelectedMovie(data);
  };

  const handleActorSearch = async (name) => {
    const response = await fetch(`http://localhost:8888/actors/${name}`);
    const data = await response.json();
    setMovies(data);
  };

  const handleYearSearch = async (year) => {
    const response = await fetch(`http://localhost:8888/years/${year}`);
    const data = await response.json();
    setMovies(data);
  };

  return (
    <div className="pad">
      <h1>Movies</h1>
      <ActorSelect onActorSearch={handleActorSearch} />
      <YearSelect onYearSearch={handleYearSearch} />
      <br></br>
      {selectedMovie ? (
        <Movie movie={selectedMovie} />
      ) : (
        <List movies={movies} onSelectMovie={handleSelectMovie} />
      )}
    </div>
  );
}

export default App;
