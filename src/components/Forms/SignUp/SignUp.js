import React, { Component, createRef } from 'react';
import { NavLink } from 'react-router-dom';
import './SignUp.css';

import axios from 'axios';
import logo from '../../../assets/logo.png';
import goal from '../../../assets/goal.png';
import coin from '../../../assets/coin.png';
import man from '../../../assets/man.png';
import wallet from '../../../assets/wallet.png';

class SignUp extends Component {
	state = {
		showPassword: true,
		showConfirmPassword: true,
		formValues: {
			username: '',
			email: '',
			phone: '',
			stat: '',
			password: '',
			password2: ''
		},
		formErrors: {
			username: '',
			email: '',
			phone: '',
			stat: '',
			password: '',
			password2: ''
		},
		formValidity: {
			username: false,
			email: false,
			phone: false,
			password: false,
			password2: false
		},
		isSubmitting: false,
		submitted: ''
	};

	showPassword = (e) => {
		e.preventDefault();
		this.setState({
			showPassword: !this.state.showPassword
		});
	};

	showConfirmPassword = (e) => {
		e.preventDefault();
		this.setState({
			showConfirmPassword: !this.state.showConfirmPassword
		});
	};

	handleInputChange = ({ target }) => {
		const { formValues } = this.state;
		formValues[target.name] = target.value;
		this.setState({ formValues });
		this.handleValidation(target);
	};

	handleValidation = (target) => {
		//Rules
		//username is unique and lowercase
		//email is unique
		//password must be 6 and above
		//passwrd2 must be equal passwrd
		//400 error is username or email exists

		const { name, value } = target;
		const fieldValidationErrors = this.state.formErrors;
		const validity = this.state.formValidity;
		const isUsername = name === 'username';
		const isEmail = name === 'email';
		const isPhone = name === 'phone';
		const isPassword = name === 'password';
		const isSamePassword = name === 'password2';

		const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		const phoneTest = /^\d{11}$/;
		const passwrdTest = /^.*(?=.{7,})(?=.*\d).*$/;

		validity[name] = value.length > 0;
		fieldValidationErrors[name] = validity[name] ? '' : `${name} is required`;

		if (validity[name]) {
			if (isUsername) {
				validity[name] = value.length >= 1;
				fieldValidationErrors[name] = validity[name] ? '' : `${name} must be a valid username`;
			}
			if (isEmail) {
				validity[name] = emailTest.test(value);
				fieldValidationErrors[name] = validity[name] ? '' : `${name} must be a valid email`;
			}
			if (isPhone) {
				validity[name] = phoneTest.test(value);
				fieldValidationErrors[name] = validity[name] ? '' : `${name} must be a valid phone number`;
			}
			if (isPassword) {
				validity[name] = passwrdTest.test(value);
				fieldValidationErrors[name] = validity[name] ? '' : `must be min of 7 characters and contain number`;
			}
			if (isSamePassword) {
				validity[name] = value === this.state.formValues.password;
				fieldValidationErrors[name] = validity[name] ? '' : `${name} doesn't match`;
			}
		}

		this.setState({
			formErrors: fieldValidationErrors,
			formValidity: validity
		});
	};

	//---------------input ref to take user to first input if user exists-------------
	inputRef = createRef();
	emailRef = createRef();

