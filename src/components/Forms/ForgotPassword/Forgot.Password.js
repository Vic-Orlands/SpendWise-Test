import React, { Component } from 'react';
import './Forgot.css';

import Axios from 'axios';
class Forgot extends Component {
	state = {
		formValues: {
			email: ''
		},
		formErrors: {
			email: ''
		},
		formValidity: {
			email: false
		},
		isSubmitting: false,
		submitted: false
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
		console.log(event.target.checked);
	};

	handleValidation = (target) => {
		const { name, value } = target;
		const fieldValidationErrors = this.state.formErrors;
		const validity = this.state.formValidity;
		const isEmail = name === 'email';

		const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

		validity[name] = value.length > 0;
		fieldValidationErrors[name] = validity[name] ? '' : `${name} is required`;

		if (validity[name]) {
			if (isEmail) {
				validity[name] = emailTest.test(value);
				fieldValidationErrors[name] = validity[name] ? '' : `${name} must be a valid email`;
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
		const user = {
			user: formValues.email
		};

		if (Object.values(formValidity).every(Boolean)) {
			this.setState({
				isSubmitting: true
			});

			Axios.post('https://www.spendwise.ng/api/accounts/token_request/', user, {
				headers: {
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
							localStorage.setItem('user details', JSON.stringify(res.data));
							setTimeout(() => {
								this.props.history.push('/reset');
							}, 3500);
							return res.data;
						}, 2000);
					} else return null;
				})
				.catch((err) => {
					this.setState({
						formErrors: {
							email: 'Email does not exist'
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
		const isEnabled = !formValues.email

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

						<form onSubmit={this.handleSubmit}>
							<label htmlFor="username" className="label">
								Enter Email Address
								{formErrors.email ? <p id="errorMsg">{formErrors.email}</p> : ''}
								<input
									type="text"
									name="email"
									value={formValues.email}
									onChange={this.handleInputChange}
									autoComplete="email"
								/>
							</label>

							<button disabled={isEnabled}>{!isSubmitting ? 'Reset Password' : 'Resetting...'}</button>
							<center>
								{submitted ? (
									<p style={{ fontFamily: 'sans-serif', marginTop: 10 }}>
										Token has been sent to registered email
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

export default Forgot;
