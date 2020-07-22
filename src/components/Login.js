import React, { Component } from 'react';
import { IoMdPerson } from 'react-icons/io';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import '../styles/Login.css';

class Login extends Component {
	state = {
		errormessage: false,
		loading: false,
		hidden: true
	};

	togglePassword = (e) => {
		e.preventDefault();
		this.setState({
			hidden: !this.state.hidden
		});
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
		const defaultUsername = document.getElementById('userTextInput');
		const defaultPassword = document.getElementById('userPasswordInput');
		if (defaultUsername.value === 'admin' && defaultPassword.value === '@admin2020') {
			this.setState({ loading: false });
			localStorage.setItem('loggedIn', true);
			this.props.history.push({
				pathname: '/hub'
			});
		} else {
			setTimeout(() => {
				this.setState({
					loading: false,
					errormessage: 'Incorrect username and password!'
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
								<input type="text" id="userTextInput" autoFocus />
							</label>
							<IoMdPerson id="inputFont" />
						</div>
						<div>
							{this.state.errormessage && <h6 className="text-danger">{this.state.errormessage}</h6>}
							<label className="password">
								<input type={this.state.hidden ? 'password' : 'text'} id="userPasswordInput" required />
							</label>
							{this.state.hidden ? (
								<AiFillEye id="inputFont" onClick={this.togglePassword} />
							) : (
								<AiFillEyeInvisible id="inputFont" onClick={this.togglePassword} style={{ color: 'green'}} />
							)}
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
