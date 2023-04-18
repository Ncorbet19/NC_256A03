import React from "react";
import Actor from "./Actor";
import Genre from "./Genre";

const Movie = ({ movie }) => {
  return (
    <div>
      <h2>{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
      <p>Runtime: {movie.Runtime}</p>
      <p>Revenue: {movie.Revenue}</p>
      <h3>Actors:</h3>
      {movie.Actors.map((actor, i) => (
        <Actor key={i} name={actor} />
      ))}
      <h3>Genres:</h3>
      {movie.Genre.map((genre, i) => (
        <Genre key={i} name={genre} />
      ))}
    </div>
  );
};

export default Movie;
