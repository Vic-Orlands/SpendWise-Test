import React, { useState, useEffect } from 'react';
import { MdMessage } from 'react-icons/md';
import { IoIosPerson, IoIosDownload } from 'react-icons/io';
import Navigation from '../core.sections/Navigation';
import Sidemenu from '../core.sections/Sidemenu';
import Footer from '../core.sections/Footer';
import '../../styles/Analytics.css';

import App from '../chart/App';
import Satisfied from '../chart/Users.Satisfied';

const Analytics = () => {
	const [ users, setUsers ] = useState([]);
	const [ vendors, setVendors ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	const proxyurl = 'https://cors-anywhere.herokuapp.com/';
	const userUrl = 'http://admin.wm-has.org.ng/api/user/adminApiUser';
	const vendorUrl = 'http://admin.wm-has.org.ng/api/user/adminApi';

	const fetchedUrls1 = () => {
		fetch(proxyurl + userUrl)
			.then((res) => res.json())
			.then((res) => {
				setUsers(res.data);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	};

		const fetchedUrls2 = () => {
		fetch(proxyurl + vendorUrl)
			.then((res) => res.json())
			.then((res) => {
				setVendors(res.data);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
		};
		
		useEffect(() => {
			fetchedUrls1();
			fetchedUrls2();
			Promise.all([ fetchedUrls1, fetchedUrls2 ])
		}, []);
		
		const totalUsers = users.reduce((sum, current) => current.name ? sum +=1 : current, 0)
		const totalVendors = vendors.reduce((sum, current) => current.name ? sum +=1 : current, 0)
	
	//-------here i  fetched pickers using its response type and then sliced it to display only two pickers on the homepage----------
	const totalPickers = vendors.reduce((counter, obj) => {
		if (obj.type === '1') counter += 1
		return counter
	}, 0)
	
	//-------just like the pickers, I  fetched collectors using its response type and then sliced it to display only two collectors on the homepage----------
	const totalCollectors = vendors.reduce((counter, obj) => {
		if (obj.type === '2') counter += 1
		return counter
	}, 0)
	
	//-------just like above, I  fetched the available agencies using its response type and then sliced it to display only two----------
	const totalAgencies = vendors.reduce((counter, obj) => {
		if (obj.type === '5') counter += 1
		return counter
	}, 0)


	return (
		<div className="analyticsBody">
			<Navigation />
			<Sidemenu />

			{loading ? (
				<div className="gifLoad">
					<img src={require('../../assets/load.gif')} alt="Loading..." />
				</div>
			) : (
				<section className="analytics">
					<div>
						<h1>Analytics</h1>
					</div>

					<div className="shelf">
						<div>
							<h5>
								<IoIosPerson className="hFont" /> Total Users
							</h5>
							<h4>{totalUsers}</h4>
							<p>1 min ago</p>
						</div>

						<div>
							<h5>
								<IoIosPerson className="hFont" /> Total Vendors
							</h5>
							<h4>{totalVendors}</h4>
							<p>1 min ago</p>
						</div>

						<div>
							<h5>
								<IoIosDownload className="hFont" /> Waste Pickers
							</h5>
							<h4>{totalPickers}</h4>
							<p>1 min ago</p>
						</div>

						<div>
							<h5>
								<IoIosPerson className="hFont" />Waste Collectors
							</h5>
							<h4>{totalCollectors}</h4>
							<p>1 min ago</p>
						</div>

						<div>
							<h5>
								<IoIosDownload className="hFont" /> Recycling Agencies
							</h5>
							<h4>{totalAgencies}</h4>
							<p>1 min ago</p>
						</div>

						<div>
							<h5>
								<MdMessage className="hFont" /> Messages
							</h5>
							<h4>13</h4>
							<p>1 hour ago</p>
						</div>
					</div>

					<div className="charts">
						<App />

						<Satisfied />
					</div>
					<Footer />
				</section>
			)}
		</div>
	);
};

export default Analytics;
