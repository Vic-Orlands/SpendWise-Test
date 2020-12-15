import React, { Component } from 'react';
import './styles.css';

import Axios from 'axios';

class index extends Component {
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
			email: formValues.email
		};

		if (Object.values(formValidity).every(Boolean)) {
			this.setState({
				isSubmitting: true
			});

			Axios.post("https://www.spendwise.ng/api/accounts/get_username/", user, {
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

		return (
			<main className="forgot-username">
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

				<article className="username-form">
					<div>
						<h1>Forgot Username?</h1>
						<h4>Enter your email address to get your username.</h4>

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

							<button>{!isSubmitting ? 'Reset Password' : 'Resetting...'}</button>
							<center>
								{submitted ? (
									<p style={{ fontFamily: 'sans-serif', marginTop: 10 }}>Your username has been sent to your email</p>
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

export default index;
