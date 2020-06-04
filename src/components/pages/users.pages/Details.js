import React, { useState, useEffect } from 'react';
import '../../../styles/users.styles/Details.css';

import Navigation from '../../section/Navigation';
import Sidemenu from '../../section/Sidemenu';
import Footer from '../../section/Footer';
import { NavLink } from 'react-router-dom';
import { MdMessage } from 'react-icons/md';

const Details = () => {
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 0);
	}, []);

	return (
		<div className="detailsBody">
			<Navigation />
			<Sidemenu />

			{loading ? (
				<div className="gifLoad">
					<img src={require('../../../assets/load.gif')} alt="Loading..." />
					<h1> Loading, please be patient </h1>
				</div>
			) : (
				<section className="details">
					<h1>User</h1>
					<section className="infos">
						<div>
							<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
							<NavLink to="/message">
							<MdMessage id="msgFont"/>
							</NavLink>
						</div>

						<div>
							<h2>User Profile</h2>

							<label>
								Name:
								<h3>Odinaka Uche</h3>
							</label>

							<label>
								Email:
								<h3>odinakaUchu@gmail.com</h3>
							</label>

							<label>
								Platform:
								<h3>Android</h3>
							</label>

							<label>
								Active:
								<h3>Yes</h3>
							</label>

							<label>
								Transactions:
								<h3>See more</h3>
							</label>
						</div>
					</section>
				</section>
			)}
			<Footer />
		</div>
	);
};

export default Details;
