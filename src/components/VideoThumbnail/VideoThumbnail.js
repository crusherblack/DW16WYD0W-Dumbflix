import React from 'react';
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton, ControlBar } from 'video-react';
import './VideoThumbnail.css';

const VideoThumbnail = ({ thumbnail }) => {
	return (
		<div className="video">
			<Player
				poster={thumbnail}
				height={536}
				width="100%"
				fluid={false}
				autoPlay={false}
			>
				<source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
				<BigPlayButton position="center" />
				<ControlBar autoHide={true} />
			</Player>
		</div>
	);
};

export default VideoThumbnail;
