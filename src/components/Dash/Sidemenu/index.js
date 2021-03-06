import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './styles.css';

import goal from '../assets/goal.png';
import coin from '../assets/coins.png';
import wallet from '../assets/wallet.png';
import money from '../assets/money.png';
import dash from '../../../assets/dash.png';
import logout from '../../../assets/logout.png';
import settings from '../../../assets/settings.png';
import logo from '../../../assets/logo-bg-white.png';

export default () => {
	const history = useHistory();

	const onLogOut = () => {
		localStorage.clear();
		sessionStorage.clear();
		history.push('/signin');
	};

	return (
		<div className="sidemenu-container">
			<img src={logo} alt="logo" id="side-logo" />

			<ul className="sidemenu-list">
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

				<NavLink to="/page/goals" className="div" activeClassName="active">
					<img src={goal} alt="logo" id="icon" />
					<li>Goals</li>
				</NavLink>

				<NavLink to="/page/finance" className="div" activeClassName="active">
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
	);
};
