import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.png';
import person from '../../img/person.jpg';
import ProfileDropdown from '../Profile/ProfileDropdown';

const Navbar = ({ isLogin, showModalLogin, showModalRegister }) => {
	const [ isProfileDropdown, setProfileDropdown ] = useState(false);

	const showProfileDropdown = () => {
		setProfileDropdown(!isProfileDropdown);
	};

	return (
		<div className="navbar">
			<Link to="/">Home</Link>
			<Link to="/tv-series">TV Shows</Link>
			<Link to="/movies">Movies</Link>
			<div className="logo">
				<img src={logo} alt="" />
			</div>
			{!isLogin && (
				<div className="button-login-register">
					<button className="btn-light" onClick={() => showModalRegister()}>
						Register
					</button>{' '}
					<button className="btn-red" onClick={() => showModalLogin()}>
						Login
					</button>
				</div>
			)}
			{isLogin && (
				<div className="profile">
					<img src={person} alt="" onClick={() => showProfileDropdown()} />
				</div>
			)}
			{isProfileDropdown && (
				<ProfileDropdown showProfileDropdown={showProfileDropdown} />
			)}
		</div>
	);
};

export default Navbar;
