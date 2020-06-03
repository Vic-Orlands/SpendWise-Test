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
						<section>
							<div className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>Odinaka Uche</h3>
							</div>

							<div className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>Innocent Chimezie</h3>
							</div>

							<div className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>Favour Chris</h3>
							</div>

							<div className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>Bene Paul</h3>
							</div>

							<div className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>Onyeulo Melody</h3>
							</div>

							<div className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>Shegs Daniel</h3>
							</div>

							<div className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>Paul Ibekwe</h3>
							</div>

							<div className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>Odinaka Uche</h3>
							</div>

							<div className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>Shegs Daniel</h3>
							</div>

							<div className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>Shegs Daniel</h3>
							</div>

							<div className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>Shegs Daniel</h3>
							</div>

							<div className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>Shegs Daniel</h3>
							</div>

							<div className="pickerList">
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h3>Shegs Daniel</h3>
							</div>
						</section>

						<section className="infos">
							<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
							<label>
								Name:
								<h3>Odinaka Uche</h3>
							</label>

							<label>
								Platform:
								<h3>Android</h3>
							</label>

							<label>
								Active:
								<h3>Yes</h3>
							</label>

						</section>
					</section>
				</section>
			)}
			<Footer />
		</div>
	);
};

export default Pickers;
