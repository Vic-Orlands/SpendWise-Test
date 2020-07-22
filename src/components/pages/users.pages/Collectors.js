import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Vendors from './Vendors';
import '../../../styles/users.styles/Pickers.css';

const Collectors = (props) => {
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

	const collectors = users.filter((user) => user.type === '2');


	// ----------------------------getting total vendors number starts here------------------------------------
	//-------here i  fetched pickers using its response type and then sliced it to display only two pickers on the homepage----------
	const totalPickers = users.reduce((counter, obj) => {
		if (obj.type === '1') counter += 1
		return counter
	// ----------------------------getting total vendors number starts here------------------------------------
	}, 0)

	//-------just like the pickers, I  fetched collectors using its response type and then sliced it to display only two collectors on the homepage----------
	const totalCollectors = users.reduce((counter, obj) => {
		if (obj.type === '2') counter += 1
		return counter
	}, 0)
	
	//-------just like above, I  fetched the available agencies using its response type and then sliced it to display only two----------
	const totalAgencies = users.reduce((counter, obj) => {
		if (obj.type === '5') counter += 1
		return counter
	}, 0)
	// ----------------------------getting total vendors number ends here------------------------------------

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
							<h1>Vendor Details</h1>

							<FaBars id="msg-shift-drop" onClick={openDrawer} />
						</div>
						{open && (
							<section className="users">
								<div>
									<div className="userDiv">
										<div>
											<h3>
												Pickers<span>({totalPickers})</span>
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
												Collectors<span>({totalCollectors})</span>
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
												Recycling Agencies<span>({totalAgencies})</span>
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

										<h2 onClick={() => handleViewDetails(oneUser.id)}>View</h2>
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
