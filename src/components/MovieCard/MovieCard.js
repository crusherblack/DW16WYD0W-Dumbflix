import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie: { id, name, year, img } }) => {
  return (
    <div>
      <img className="card" src={img} />
      <span className="movie-title">{name}</span>
      <span className="movie-year">{year}</span>
    </div>
  );
};

export default MovieCard;
