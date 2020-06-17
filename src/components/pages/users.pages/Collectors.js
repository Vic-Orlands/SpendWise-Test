import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Vendors from './Vendors';
import '../../../styles/users.styles/Pickers.css';

const Collectors = () => {
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 4000);
	}, []);

	return (
		<div className="pickersBody">
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
									<h2>All Collectors</h2>
								</header>

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
										<h3>melody</h3>
										<h4>mels@gmail.com</h4>
									</hgroup>

									<h2>View</h2>
								</div>

								<div className="allUsers">
									<img src={require('../../../assets/logo.PNG')} alt="user-img" />
									<hgroup>
										<h3>Zlatan</h3>
										<h4>burna@gmail.com</h4>
									</hgroup>

									<h2>View</h2>
								</div>
							</div>
						</div>
					</section>
				</section>
			)}
		</div>
	);
};

export default Collectors;
