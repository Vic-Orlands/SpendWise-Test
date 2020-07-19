import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Vendors from './Vendors';
import '../../../styles/users.styles/Pickers.css';

const Collectors = () => {
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

	const collectors = users.filter((user) => user.type === '2' );

	const openDrawer = (e) => {
		e.preventDefault();
		setOpen(true);
	};

	return (
		<div className="pickersBody">
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
									<h2>All Collectors</h2>
								</header>

								{collectors.map((oneUser, index) => (
									<div className="allUsers" key={index}>
										<img src={require('../../../assets/logo.PNG')} alt="user-img" />
										<hgroup>
											<h3>{oneUser.name}</h3>
											<h4>{oneUser.email} </h4>
										</hgroup>

										<h2 id="link">View</h2>
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

export default Collectors;
