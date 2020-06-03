import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieGrid.css';

const MovieGrid = ({ movieList, title, filter }) => {
	const amount = filter - 1;
	const list = movieList.map((movie) => <MovieCard movie={movie} key={movie.id} />);
	const result = list.filter((movie, index) => index <= amount);

	return (
		<div className="movie-grid">
			<div className="movie-type">
				<label>{title}</label>
			</div>

			<div className="movie-list">{result}</div>
		</div>
	);
};

export default MovieGrid;
