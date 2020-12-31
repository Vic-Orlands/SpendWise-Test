import React, { Component } from 'react';
import './styles.css';
// import { NavLink } from 'react-router-dom';

export default class index extends Component {
	onLogOut = (e) => {
		e.preventDefault();
		localStorage.clear();
		sessionStorage.clear();
		window.location.reload()
	};

	render() {
		return (
			<div className="sidemenu-container">
				<img src={require('../../../assets/logo-bg-white.png')} alt="logo" id="side-logo" />

				<ul className="sidemenu-list">
					<div className="first">
						<img src={require('../../../assets/dash.png')} alt="logo" />
						<li>Dashboard</li>
					</div>

					<div>
						<img src={require('../assets/money.png')} alt="logo" id="icon" />
						<li>Expense</li>
					</div>

					<div>
						<img src={require('../assets/coins.png')} alt="logo" id="icon" />
						<li>Budget</li>
					</div>

					<div>
						<img src={require('../assets/goal.png')} alt="logo" id="icon" />
						<li>Goals</li>
					</div>

					<div>
						<img src={require('../assets/wallet.png')} alt="logo" id="icon" />
						<li>My finance</li>
					</div>
				</ul>

				<footer>
					<ul className="footer-list">
						<div>
							<img src={require('../../../assets/settings.png')} alt="logo" id="icon" />
							<li>Settings</li>
						</div>

						{/* <NavLink to="/signin" id="link"> */}
							<div onClick={this.onLogOut}>
								<img src={require('../../../assets/logout.png')} alt="logo" id="icon" />
								<li>Sign out</li>
							</div>
						{/* </NavLink> */}
					</ul>
					<div className="blue" />
					<div className="orange" />
				</footer>
			</div>
		);
	}
}
