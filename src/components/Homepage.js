import React, { Component } from 'react';
import '../styles/Homepage.css';
import Modal from './Modal';

import { RiAppleFill } from 'react-icons/ri';

class Homepage extends Component {
	state = {
		open: true
	};

	openModal = (e) => {
		e.preventDefault();
		this.setState({
			open: !this.state.open
		});
	};

	render() {
		return (
			<main>
				<section className={'top-section ' + (!this.state.open ? 'modal-overlay' : '')}>
					<div className="intro-wrapper">
						<img src={require('../assets/logo.png')} alt="logo_img" />

						<h1>
							Know exactly where your money goes and
							<span> manage</span> your expenses better.
						</h1>

						<h3>Our app let's you automatically track your expenses and budgets.</h3>
						<h3>Let's help you be on top of your finances. Fill the form below and we</h3>
						<h3>could grant you early VIP access.</h3>

						<button
							onClick={(e) => {
								this.openModal(e);
							}}
						>
							Notify me
						</button>
					</div>
				</section>

				<section className={'bottom-section ' + (!this.state.open ? 'modal-overlay-bottom' : '')}>
					<img className="overlap-img imgOne" src={require('../assets/Dashboard.png')} alt="phone_img" />

					<div className="playstore">
						<h3>Coming Soon on</h3>

						<div className="stores">
							<div className="android">
								<img
									className="playstore_img"
									src={require('../assets/playstore.jpg')}
									alt="phone_img"
								/>
								<div>
									<h4>Android APP ON</h4>
									<h2>Google play</h2>
								</div>
							</div>

							<div className="ios">
								<RiAppleFill id="font" />
								<div>
									<h4>Download on the</h4>
									<h2>App Store </h2>
								</div>
							</div>
						</div>
					</div>

					<img className="overlap-img imgTwo" src={require('../assets/Expenses.png')} alt="phone_img" />
				</section>

				<Modal open={this.state.open} onClose={this.openModal} />
			</main>
		);
	}
}

export default Homepage;
