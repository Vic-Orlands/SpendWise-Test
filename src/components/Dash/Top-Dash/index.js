import React, { Component } from 'react';
import './styles.css';

import { IoIosAddCircle } from 'react-icons/io';
export default class index extends Component {
	state = {
		percentage1: 50,
		percentage2: 20,
		percentage3: 70,
		user: ''
	};

	componentDidMount = () => {
		let user = JSON.parse(localStorage.getItem('usertoken'));
		if (user) {
			this.setState({
				user: user.user
			});
		} else {
			this.setState({
				user: 'User'
			});
		}
	};

	render() {
		return (
			<section className="main-dash">
				<header>
					<h1>Hello, {this.state.user}</h1>

					<div className="aside">
						<IoIosAddCircle id="addFnt" />
						<h3>Add Bank Account</h3>
					</div>
				</header>

				<section className="top-box-container">
					<div className="first-box">
						<img src={require('../assets/box.png')} alt="box-img" />

						<div className="first-box-content">
							<div className="spent">
								<h4>Spent</h4>
								<h5>June</h5>
							</div>
							<h2>NGN 40,000</h2>

							<div className="progress-bar">
								<div className="filler" style={{ width: `${this.state.percentage1}%` }} />
							</div>

							<div className="amt">
								<div className="tday">
									<h5>-N7000</h5>
									<h6>today</h6>
								</div>
								<div className="bdget">
									<h5>NGN 85,000</h5>
									<h6>Budget</h6>
								</div>
							</div>
						</div>
					</div>

					<div>
						<div className="brown-box">
							<div className="grad1" />
							<div className="grad2" />
							<div>
								<h3>My Finance</h3>
								<p>Click to view account summary</p>
								<div className="view">
									<h6>View</h6>
									<img src={require('../assets/forward.png')} alt="img" />
								</div>
							</div>
						</div>

						<div className="green-box">
							<div className="grad11" />
							<div className="grad12" />

							<div className="green-flex">
								<div>
									<h2>7</h2>
									<h3>Set Budgets</h3>
								</div>

								<div id="harsh">
									<h2>3</h2>
									<h3>Exceeded</h3>
								</div>

								<div>
									<h2>4</h2>
									<h3>On track</h3>
								</div>
							</div>
						</div>
					</div>

					<div className="graduate">
						<img src={require('../assets/graduate.png')} alt="img" />
						<h2>Masters Program</h2>
						<h4>Education</h4>
						<div>
							<p>N1,832,000</p>
							<p>N5,832,000</p>
						</div>
						<div className="progress-bar2">
							<div className="filler2" style={{ width: `${this.state.percentage2}%` }} />
						</div>{' '}
					</div>

					<div className="graduate">
						<img src={require('../assets/graduate.png')} alt="img" />
						<h2>Masters Program</h2>
						<h4>Education</h4>
						<div>
							<p>N1,832,000</p>
							<p>N5,832,000</p>
						</div>
						<div className="progress-bar3">
							<div className="filler3" style={{ width: `${this.state.percentage3}%` }} />
						</div>{' '}
					</div>
				</section>
			</section>
		);
	}
}
