import React, { Component } from 'react';
import './ChangePassword.css';

import Axios from 'axios';

class ChangePassword extends Component {
	state = {
		show: true,
		formValues: {
			current_password: '',
			password: '',
			confirm_password: ''
		},
		formErrors: {
			current_password: '',
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
		const isCurrentPassword = name === 'current_password';
		const isPassword = name === 'password';
		const isSamePassword = name === 'confirm_password';

		const passwrdTest = /^.*(?=.{6,})(?=.*\d).*$/;

		validity[name] = value.length > 0;
		fieldValidationErrors[name] = validity[name] ? '' : `${name} is required`;

		if (validity[name]) {
			if (isCurrentPassword) {
				validity[name] = passwrdTest.test(value);
				fieldValidationErrors[name] = validity[name] ? '' : `min of 6 and contain numbers`;
			}
			if (isPassword) {
				validity[name] = passwrdTest.test(value);
				fieldValidationErrors[name] = validity[name] ? '' : `min of 6 and contain numbers`;
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
			current_password: formValues.current_password,
			new_password: formValues.password,
			confirm_password: formValues.confirm_password
		};

		if (Object.values(formValidity).every(Boolean)) {
			this.setState({
				isSubmitting: true
			});
			let userToken = JSON.parse(localStorage.getItem('usertoken'));

			Axios.post('https://www.spendwise.ng/api/accounts/change_password/', currentUser, {
				headers: {
					Authorization: `Token ${userToken.token}`,
					'Content-Type': 'application/json'
				}
			})
				.then((res) => {
					if (res.status === 200) {
						setTimeout(() => {
							this.setState({
								isSubmitting: false,
								submitted: true
							});
							setTimeout(() => {
								this.props.history.push('/');
							}, 3500);
							return res.data;
						}, 2000);
					} else return null;
				})
				.catch((err) => {
					this.setState({
						formErrors: {
							current_password: 'Incorrect password'
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
			<main className="reset-container">
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

				<article className="reset-form">
					<div>
						<h1>Change Password</h1>

						<form onSubmit={this.handleSubmit}>
							<label htmlFor="username" className="label">
								Enter Current Password
								{this.state.formErrors.current_password ? (
									<p id="errorMsg">{formErrors.current_password}</p>
								) : (
									''
								)}
								<input
									type="text"
									name="current_password"
									value={formValues.current_password || ''}
									onChange={this.handleInputChange}
									autoComplete="current-password"
								/>{' '}
							</label>
							<label htmlFor="username" className="label">
								Enter New Password
								{this.state.formErrors.password ? <p id="errorMsg">{formErrors.password}</p> : ''}
								<input
									type="text"
									name="password"
									value={formValues.password || ''}
									onChange={this.handleInputChange}
									autoComplete="new-password"
								/>{' '}
							</label>
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
									value={formValues.confirm_password}
									onChange={this.handleInputChange}
									autoComplete="new-password"
								/>{' '}
							</label>

							<button>{!isSubmitting ? 'Save New Password' : 'Saving...'}</button>
							<center>
								{submitted ? (
									<p style={{ fontFamily: 'sans-serif', marginTop: 10 }}>
										Password has been changed successfully!
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

export default ChangePassword;