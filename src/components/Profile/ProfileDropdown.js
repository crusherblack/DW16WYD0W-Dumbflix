import React from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMoneyCheck, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

const ProfileDropdown = ({ showProfileDropdown }) => {
	let history = useHistory();

	const openProfile = () => {
		history.push(`/profile`);
		showProfileDropdown();
	};

	const openPayment = () => {
		history.push(`/payment`);
		showProfileDropdown();
	};

	return (
		<div>
			<div className="profile-square">
				<p>
					<FontAwesomeIcon icon={faUser} className="icon" />{' '}
					<span className="submenu" onClick={() => openProfile()}>
						Profile
					</span>
				</p>
				<p>
					<FontAwesomeIcon icon={faMoneyCheck} className="icon" />{' '}
					<span className="submenu" onClick={() => openPayment()}>
						Pay
					</span>
				</p>
				<hr />
				<p>
					<FontAwesomeIcon icon={faPowerOff} className="icon" />{' '}
					<span className="submenu">Log Out</span>
				</p>
			</div>
		</div>
	);
};

export default ProfileDropdown;
