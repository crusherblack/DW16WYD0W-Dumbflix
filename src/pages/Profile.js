import React from 'react';
import './pages.css';
import avatar from '../img/profile/avatar.png';

const Profile = () => {
	return (
		<div className="profile-container">
			<div className="profile-card">
				<div className="profile-desc">desc</div>
				<div className="profile-img">
					<img src={avatar} alt="avatar" className="profile-avatar" />
					<button className="profile-button">Change Photo Profile</button>
				</div>
			</div>
		</div>
	);
};

export default Profile;
