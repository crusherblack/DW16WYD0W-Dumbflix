import React from 'react';
import HeroImage from '../components/HeroImage/HeroImage';
import MovieGrid from '../components/MovieGrid/MovieGrid';
import { heroImage3 } from '../fakedata/heroimage';
import { Movies } from '../fakedata/movie';

const MoviesSection = () => {
	return (
		<div>
			<HeroImage heroImage={heroImage3} />
			<MovieGrid movieList={Movies} title="Movies" filter={12} />
		</div>
	);
};

export default MoviesSection;
