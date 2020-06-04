import React, { useState, useEffect } from 'react';
import '../../../styles/users.styles/Recyclers.css';

import Navigation from '../../section/Navigation';
import Sidemenu from '../../section/Sidemenu';
import Footer from '../../section/Footer';
import { NavLink } from 'react-router-dom';

const Witness = () => {
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 0);
	}, []);

	return (
		<div className="witnessBody">
			<Navigation />
			<Sidemenu />

			{loading ? (
				<div className="gifLoad">
					<img src={require('../../../assets/load.gif')} alt="Loading..." />
					<h1> Loading, please be patient </h1>
				</div>
			) : (
				<section className="witness">
					<h1>Users</h1>
					<h2>List of Waste Pickers</h2>

					<section className="witnessInfo">
						<ol>
							<li className="witnessList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>
									<NavLink to="/details" id="link">
										Odinaka Uche
									</NavLink>
								</h3>
							</li>

							<li className="witnessList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>
									<NavLink to="/details" id="link">
										Favour Chris
									</NavLink>
								</h3>
							</li>

                            <li className="witnessList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>
									<NavLink to="/details" id="link">
										Innocent Chimezie
									</NavLink>
								</h3>
							</li>

                            <li className="witnessList">
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

export default Witness;
