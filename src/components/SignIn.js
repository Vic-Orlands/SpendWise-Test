import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/SignIn.css';

class SignIn extends Component {
	render() {
		return (
			<main className="sign-in-container">
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
					</div>
				</section>

				<article className="signin-form">
					<div>
						<h1>Sign in</h1>
						<h4>Welcome Back</h4>

						<form>
							<label htmlFor="username" className="label">
								Username
								<input type="text" />
							</label>
							<label htmlFor="password" className="label">
								Password
								<input type="text" />
							</label>

							<div className="forgot">
								<input type="checkbox" />
								<label htmlFor="checkbox">Remember Me</label>

								<p href="#">Forgot Password?</p>
							</div>

							<button>Sign In</button>
						</form>

						<p id="par">
							Don't have an account?<span>
								<NavLink to="/signup" id="link">
									Click here
								</NavLink>
							</span>
						</p>
					</div>
				</article>

				<footer className="foot-design">
					<div className="foot-design-sm" />
				</footer>
			</main>
		);
	}
}

export default SignIn;
