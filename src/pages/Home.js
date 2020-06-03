import React from 'react';
import HeroImage from '../components/HeroImage/HeroImage';
import MovieGrid from '../components/MovieGrid/MovieGrid';
import { movieTVList, Movies } from '../fakedata/movie';
import { heroImage1 } from '../fakedata/heroimage';

const Home = () => {
	return (
		<div>
			<HeroImage heroImage={heroImage1} />
			<MovieGrid movieList={movieTVList} title="TV Series" filter={6} />
			<MovieGrid movieList={Movies} title="Movies" filter={6} />
		</div>
	);
};

export default Home;
