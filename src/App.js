import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import ModalLogin from './components/Login/Login';
import ModalRegister from './components/Register/Register';
import Home from './pages/Home';
import TVSection from './pages/TVSection';
import MoviesSection from './pages/MoviesSection';
import DetailMovie from './pages/DetailMovie';
import Profile from './pages/Profile';
import Payment from './pages/Payment';
import Transaction from './pages/IncomingTransaction';
import ListMovie from './pages/ListMovie';

import PrivateRoute from './components/Routing/PrivateRoute';
import NotFound from './components/404/NotFound';

import ScrollToTop from './components/utils/ScrollToTop';

function App() {
	const [ isLogin, setLogin ] = useState(false);

	const [ user, setuUser ] = useState({
		id: '',
		name: '',
		email: '',
		role: ''
	});

	const [ modalLogin, setModalLogin ] = useState(false);
	const [ modalRegister, setModalRegister ] = useState(false);
	const [ error, setError ] = useState('');

	const showModalLogin = () => {
		setModalLogin(!modalLogin);
		setModalRegister(false);
	};

	const showModalRegister = () => {
		setModalRegister(!modalRegister);
		setModalLogin(false);
	};

	const handleLogout = () => {
		setLogin(false);
	};

	const userLogin = [
		{
			id: 1,
			name: 'Fadhil Darma Putera Z',
			email: 'fadhildarma13@gmail.com',
			password: 'admin',
			role: 'admin'
		},
		{
			id: 2,
			name: 'User Biasa',
			email: 'user@gmail.com',
			password: 'user',
			role: 'user'
		}
	];

	const handleLogin = (payload) => {
		const isValid = userLogin.filter(
			(user) => user.email == payload.email && user.password == payload.password
		);

		if (isValid.length) {
			setLogin(true);
			setModalLogin(false);
		} else {
			setError('invalid email and password');
			console.log('invalid email and password');
		}
	};

	return (
		<div className="app">
			<Router>
				<Navbar
					isLogin={isLogin}
					showModalLogin={showModalLogin}
					showModalRegister={showModalRegister}
					handleLogout={handleLogout}
				/>
				<ScrollToTop>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/tv-series" component={TVSection} />
						<Route exact path="/movies" component={MoviesSection} />
						<Route exact path="/detail/:id" component={DetailMovie} />
						<PrivateRoute
							exact
							path="/profile"
							component={Profile}
							isLogin={isLogin}
						/>
						<PrivateRoute
							exact
							path="/payment"
							component={Payment}
							isLogin={isLogin}
						/>
						<PrivateRoute
							exact
							path="/transaction"
							component={Transaction}
							isLogin={isLogin}
						/>
						<PrivateRoute
							exact
							path="/movie-list"
							component={ListMovie}
							isLogin={isLogin}
						/>
						<Route component={NotFound} />
					</Switch>
				</ScrollToTop>

				{modalLogin && (
					<ModalLogin
						showModalLogin={showModalLogin}
						handleLogin={handleLogin}
						error={error}
						modalLogin={modalLogin}
					/>
				)}
				{modalRegister && (
					<ModalRegister
						showModalRegister={showModalRegister}
						modalRegister={modalRegister}
					/>
				)}
			</Router>
		</div>
	);
}

export default App;
