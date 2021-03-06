import React, { Component, createRef } from 'react';
import { NavLink } from 'react-router-dom';
import './SignIn.css';

import Axios from 'axios';
import logo from '../../../assets/logo.png';
import goal from '../../../assets/goal.png';
import coin from '../../../assets/coin.png';
import man from '../../../assets/man.png';
import wallet from '../../../assets/wallet.png';

class SignIn extends Component {
	state = {
		show: true,
		formValues: {
			username: '',
			password: ''
		},
		formErrors: {
			password: ''
		},
		formValidity: {
			password: false
		},
		isSubmitting: false,
		isChecked: false
	};

	showPassword = (e) => {
		e.preventDefault();
		this.setState({
			show: !this.state.show
		});
	};

	handleInputChange = ({ target }) => {
		const { formValues } = this.state;
		formValues[target.name] = target.value;
		this.setState({ formValues });
		this.handleValidation(target);
	};

	onHandleCheckbox = (event) => {
		this.setState({
			isChecked: event.target.checked
		});
	};

	handleValidation = (target) => {
		const { name, value } = target;
		const fieldValidationErrors = this.state.formErrors;
		const validity = this.state.formValidity;
		const isPassword = name === 'password';

		validity[name] = value.length > 0;
		fieldValidationErrors[name] = validity[name] ? '' : `${name} is required`;

		if (validity[name]) {
			if (isPassword) {
				validity[name] = value.length >= 7;
				fieldValidationErrors[name] = validity[name] ? '' : `${name} must be above 7 characters`;
			}
		}

		this.setState({
			formErrors: fieldValidationErrors,
			formValidity: validity
		});
	};

	//---------------input ref to take user to top input if user exists-------------
	inputRef = createRef();

	handleSubmit = (e) => {
		e.preventDefault();
		const { formValues, formValidity, isChecked } = this.state;

		const currentUser = {
			username: formValues.username.toLowerCase(),
			password: formValues.password
		};

		if (Object.values(formValidity).every(Boolean)) {
			this.setState({
				isSubmitting: true
			});
			Axios.post('https://www.spendwise.ng/api/accounts/login/', currentUser, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then((res) => {
					if (res.status === 200) {
						if (isChecked) {
							localStorage.setItem('authToken', JSON.stringify(res.data.token));
							localStorage.setItem('USER', JSON.stringify(res.data));
						} else {
							sessionStorage.setItem('authToken', JSON.stringify(res.data.token));
							sessionStorage.setItem('USER', JSON.stringify(res.data));
						}
						this.props.history.push('/');
					} else return null;
				})
				.catch((err) => {
					this.setState({
						formErrors: {
							password: 'Incorrect username and password'
						},
						isSubmitting: false
					});
					this.inputRef.current.focus();
				});
		} else {
			for (let key in formValues) {
				let target = {
					name: key,
					value: formValues[key]
				};
				this.handleValidation(target);
			}
		}
	};

	render() {
		const { formErrors, formValues, isSubmitting, isChecked } = this.state;
		return (
			<main className="sign-in-container">
				<section className="left">
					<img src={logo} alt="img" className="logo" />

					<div className="flex-icons">
						<div className="wallet-bg">
							<img src={wallet} alt="img" className="wallet" />
						</div>
						<div className="goal-bg">
							<img src={goal} alt="img" className="goal" />
						</div>
						<div className="coin-bg">
							<img src={coin} alt="img" className="coin" />
						</div>
						<img src={man} alt="img_man" className="man" />
					</div>
				</section>

				<article className="signin-form">
					<div>
						<h1>Sign in</h1>
						<h4>Welcome Back</h4>

						<form onSubmit={this.handleSubmit}>
							<label htmlFor="username" className="label">
								Username
								<input
									type="text"
									name="username"
									value={formValues.username}
									onChange={this.handleInputChange}
									autoComplete="username"
									ref={this.inputRef}
								/>
							</label>

							{this.state.show ? (
								<label htmlFor="password" className="label pass">
									Password
									{formErrors.password ? <p id="errorMsg">{formErrors.password}</p> : ''}
									<div className="passInput">
										<input
											type="password"
											name="password"
											value={formValues.password}
											onChange={this.handleInputChange}
											autoComplete="current-password"
										/>
										<p onClick={this.showPassword}>Show</p>
									</div>
								</label>
							) : (
								<label htmlFor="password" className="label pass">
									Password
									{formErrors.password ? <p id="errorMsg">{formErrors.password}</p> : ''}
									<div className="passInput">
										<input
											type="text"
											name="password"
											value={formValues.password}
											onChange={this.handleInputChange}
											autoComplete="current-password"
										/>
										<p onClick={this.showPassword}>Hide</p>
									</div>
								</label>
							)}

							<div className="forgot">
								<input type="checkbox" checked={isChecked} onChange={this.onHandleCheckbox} />
								<label htmlFor="checkbox">Remember Me</label>

								<div>
									<NavLink to="/forgotUsername" id="forgotLlink">
										<p>Forgot Username?</p>
									</NavLink>
									<NavLink to="/forgot" id="forgotLlink">
										<p id="secondPar">Forgot Password?</p>
									</NavLink>
								</div>
							</div>
							<button disabled={!formValues.username || !formValues.password}>
								{!isSubmitting ? 'Sign In' : 'Logging in...'}
							</button>
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
