import React, { useState, useEffect } from 'react';
import '../../../styles/users.styles/Witness.css';

import Users from '../Users';
import Footer from '../../section/Footer';
import { NavLink } from 'react-router-dom';

const Witness = () => {
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 4000);
	}, []);

	return (
		<div className="witnessBody">
			<Users />

			{loading ? (
				<div className="gifLoad">
					<img src={require('../../../assets/load.gif')} alt="Loading..." />
				</div>
			) : (
				<section className="pickers">
					<h1>Users</h1>

					<section className="pickerInfo">
						<div className="pickerUsers">
							<div>
								<header>
									<h2>Eye Witnesses</h2>
								</header>

								<div className="allUsers">
									<img src={require('../../../assets/logo.PNG')} alt="user-img" />
									<hgroup>
										<h3>Innocent</h3>
										<h4>innocent39@gmail.com</h4>
									</hgroup>

									<NavLink to="/details">
										<h2>View</h2>
									</NavLink>
								</div>

								<div className="allUsers">
									<img src={require('../../../assets/logo.PNG')} alt="user-img" />
									<hgroup>
										<h3>Amaizu</h3>
										<h4>maconzy12@gmail.com</h4>
									</hgroup>

									<h2>View</h2>
								</div>

								<div className="allUsers">
									<img src={require('../../../assets/logo.PNG')} alt="user-img" />
									<hgroup>
										<h3>okon</h3>
										<h4>okon@gmail.com</h4>
									</hgroup>

									<h2>View</h2>
								</div>

								<div className="allUsers">
									<img src={require('../../../assets/logo.PNG')} alt="user-img" />
									<hgroup>
										<h3>Amaizu</h3>
										<h4>maconzy12@gmail.com</h4>
									</hgroup>

									<h2>View</h2>
								</div>
							</div>
						</div>
					</section>
				</section>
			)}
			<Footer />
		</div>
	);
};

export default Witness;
