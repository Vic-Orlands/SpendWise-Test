import React, { Component } from 'react';
import './Forgot.css';

class Forgot extends Component {
	render() {
		return (
			<main className="forgot-container">
				<section className="left">
					<img src={require('../../../assets/logo.png')} alt="img" className="logo" />

					<div className="flex-icons">
						<div className="wallet-bg">
							<img src={require('../../../assets/wallet.png')} alt="img" className="wallet" />
						</div>
						<div className="goal-bg">
							<img src={require('../../../assets/goal.png')} alt="img" className="goal" />
						</div>
						<div className="coin-bg">
							<img src={require('../../../assets/coin.png')} alt="img" className="coin" />
						</div>
						<img src={require('../../../assets/man.png')} alt="img_man" className="man" />
					</div>
				</section>

				<article className="forgot-form">
					<div>
						<h1>Forgot Password?</h1>
						<h4>Enter your email address to get a reset URL via email.</h4>

						<form>
							<label htmlFor="username" className="label">
								Enter Email Address
								<input type="text" />
							</label>

							<button>Reset Password</button>
						</form>
					</div>
				</article>

				<footer className="foot-design">
					<div className="foot-design-sm" />
				</footer>
			</main>
		);
	}
}

export default Forgot;
