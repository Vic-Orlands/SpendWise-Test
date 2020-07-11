import React, { useState, useEffect } from 'react';
import '../../styles/Users.css';

import Navigation from '../core.sections/Navigation';
import Sidemenu from '../core.sections/Sidemenu';

const Users = (props) => {
	const [ users, setUsers ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(true);

	const proxyurl = 'https://cors-anywhere.herokuapp.com/';
	const uri = 'http://admin.wm-has.org.ng/api/user/adminApiUser';

	const fetchedData = () => {
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
		fetchedData();
	}, []);

	const handleViewDetails = (e) => {
		e.preventDefault();
		props.history.push({
			pathname: '/details'
		});
	};

	return (
		<div>
			<Navigation />
			<Sidemenu />

			<section className="users-container">
				{isLoading ? (
					<div className="gifLoad">
						<img src={require('../../assets/load.gif')} alt="Loading..." />
					</div>
				) : (
					<section className="users-body">
						<h1>Users</h1>

						<section className="list-table">
							<div className="list-of-users">
								<header>
									<h2>All Users</h2>
								</header>
								{users.map((user, index) => (
									<div className="allUsers" key={index}>
										<img src={require('../../assets/logo.PNG')} alt="user-img" />
										<hgroup>
											<h3>
												{user.name} {user.other_name}
											</h3>
											<h4>{user.email}</h4>
										</hgroup>

										<h2 onClick={handleViewDetails}>View</h2>
									</div>
								))}
							</div>
						</section>
					</section>
				)}
			</section>
		</div>
	);
};

export default Users;
