import React, { Component } from 'react';
import './styles.css';

export default class index extends Component {
	render() {
		return (
			<div className="sidemenu-container">
				<img src={require('../../../assets/logo-bg-white.png')} alt="logo" id="side-logo" />

				<ul>
					<div className="first">
						<img src={require('../../../assets/dash.png')} alt="logo" />
						<li>Dashboard</li>
					</div>

					<div>
						<img src={require('../../../assets/wallet.png')} alt="logo" id="icon" />
						<li>Expense</li>
					</div>

					<div>
						<img src={require('../../../assets/coin.png')} alt="logo" id="icon" />
						<li>Budget</li>
					</div>

					<div>
						<img src={require('../../../assets/goal.png')} alt="logo" id="icon" />
						<li>Goals</li>
					</div>
				</ul>

				<footer>
					<ul>
							<div>
						<img src={require('../../../assets/settings.png')} alt="logo" id="icon" />
						<li>Setting</li>
					</div>

					<div>
						<img src={require('../../../assets/logout.png')} alt="logo" id="icon" />
						<li>Sign out</li>
					</div>
				</ul>
				<div className="blue"></div>
				<div className="orange"></div>
				</footer>
			</div>
		);
	}
}
