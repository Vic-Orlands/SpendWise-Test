import React, { useState, useEffect } from 'react';
import '../../../styles/users.styles/Agencies.css';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Vendors from './Vendors';
import Footer from '../../core.sections/Footer';

const Agencies = (props) => {
	const [ users, setUsers ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(true);
	const [ open, setOpen ] = useState(false);

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
		if (user.type === '5') {
			return user;
		}
		return null;
	});

	const handleViewDetails = (oneUser) => {
		props.history.push({
			id: oneUser,
			pathname: '/ventails'
		});
	};

	const openDrawer = (e) => {
		e.preventDefault();
		setOpen(true);
	};

	return (
		<div className="agencyBody">
			<Vendors />

			{isLoading ? (
				<div className="gifLoad">
					<img src={require('../../../assets/load.gif')} alt="Loading..." />
				</div>
			) : (
				<section className="pickers">
					<div className="mobileDrawer">
						<div className="flex">
							<h1>Users</h1>

							<FaBars id="msg-shift-drop" onClick={openDrawer} />
						</div>
						{open && (
							<section className="users">
								<div>
									<div className="userDiv">
										<div>
											<h3>
												Pickers<span>(13)</span>
											</h3>
											<p>People who pick wastes</p>
										</div>
										<NavLink to="/vendors" id="userLink">
											<p>See more</p>
										</NavLink>
									</div>

									<div className="userDiv">
										<div>
											<h3>
												Collectors<span>(3)</span>
											</h3>
											<p>
												Those that collect wastes<br />from pickers or users
											</p>
										</div>
										<NavLink to="/collectors" id="userLink">
											<p>See more</p>
										</NavLink>{' '}
									</div>

									<div className="userDiv">
										<div>
											<h3>
												Recycling Agencies<span>(9)</span>
											</h3>
											<p>
												Agencies that buy wastes<br /> and recycle them for use
											</p>
										</div>
										<NavLink to="/agencies" id="userLink">
											<p id="pre">See more</p>
										</NavLink>{' '}
									</div>
								</div>
							</section>
						)}
					</div>

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

												<h2 onClick={() => handleViewDetails(oneUser.id)}>View</h2>
											</div>
										);
									} else {
										return null;
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
