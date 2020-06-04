import React, { useState, useEffect } from 'react';
import '../../../styles/users.styles/Pickers.css';

import Navigation from '../../section/Navigation';
import Sidemenu from '../../section/Sidemenu';
import Footer from '../../section/Footer';
import { NavLink } from 'react-router-dom';

const Pickers = () => {
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 0);
	}, []);

	return (
		<div className="pickersBody">
			<Navigation />
			<Sidemenu />

			{loading ? (
				<div className="gifLoad">
					<img src={require('../../../assets/load.gif')} alt="Loading..." />
					<h1> Loading, please be patient </h1>
				</div>
			) : (
				<section className="pickers">
					<h1>Users</h1>
					<h2>List of Waste Pickers</h2>

					<section className="pickerInfo">
						<ol>
							<li className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>
									<NavLink to="/details" id="link">
										Odinaka Uche
									</NavLink>
								</h3>
							</li>

							<li className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>
									<NavLink to="/details" id="link">
										Innocent Chimezie
									</NavLink>
								</h3>
							</li>

							<li className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>
									<NavLink to="/details" id="link">
										Favour Chris
									</NavLink>
								</h3>
							</li>

							<li className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>
									<NavLink to="/details" id="link">
										Bene Paul
									</NavLink>
								</h3>
							</li>

							<li className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>
									<NavLink to="/details" id="link">
										Onyeulo Melody
									</NavLink>
								</h3>
							</li>

							<li className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>
									<NavLink to="/details" id="link">
										Shegs Daniel
									</NavLink>
								</h3>
							</li>

							<li className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>
									<NavLink to="/details" id="link">
										Paul Ibekwe
									</NavLink>
								</h3>
							</li>

							<li className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>
									<NavLink to="/details" id="link">
										Odinaka Uche
									</NavLink>
								</h3>
							</li>

							<li className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>
									<NavLink to="/details" id="link">
										Shegs Daniel
									</NavLink>
								</h3>
							</li>

							<li className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>
									<NavLink to="/details" id="link">
										Shegs Daniel
									</NavLink>
								</h3>
							</li>

							<li className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>
									<NavLink to="/details" id="link">
										Shegs Daniel
									</NavLink>
								</h3>
							</li>

							<li className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>
									<NavLink to="/details" id="link">
										Shegs Daniel
									</NavLink>
								</h3>
							</li>

							<li className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>
									<NavLink to="/details" id="link">
										Shegs Daniel
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

export default Pickers;
