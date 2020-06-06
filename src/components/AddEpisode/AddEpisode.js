import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faPlus } from '@fortawesome/free-solid-svg-icons';

const AddEpisode = () => {
	return (
		<div
			style={{
				marginTop: '3em'
			}}
		>
			<div className="satuline">
				<div className="form-group">
					<input
						type="text"
						className="custom-input"
						placeholder="Title-Episode"
						style={{
							width: '160%'
						}}
					/>
				</div>
				<div className="form-group">
					<button
						className="btn-grey"
						style={{
							width: '40%',
							height: '50px',
							fontSize: '18px',
							textAlign: 'left',
							float: 'right'
						}}
					>
						Attach Thumbnail{' '}
						<div
							style={{
								float: 'right',
								display: 'inline',
								fontSize: '20px'
							}}
						>
							<FontAwesomeIcon icon={faPaperclip} />
						</div>
					</button>
				</div>
			</div>
			<div className="form-group">
				<input type="text" className="custom-input" placeholder="Link Film" />
			</div>
			<div className="form-group">
				<button
					className="btn-grey"
					style={{
						width: '100%',
						height: '50px',
						color: '#e50914'
					}}
				>
					<FontAwesomeIcon icon={faPlus} />
				</button>
			</div>
		</div>
	);
};

export default AddEpisode;
