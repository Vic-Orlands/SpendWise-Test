import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './styles.css';

import { FaBars } from 'react-icons/fa';
import goal from '../assets/goal.png';
import coin from '../assets/coins.png';
import wallet from '../assets/wallet.png';
import vector from '../assets/Vector.png';
import money from '../assets/money.png';
import dash from '../../../assets/dash.png';
import logout from '../../../assets/logout.png';
import settings from '../../../assets/settings.png';
import nav from '../../../assets/logo-bg-white.png';

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
			setUser('Not verified');
			setUsername('');
		}
	}, []);

	const history = useHistory();

	const onLogOut = () => {
		localStorage.clear();
		sessionStorage.clear();
		history.push('/signin');
	};

	return (
		<nav>
			<FaBars id="icon-bar" onClick={() => setOpen((open) => !open)} />
			{open && (
				<div className="nav-sidemenu">
					<img src={nav} alt="logo" id="side-logo" />

					<ul className="nav-side-list">
						<NavLink to="/" className="div" activeClassName="active" id="link">
							<img src={dash} alt="logo" id="icon" />
							<li>Dashboard</li>
						</NavLink>

						<NavLink to="/page/expense" className="div" activeClassName="active">
							<img src={money} alt="logo" id="icon" />
							<li>Expense</li>
						</NavLink>

						<NavLink to="/page/budget" className="div" activeClassName="active">
							<img src={coin} alt="logo" id="icon" />
							<li>Budget</li>
						</NavLink>

						<NavLink to="/gff" className="div" activeClassName="active">
							{' '}
							<img src={goal} alt="logo" id="icon" />
							<li>Goals</li>
						</NavLink>

						<NavLink to="/page/finance" className="div" activeClassName="active">
							{' '}
							<img src={wallet} alt="logo" id="icon" />
							<li>My finance</li>
						</NavLink>
					</ul>

					<footer>
						<ul className="footer-list">
							<div>
								<img src={settings} alt="logo" id="icon" />
								<li>Settings</li>
							</div>

							<div onClick={onLogOut}>
								<img src={logout} alt="logo" id="icon" />
								<li>Sign out</li>
							</div>
						</ul>
						<div className="blue" />
						<div className="orange" />
					</footer>
				</div>
			)}

			<img src={vector} alt="notifications_img" id="nav-icon" />

			<div>
				<h1>{username}</h1>
				<p>{user}</p>
			</div>
		</nav>
	);
};

export default Nav;
