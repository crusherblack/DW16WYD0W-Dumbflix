import React from 'react';
import { movieList } from '../fakedata/movie';
import VideoThumbnail from '../components/VideoThumbnail/VideoThumbnail';
import Description from '../components/MovieDetail/Description';
import Episode from '../components/MovieDetail/Episode';
import Movie from '../components/MovieDetail/Movie';
import './pages.css';

import moviesThumbnail from '../img/videothumbnail/video2.png';
import tvThumbnail from '../img/videothumbnail/video1.png';

const DetailMovie = ({ match }) => {
	const movie = movieList.filter((detail) => {
		return detail.id == match.params.id;
	});

	return (
		<div style={{ marginTop: '70px' }}>
			<VideoThumbnail
				thumbnail={movie[0].type == 'tv' ? tvThumbnail : moviesThumbnail}
			/>
			<div className="details">
				<Description movie={movie[0]} />
				{movie[0].type == 'tv' ? (
					<Episode name={movie[0].name} />
				) : (
					<Movie name={movie[0].name} />
				)}
			</div>
		</div>
	);
};

export default DetailMovie;
