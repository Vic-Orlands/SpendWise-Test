import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

import { FaBars } from 'react-icons/fa';

const Nav = () => {
	const [ user, setUser ] = useState(null);
	const [ username, setUsername ] = useState(null);
	const [ open, setOpen ] = useState(false);

	useEffect(() => {
		let user = JSON.parse(localStorage.getItem('USER')) || JSON.parse(sessionStorage.getItem('USER'));
		let first_name = user.first_name.charAt(0);
		let surname = user.surname.charAt(0);
		let abbrevName = first_name.concat(surname);

		if (user) {
			setUser(user.user);
			setUsername(abbrevName);
		} else {
			setUser('User');
		}
	}, []);

	const onLogOut = (e) => {
		e.preventDefault();
		localStorage.clear();
		sessionStorage.clear();
		window.location.reload();
	};

	return (
		<nav>
			<FaBars id="icon-bar" onClick={() => setOpen((open) => !open)} />
			{open && (
				<div className="nav-sidemenu">
					<img src={require('../../../assets/logo-bg-white.png')} alt="logo" id="side-logo" />

					<ul className="nav-side-list">
						<NavLink to="/" className="div" activeClassName="active" id="link">
							<img src={require('../../../assets/dash.png')} alt="logo" id="icon" />
							<li>Dashboard</li>
						</NavLink>

						<NavLink to="/gff" className="div" activeClassName="active">
							<img src={require('../assets/money.png')} alt="logo" id="icon" />
							<li>Expense</li>
						</NavLink>

						<NavLink to="/page/budget" className="div" activeClassName="active">
							<img src={require('../assets/coins.png')} alt="logo" id="icon" />
							<li>Budget</li>
						</NavLink>

						<NavLink to="/gff" className="div" activeClassName="active">
							{' '}
							<img src={require('../assets/goal.png')} alt="logo" id="icon" />
							<li>Goals</li>
						</NavLink>

						<NavLink to="/gff" className="div" activeClassName="active">
							{' '}
							<img src={require('../assets/wallet.png')} alt="logo" id="icon" />
							<li>My finance</li>
						</NavLink>
					</ul>

					<footer>
						<ul className="footer-list">
							<div>
								<img src={require('../../../assets/settings.png')} alt="logo" id="icon" />
								<li>Settings</li>
							</div>

							<div onClick={onLogOut}>
								<img src={require('../../../assets/logout.png')} alt="logo" id="icon" />
								<li>Sign out</li>
							</div>
						</ul>
						<div className="blue" />
						<div className="orange" />
					</footer>
				</div>
			)}

			<img src={require('../assets/Vector.png')} alt="notifications_img" id="nav-icon" />

			<div>
				<h1>{username}</h1>
				<p>{user}</p>
			</div>
		</nav>
	);
};

export default Nav;
