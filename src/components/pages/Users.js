import React, { useState, useEffect } from 'react';
import '../../styles/Users.css';

import Navigation from '../core.sections/Navigation';
import Sidemenu from '../core.sections/Sidemenu';
import { NavLink } from 'react-router-dom';

const Users = () => {
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 4000);
	}, []);

	return (
		<div>
			<Navigation />
			<Sidemenu />

			<section className="users-container">
				{loading ? (
					<div className="gifLoad">
						<img src={require('../../assets/load.gif')} alt="Loading..." />
					</div>
				) : (
					<section className="users-body">
						<h1>Users</h1>

						<section className="list-table">
							<div className="list-of-users">
								<header>
									<h2>All Users</h2>
								</header>

								<div className="allUsers">
									<img src={require('../../assets/logo.PNG')} alt="user-img" />
									<hgroup>
										<h3>Innocent</h3>
										<h4>innocent39@gmail.com</h4>
									</hgroup>

									<NavLink to="/details" id="link">
										<h2>View</h2>
									</NavLink>
								</div>

								<div className="allUsers">
									<img src={require('../../assets/logo.PNG')} alt="user-img" />
									<hgroup>
										<h3>Amaizu</h3>
										<h4>maconzy12@gmail.com</h4>
									</hgroup>

									<h2>View</h2>
								</div>

								<div className="allUsers">
									<img src={require('../../assets/logo.PNG')} alt="user-img" />
									<hgroup>
										<h3>okon</h3>
										<h4>okon@gmail.com</h4>
									</hgroup>

									<h2>View</h2>
								</div>

								<div className="allUsers">
									<img src={require('../../assets/logo.PNG')} alt="user-img" />
									<hgroup>
										<h3>melody</h3>
										<h4>mels@gmail.com</h4>
									</hgroup>

									<h2>View</h2>
								</div>

								<div className="allUsers">
									<img src={require('../../assets/logo.PNG')} alt="user-img" />
									<hgroup>
										<h3>Innocent</h3>
										<h4>innocent39@gmail.com</h4>
									</hgroup>

									<h2>View</h2>
								</div>

								<div className="allUsers">
									<img src={require('../../assets/logo.PNG')} alt="user-img" />
									<hgroup>
										<h3>Zlatan</h3>
										<h4>burna@gmail.com</h4>
									</hgroup>

									<h2>View</h2>
								</div>

								<div className="allUsers">
									<img src={require('../../assets/logo.PNG')} alt="user-img" />
									<hgroup>
										<h3>okon</h3>
										<h4>okon@gmail.com</h4>
									</hgroup>

									<h2>View</h2>
								</div>

								<div className="allUsers">
									<img src={require('../../assets/logo.PNG')} alt="user-img" />
									<hgroup>
										<h3>Innocent</h3>
										<h4>innocent39@gmail.com</h4>
									</hgroup>

									<h2>View</h2>
								</div>
							</div>
						</section>
					</section>
				)}
			</section>
		</div>
	);
};

export default Users;
