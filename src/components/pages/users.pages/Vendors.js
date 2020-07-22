import React, { useState, useEffect } from 'react';
import '../../../styles/users.styles/Vendors.css';

import Navigation from '../../core.sections/Navigation';
import Sidemenu from '../../core.sections/Sidemenu';
import { NavLink } from 'react-router-dom';

const Vendors = () => {
	const [ users, setUsers ] = useState([]);

	const proxyurl = 'https://cors-anywhere.herokuapp.com/';
	const uri = 'http://admin.wm-has.org.ng/api/user/adminApi';

	const fetchedPickers = () => {
		fetch(proxyurl + uri)
			.then((res) => res.json())
			.then((res) => {
				setUsers(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		fetchedPickers();
	}, []);

	// ----------------------------getting total vendors number starts here------------------------------------
	//-------here i  fetched pickers using its response type and then sliced it to display only two pickers on the homepage----------
	const totalPickers = users.reduce((counter, obj) => {
		if (obj.type === '1') counter += 1;
		return counter;
		// ----------------------------getting total vendors number starts here------------------------------------
	}, 0);

	//-------just like the pickers, I  fetched collectors using its response type and then sliced it to display only two collectors on the homepage----------
	const totalCollectors = users.reduce((counter, obj) => {
		if (obj.type === '2') counter += 1;
		return counter;
	}, 0);

	//-------just like above, I  fetched the available agencies using its response type and then sliced it to display only two----------
	const totalAgencies = users.reduce((counter, obj) => {
		if (obj.type === '5') counter += 1;
		return counter;
	}, 0);
	// ----------------------------getting total vendors number ends here------------------------------------

	return (
		<div className="usersBody">
			<Navigation />
			<Sidemenu />

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
							<p>See more</p>
						</NavLink>{' '}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Vendors;
