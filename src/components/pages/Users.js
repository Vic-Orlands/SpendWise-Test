import React, { useState, useEffect } from 'react';
import '../../styles/Users.css';

import Navigation from '../section/Navigation';
import Sidemenu from '../section/Sidemenu';
import Footer from '../section/Footer';
import { NavLink } from 'react-router-dom';

const Users = () => {
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<div className="usersBody">
			<Navigation />
			<Sidemenu />

			{loading ? (
				<div className="gifLoad">
					<img src={require('../../assets/load.gif')} alt="Loading..." />
					<h1> Loading, please be patient </h1>
				</div>
			) : (
				<section className="users">
					<h1>Users</h1>
					
					<div className="userDiv">
						<div>
							<h3>Waste Pickers</h3>
							<h5>25</h5>
							<hr />
							<NavLink to="/pickers" id="userLink">
								<p>See more</p>
							</NavLink>
						</div>

						<div>
							<h3>Waste Vendors</h3>
							<h5>30</h5>
							<hr />
							<p>See more</p>
						</div>

						<div>
							<h3>Waste Generators</h3>
							<h5>50</h5>
							<hr />
							<p>See more</p>
						</div>

						<div>
							<h3>Waste Recyclers</h3>
							<h5>7</h5>
							<hr />
							<p>See more</p>
						</div>

						<div>
							<h3>Eye Witnesses</h3>
							<h5>4</h5>
							<hr />
							<p>See more</p>
						</div>

						<div>
							<h3>Waste Agencies</h3>
							<h5>11</h5>
							<hr />
							<p>See more</p>
						</div>
					</div>
				</section>
			)}
			<Footer />
		</div>
	);
};

export default Users;
