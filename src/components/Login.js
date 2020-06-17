import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdPerson, IoIosLock } from 'react-icons/io';
import '../styles/Login.css';

const Login = () => {
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
							<a href="https://www.wm-has.cresponet.net" target="_blank">
								wm-has.cresponet.net
							</a>
						</span>
					</p>
				</div>
			</div>

			<div className="loginContainer">
				<img src={require('../assets/logo.PNG')} alt="wm-has logo" />
				<h2>Login to your account </h2>
				<form>
					<div>
						<label>
							<input type="text" />
						</label>
						<IoMdPerson id="inputFont" />
					</div>
					<div>
						<label className="password">
							<input type="password" />
						</label>
						<IoIosLock id="inputFont" />
					</div>
					<NavLink to="/hub" className="link">
						<input type="submit" value="LOGIN" id="submit" />
					</NavLink>{' '}
				</form>
			</div>
		</section>
	);
};

export default Login;
