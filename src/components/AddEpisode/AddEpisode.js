import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faPlus } from '@fortawesome/free-solid-svg-icons';

const AddEpisode = () => {
	const [ rates, setRates ] = React.useState([
		{ titleEpisode: '', attachThumbnail: '', linkFilm: '' }
	]);

	const addRate = () => {
		setRates([ ...rates, { titleEpisode: '', attachThumbnail: '', linkFilm: '' } ]);
	};

	const handleChange = (event) => {
		const updateForm = [ ...rates ];
		updateForm[event.target.dataset.id][event.target.className] = event.target.value;
		setRates(updateForm);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div
			style={{
				marginTop: '3em'
			}}
		>
			<div className="satuline">
				<form onSubmit={handleSubmit} onChange={handleChange}>
					{rates.map((row, index) => {
						const titleEpisodeId = `title-${index}`,
							attachThumbnailId = `attach-${index}`,
							linkFilmId = `link-${index}`;
						return (
							<div key={index}>
								<div className="form-group">
									<label>{`Range #${index + 1}`}</label>
									<input
										type="text"
										name={titleEpisodeId}
										data-id={index}
										id={titleEpisodeId}
										className="titleEpisode"
										placeholder="Title-Episode"
										style={{
											width: '160%'
										}}
									/>

									<label>Rate</label>
									<input
										type="file"
										name={attachThumbnailId}
										data-id={index}
										id={attachThumbnailId}
										className="attachThumbnail"
										style={{
											width: '40%'
										}}
									/>
								</div>
								<div className="form-group">
									<label>Rate</label>
									<input
										type="text"
										name={linkFilmId}
										data-id={index}
										id={linkFilmId}
										className="linkFilm"
									/>
								</div>
								<div className="form-group">
									<button
										className="btn-grey"
										style={{
											width: '100%',
											height: '50px',
											color: '#e50914'
										}}
										onClick={addRate}
									>
										<FontAwesomeIcon icon={faPlus} />
									</button>
								</div>
							</div>
						);
					})}

					<input type="submit" value="Submit" />
				</form>
			</div>
		</div>
	);
};

export default AddEpisode;
