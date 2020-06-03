import React from 'react';
import HeroImage from '../components/HeroImage/HeroImage';
import MovieGrid from '../components/MovieGrid/MovieGrid';
import { heroImage2 } from '../fakedata/heroimage';
import { movieTVList } from '../fakedata/movie';

const TVSection = () => {
	return (
		<div>
			<HeroImage heroImage={heroImage2} />
			<MovieGrid movieList={movieTVList} title="TV Series" filter={12} />
		</div>
	);
};

export default TVSection;
