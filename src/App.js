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

import ScrollToTop from './components/utils/ScrollToTop';

function App() {
	const [ isLogin, setLogin ] = useState(false);
	const [ modalLogin, setModalLogin ] = useState(false);
	const [ modalRegister, setModalRegister ] = useState(false);

	const showModalLogin = () => {
		setModalLogin(!modalLogin);
		setModalRegister(false);
	};

	const showModalRegister = () => {
		setModalRegister(!modalRegister);
		setModalLogin(false);
	};

	const handleLogin = () => {
		setLogin(true);
		setModalLogin(false);
	};

	return (
		<div className="app">
			<Router>
				<Navbar
					isLogin={isLogin}
					showModalLogin={showModalLogin}
					showModalRegister={showModalRegister}
				/>
				<ScrollToTop>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/tv-series" component={TVSection} />
						<Route exact path="/movies" component={MoviesSection} />
						<Route exact path="/detail/:id" component={DetailMovie} />
					</Switch>
				</ScrollToTop>

				{modalLogin && (
					<ModalLogin
						showModalLogin={showModalLogin}
						handleLogin={handleLogin}
					/>
				)}
				{modalRegister && <ModalRegister showModalRegister={showModalRegister} />}
			</Router>
		</div>
	);
}

export default App;
