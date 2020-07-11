import React, { useState, useEffect } from 'react';
import '../../../styles/users.styles/Agencies.css';
import Vendors from './Vendors';
import Footer from '../../core.sections/Footer';

const Agencies = () => {
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

	const agencies = users.filter((user) => {
		if (user.type === 3) {
			return user;
		}
		return null
	});

	return (
		<div className="agencyBody">
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
									<h2>All Agencies</h2>
								</header>

								{agencies.map((oneUser, index) => {
									if (oneUser.type) {
										return (
											<div className="allUsers" key={index}>
												<img src={require('../../../assets/logo.PNG')} alt="user-img" />
												<hgroup>
													<h3>{oneUser.name}</h3>
													<h4>{oneUser.email} </h4>
												</hgroup>

												<h2 id="link">View</h2>
											</div>
										);
									} else {
										return null
									}
								})}
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
