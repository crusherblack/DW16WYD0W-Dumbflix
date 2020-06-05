import React from "react";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import { movieList } from "../fakedata/movie";
import "./css/ListMovie.css";

const ListMovie = () => {
  return (
    <div className="list-movie">
      <div className="baris-category">
        <h1>List Movie</h1>
        <select name="" id="" className="select-category">
          <option value="" holder>
            Category
          </option>
          <option value="" holder>
            TV Series
          </option>
          <option value="" holder>
            Movies
          </option>
        </select>
        <button className="btn-add-film">Add Film</button>
      </div>
      <MovieGrid
        movieList={movieList}
        title="TV Series"
        filter={12}
        type="tv"
      />
    </div>
  );
};

export default ListMovie;
