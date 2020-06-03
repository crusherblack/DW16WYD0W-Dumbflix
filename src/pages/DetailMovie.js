import React from "react";
import { Movies } from "../fakedata/movie";

const DetailMovie = ({ match }) => {
  const movie = Movies.filter((detail) => {
    return detail.id == match.params.id;
  });

  console.log(movie);

  return (
    <div style={{ marginTop: "70px" }}>
      <p style={{ color: "white" }}>
        {match.params.id}
        {movie[0].name}
        {movie[0].img}
      </p>
    </div>
  );
};

export default DetailMovie;
