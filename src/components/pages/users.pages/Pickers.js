import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Vendors from './Vendors';
import '../../../styles/users.styles/Pickers.css';

const Pickers = () => {
	const [ users, setUsers ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(true);

	const proxyurl = 'https://cors-anywhere.herokuapp.com/';
	const uri = 'http://admin.wm-has.org.ng/api/user/adminApi';

	const fetchedPickers = () => {
		fetch(proxyurl + uri)
			.then((res) => res.json())
			.then((res) => {
				setUsers(res.data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		fetchedPickers();
	}, []);

	const pickers = users.filter((user) => user.type == 1 );

	return (
		<div className="pickersBody">
			<Vendors />

			{isLoading ? (
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
									<h2>All Pickers</h2>
								</header>

								{pickers.map((oneUser, index) => (
									<div className="allUsers" key={index}>
										<img src={require('../../../assets/logo.PNG')} alt="user-img" />
										<hgroup>
											<h3>{oneUser.name}</h3>
											<h4>{oneUser.email} </h4>
										</hgroup>

										<NavLink to="/details" id="link">
											<h2>View</h2>
										</NavLink>
									</div>
								))}
							</div>
						</div>
					</section>
				</section>
			)}
		</div>
	);
};

export default Pickers;
