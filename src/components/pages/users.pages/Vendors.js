import React, { useState, useEffect } from 'react';
import '../../../styles/users.styles/Vendors.css';

import Navigation from '../../section/Navigation';
import Sidemenu from '../../section/Sidemenu';
import Footer from '../../section/Footer';
import { NavLink } from 'react-router-dom';

const Vendors = () => {
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 0);
	}, []);

	return (
		<div className="vendorsBody">
			<Navigation />
			<Sidemenu />

			{loading ? (
				<div className="gifLoad">
					<img src={require('../../../assets/load.gif')} alt="Loading..." />
					<h1> Loading, please be patient </h1>
				</div>
			) : (
				<section className="vendors">
					<h1>Users</h1>
					<h2>List of Waste Pickers</h2>

					<section className="vendorInfo">
						<ol>
							<li className="vendorList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>
									<NavLink to="/details" id="link">
										Odinaka Uche
									</NavLink>
								</h3>
							</li>

							<li className="vendorList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>
									<NavLink to="/details" id="link">
										Innocent Chimezie
									</NavLink>
								</h3>
							</li>

							<li className="vendorList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>
									<NavLink to="/details" id="link">
										Favour Chris
									</NavLink>
								</h3>
							</li>
						</ol>
					</section>
				</section>
			)}
			<Footer />
		</div>
	);
};

export default Vendors;
