import React, { useState, useEffect } from 'react';
import '../../../styles/users.styles/Agencies.css';
import Vendors from './Vendors';
import Footer from '../../core.sections/Footer';
import { NavLink } from 'react-router-dom';

const Agencies = () => {
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		},4000);
	}, []);

	return (
		<div className="agencyBody">
			<Vendors />

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
									<h2>All Agencies</h2>
								</header>

								<div className="allUsers">
									<img src={require('../../../assets/logo.PNG')} alt="user-img" />
									<hgroup>
										<h3> Waste management Co-operation</h3>
									</hgroup>

									<NavLink to="/details">
										<h2>View</h2>
									</NavLink>
								</div>

								<div className="allUsers">
									<img src={require('../../../assets/logo.PNG')} alt="user-img" />
									<hgroup>
										<h3>Lawma</h3>
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

export default Agencies;
