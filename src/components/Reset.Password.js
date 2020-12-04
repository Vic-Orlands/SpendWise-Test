import React, { Component } from 'react';
import '../styles/Reset.css';

class Reset extends Component {
	render() {
		return (
			<main className="reset-container">
				<section className="left">
					<img src={require('../assets/logo.png')} alt="img" className="logo" />

					<div className="flex-icons">
						<div className="wallet-bg">
							<img src={require('../assets/wallet.png')} alt="img" className="wallet" />
						</div>
						<div className="goal-bg">
							<img src={require('../assets/goal.png')} alt="img" className="goal" />
						</div>
						<div className="coin-bg">
							<img src={require('../assets/coin.png')} alt="img" className="coin" />
						</div>
						<img src={require('../assets/man.png')} alt="img_man" className="man" />
					</div>
				</section>

				<article className="reset-form">
					<div>
						<h1>Reset Password</h1>

						<form>
							<label htmlFor="username" className="label">
								Enter New Password
								<input type="text" />
							</label>
							<label htmlFor="password" className="label">
								Confirm New Password
								<input type="text" />
							</label>

							<button>Save New Password</button>
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

export default Reset;