	onSubmit = (e) => {
		e.preventDefault();
		const { formValues, formValidity } = this.state;

		let newUser = {
			username: formValues.username.toLowerCase(),
			email: formValues.email,
			phone: formValues.phone,
			state: formValues.stat,
			password: formValues.password,
			password2: formValues.password2
		};

		if (Object.values(formValidity).every(Boolean)) {
			this.setState({
				isSubmitting: true
			});
			axios
				.post('https://www.spendwise.ng/api/accounts/register/', newUser, {
					headers: {
						'Content-Type': 'application/json'
					}
				})
				.then((res) => {
					if (res.status === 201) {
						this.setState({
							isSubmitting: false,
							submitted: 'Registered successfully!, please proceed to login'
						});
					} else return null;
				})
				.catch((err) => {
					if (err.response.data.username && err.response.data.email) {
						this.setState({
							formErrors: {
								email: 'Email already exists, please login'
							},
							isSubmitting: false
						});
						this.emailRef.current.focus();
					} else if (err.response.data.username) {
						this.setState({
							formErrors: {
								username: 'A user with this username already exists'
							},
							isSubmitting: false
						});
						this.inputRef.current.focus();
					}
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
		const { formErrors, formValues, isSubmitting, submitted } = this.state;
		const isEnabled =
			!formValues.username ||
			!formValues.email ||
			!formValues.phone ||
			!formValues.password ||
			!formValues.password2;
		return (
			<main className="sign-up-container">
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

				<article className="signup-form">
					<div>
						<h1>Sign up</h1>
						<h4>Welcome</h4>

						<form onSubmit={this.onSubmit}>
							<label htmlFor="username" className={`label ${formErrors.username ? 'is-invalid' : ''}`}>
								Username
								{formErrors.username ? <p id="errorMsg">{formErrors.username}</p> : ''}
								<input
									type="text"
									name="username"
									value={formValues.username}
									onChange={this.handleInputChange}
									autoComplete="username"
									ref={this.inputRef}
								/>
							</label>

							<label htmlFor="email" className="label">
								Email
								{formErrors.email ? <p id="errorMsg">{formErrors.email}</p> : ''}
								<input
									type="email"
									name="email"
									value={formValues.email}
									onChange={this.handleInputChange}
									autoComplete="email"
									ref={this.emailRef}
								/>
							</label>

							<label htmlFor="number" className="label">
								Phone number
								{formErrors.phone ? <p id="errorMsg">{formErrors.phone}</p> : ''}
								<input
									type="tel"
									name="phone"
									value={formValues.phone}
									onChange={this.handleInputChange}
									autoComplete="phone"
								/>
							</label>

							<label htmlFor="state" className="label">
								State
								<select name="stat" value={formValues.stat} onChange={this.handleInputChange}>
									<option>Select State</option>
									<option value="abia">Abia</option>
									<option value="adamawa">Adamawa</option>
									<option value="akwa ibom">Akwa Ibom</option>
									<option value="anambra">Anambra</option>
									<option value="bauchi">Bauchi</option>
									<option value="bayelsa">Bayelsa</option>
									<option value="benue">Benue</option>
									<option value="borno">Borno</option>
									<option value="cross rivers">Cross River</option>
									<option value="delta">Delta</option>
									<option value="ebonyi">Ebonyi</option>
									<option value="edo">Edo</option>
									<option value="ekiti">Ekiti</option>
									<option value="enugu">Enugu</option>
									<option value="abuja">FCT - Abuja</option>
									<option value="Gombe">Gombe</option>
									<option value="Imo">Imo</option>
									<option value="Jigawa">jigawa</option>
									<option value="Kaduna">Kaduna</option>
									<option value="Kano">Kano</option>
									<option value="Katsina">Katsina</option>
									<option value="Kebbi">Kebbi</option>
									<option value="Kogi">Kogi</option>
									<option value="Kwara">Kwara</option>
									<option value="Lagos">Lagos</option>
									<option value="Nasarawa">Nasarawa</option>
									<option value="Niger">Niger</option>
									<option value="Ogun">Ogun</option>
									<option value="Ondo">Ondo</option>
									<option value="Osun">Osun</option>
									<option value="Oyo">Oyo</option>
									<option value="Plateau">Plateau</option>
									<option value="Rivers">Rivers</option>
									<option value="Sokoto">Sokoto</option>
									<option value="Taraba">Taraba</option>
									<option value="Yobe">Yobe</option>
									<option value="Zamfara">Zamfara</option>
								</select>
							</label>

							{this.state.showPassword ? (
								<label htmlFor="password" className="label pass">
									Password
									{this.state.formErrors.password ? <p id="errorMsg">{formErrors.password}</p> : ''}
									<div className="passInput">
										<input
											type="password"
											name="password"
											value={formValues.password}
											onChange={this.handleInputChange}
											autoComplete="new-password"
										/>
										<p onClick={this.showPassword}>Show</p>
									</div>
								</label>
							) : (
								<label htmlFor="password" className="label pass">
									Password
									{formErrors.password ? <p id="errorMsg">{formErrors.password}</p> : ''}{' '}
									<div className="passInput">
										<input
											type="text"
											name="password"
											value={formValues.password}
											onChange={this.handleInputChange}
											autoComplete="new-password"
										/>
										<p onClick={this.showPassword}>Hide</p>
									</div>
								</label>
							)}

							{this.state.showConfirmPassword ? (
								<label htmlFor="password2" className="label pass">
									Confirm Password
									{formErrors.password2 ? <p id="errorMsg">{formErrors.password2}</p> : ''}
									<div className="passInput">
										<input
											type="password"
											name="password2"
											value={formValues.password2}
											onChange={this.handleInputChange}
											autoComplete="new-password"
										/>
										<p onClick={this.showConfirmPassword}>Show</p>
									</div>
								</label>
							) : (
								<label htmlFor="password2" className="label pass">
									Confirm Password
									{formErrors.password2 ? <p id="errorMsg">{formErrors.password2}</p> : ''}
									<div className="passInput">
										<input
											type="text"
											name="password2"
											value={formValues.password2}
											onChange={this.handleInputChange}
											autoComplete="new-password"
										/>
										<p onClick={this.showConfirmPassword}>Hide</p>
									</div>
								</label>
							)}

							<button disabled={isEnabled}>{!isSubmitting ? 'Sign Up' : 'Signing up now...'}</button>
							{submitted ? (
								<center style={{ marginTop: 10, fontFamily: 'sans-serif' }}>{submitted}</center>
							) : (
								''
							)}
						</form>

						<p id="par">
							Already have an account?<span>
								<NavLink to="/signin" id="link">
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
