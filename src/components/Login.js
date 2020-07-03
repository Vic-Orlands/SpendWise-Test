import React, { Component } from 'react';
import { IoMdPerson, IoIosLock } from 'react-icons/io';
import '../styles/Login.css';

class Login extends Component {
	state = {
		errormessage: false,
		loading: false
	};

	handleInputChange = (e) => {
		e.preventDefault();
		const { value, name } = e.target;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ loading: true });
		const defaultPassword = document.getElementById('input');
		if (defaultPassword.value !== null && defaultPassword.value === '@admin2020') {
			this.setState({ loading: false });
			localStorage.setItem('loggedIn', true);
			this.props.history.push({
				pathname: '/hub'
			});
		} else {
			setTimeout(() => {
				this.setState({
					loading: false,
					errormessage: 'Incorrect password!'
				});
			}, 2000);
		}
	};

	render() {
		return (
			<section className="login">
				<div className="imgContainer">
					<img src={require('../assets/logo.PNG')} alt="wm-has logo" />

					<div>
						<h1>
							Welcome to <span>WM-HAS</span> Admin
						</h1>

						<p>
							This is for admins only. If you're not, kindly redirect to the official site here <br />
							<span>
								<a href="https://www.wm-has.cresponet.net" target="_blank" rel="noopener noreferrer">
									wm-has.cresponet.net
								</a>
							</span>
						</p>
					</div>
				</div>

				<div className="loginContainer">
					<img src={require('../assets/logo.PNG')} alt="wm-has logo" />
					<h2>Login to your account </h2>
					<form onSubmit={this.handleSubmit}>
						<div>
							<label>
								<input type="text" autoFocus />
							</label>
							<IoMdPerson id="inputFont" />
						</div>
						<div>
							{this.state.errormessage && <h6 className="text-danger">{this.state.errormessage}</h6>}
							<label className="password">
								<input type="password" id="input" required />
							</label>
							<IoIosLock id="inputFont" />
						</div>
						<input
							type="submit"
							value={this.state.loading ? 'Loading...' : 'Login'}
							disabled={this.state.loading}
							id="submit"
							required
						/>
					</form>
				</div>
			</section>
		);
	}
}
export default Login;
