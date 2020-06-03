import React from 'react';
import HeroImage from '../components/HeroImage/HeroImage';
import MovieGrid from '../components/MovieGrid/MovieGrid';
import { movieList } from '../fakedata/movie';
import { heroImage1 } from '../fakedata/heroimage';

const Home = () => {
	return (
		<div>
			<HeroImage heroImage={heroImage1} />
			<MovieGrid movieList={movieList} title="TV Series" filter={6} type="tv" />
			<MovieGrid movieList={movieList} title="Movies" filter={6} type="movies" />
		</div>
	);
};

export default Home;
