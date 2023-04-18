import React from "react";

const List = ({ movies, onSelectMovie }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.Key} onClick={() => onSelectMovie(movie.Key)}>
          {movie.Title} ({movie.Year})
        </li>
      ))}
    </ul>
  );
};

export default List;
