import React, { Component } from 'react';
import './Reset.css';

import Axios from 'axios';

class Reset extends Component {
	state = {
		show: true,
		formValues: {
			username: '',
			otp: '',
			password: '',
			confirm_password: ''
		},
		formErrors: {
			username: '',
			otp: '',
			password: '',
			confirm_password: ''
		},
		formValidity: {
			password: false
		},
		isSubmitting: false,
		submitted: false
	};

	showPassword = (e) => {
		e.preventDefault();
		this.setState({
			show: !this.state.show
		});
	};

	componentDidMount = () => {
		let userName = JSON.parse(localStorage.getItem('user details'));
		if (userName) {
			this.setState({
				formValues: {
					username: userName.username,
					otp: '',
					password: '',
					confirm_password: ''
				}
			});
		} else
			this.setState({
				formValues: {
					username: '',
					otp: '',
					password: '',
					confirm_password: ''
				}
			});
	};

	handleInputChange = ({ target }) => {
		const { formValues } = this.state;
		formValues[target.name] = target.value;
		this.setState({ formValues });
		this.handleValidation(target);
	};

	handleValidation = (target) => {
		const { name, value } = target;
		const fieldValidationErrors = this.state.formErrors;
		const validity = this.state.formValidity;
		const isUsername = name === 'username';
		const isOtp = name === 'otp';
		const isPassword = name === 'password';
		const isSamePassword = name === 'confirm_password';

		const otpTest = /^\d{6}$/;
		const passwrdTest = /^.*(?=.{7,})(?=.*\d).*$/;

		validity[name] = value.length > 0;
		fieldValidationErrors[name] = validity[name] ? '' : `Required`;

		if (validity[name]) {
			if (isUsername) {
				validity[name] = value.length > 0;
				fieldValidationErrors[name] = validity[name] ? '' : `${name} must be a valid username`;
			}
			if (isOtp) {
				validity[name] = otpTest.test(value);
				fieldValidationErrors[name] = validity[name] ? '' : `${name} is not valid`;
			}
			if (isPassword) {
				validity[name] = passwrdTest.test(value);
				fieldValidationErrors[name] = validity[name] ? '' : `min of 7 and contain numbers`;
			}
			if (isSamePassword) {
				validity[name] = value === this.state.formValues.password;
				fieldValidationErrors[name] = validity[name] ? '' : `password doesn't match`;
			}
		}

		this.setState({
			formErrors: fieldValidationErrors,
			formValidity: validity
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const { formValidity, formValues } = this.state;
		const currentUser = {
			username: formValues.username.toLowerCase(),
			otp: formValues.otp,
			password: formValues.password,
			confirm_password: formValues.confirm_password
		};

		if (Object.values(formValidity).every(Boolean)) {
			this.setState({
				isSubmitting: true
			});
			Axios.post('https://www.spendwise.ng/api/accounts/password_reset/', currentUser, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then((res) => {
					if (res.status === 200) {
						setTimeout(() => {
							this.setState({
								formValues: {
									username: '',
									otp: '',
									password: '',
									confirm_password: ''
								},
								isSubmitting: false,
								submitted: true
							});
							setTimeout(() => {
								this.props.history.push('/signin');
							}, 3000);
							return res.data;
						}, 2000);
					} else return null;
				})
				.catch((err) => {
					this.setState({
						formErrors: {
							otp: 'Token Expired. Request another please.'
						},
						isSubmitting: false
					});
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
		return (
			<main className="chngePass-container">
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

				<article className="chngePass-form">
					<div>
						<h1>Reset Password</h1>

						<form onSubmit={this.handleSubmit}>
							<label htmlFor="username" className="label">
								Enter Username
								{this.state.formErrors.username ? <p id="errorMsg">{formErrors.username}</p> : ''}
								<input
									type="text"
									name="username"
									value={formValues.username || ''}
									onChange={this.handleInputChange}
									autoComplete="username"
								/>
							</label>
							<label htmlFor="otp" className="label">
								Enter OTP
								{this.state.formErrors.otp ? <p id="errorMsg">{formErrors.otp}</p> : ''}
								<input
									type="text"
									name="otp"
									value={formValues.otp || ''}
									onChange={this.handleInputChange}
									autoComplete="otp"
								/>
							</label>
							<label htmlFor="password" className="label">
								Enter New Password
								{this.state.formErrors.password ? <p id="errorMsg">{formErrors.password}</p> : ''}
								<input
									type="text"
									name="password"
									value={formValues.password || ''}
									onChange={this.handleInputChange}
									autoComplete="new-password"
								/>
							</label>{' '}
							<label htmlFor="password" className="label">
								Confirm New Password
								{this.state.formErrors.confirm_password ? (
									<p id="errorMsg">{formErrors.confirm_password}</p>
								) : (
									''
								)}
								<input
									type="text"
									name="confirm_password"
									value={formValues.confirm_password || ''}
									onChange={this.handleInputChange}
									autoComplete="new-password"
								/>
							</label>
							<button>{!isSubmitting ? 'Save New Password' : 'Saving...'}</button>
							<center>
								{submitted ? (
									<p style={{ fontFamily: 'sans-serif', marginTop: 10 }}>
										Password has been resetted successfully!
									</p>
								) : (
									''
								)}
							</center>
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
