import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/SignUp.css';

class SignUp extends Component {
	render() {
		return (
			<main className="sign-up-container">
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

				<article className="signup-form">
					<div>
						<h1>Sign up</h1>
						<h4>Welcome</h4>

						<form>
							<label htmlFor="username" className="label">
								Username
								<input type="text" />
							</label>

							<label htmlFor="email" className="label">
								Email
								<input type="email" />
							</label>

							<label htmlFor="number" className="label">
								Phone number
								<input type="text" />
							</label>

							<label htmlFor="state" className="label">
								State
								<select>
									<option value="abia">Select State</option>
									<option value="abia">Abia</option>
									<option value="abia">Abia</option>
								</select>
							</label>

							<label htmlFor="password" className="label">
								Password
								<input type="password" />
							</label>

							<label htmlFor="confirm_password" className="label">
								Confirm Password
								<input type="password" />
							</label>

							<button>Sign Up</button>
						</form>

						<p id="par">
							Already have an account?<span>
								<NavLink to="/" id="link">
									Log in
								</NavLink>
							</span>
						</p>
					</div>

					<footer className="foot-design">
						<div className="foot-design-sm" />
					</footer>
				</article>
			</main>
		);
	}
}

export default SignUp;
