import React, { useState, useEffect } from 'react';
import './App.css';

import CanvasJSReact from './canvasjs.react';
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const App = () => {
	const [ users, setUsers ] = useState([]);
	const [ vendors, setVendors ] = useState([]);

	const proxyurl = 'https://cors-anywhere.herokuapp.com/';
	const userUrl = 'http://admin.wm-has.org.ng/api/user/adminApiUser';
	const vendorUrl = 'http://admin.wm-has.org.ng/api/user/adminApi';

	const fetchedUrls1 = () => {
		fetch(proxyurl + userUrl)
			.then((res) => res.json())
			.then((res) => {
				setUsers(res.data);
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
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		fetchedUrls1();
		fetchedUrls2();
		Promise.all([ fetchedUrls1, fetchedUrls2 ]);
	}, []);

	const totalUsers = users.reduce((sum, current) => (current.name ? (sum += 1) : current), 0);
	const totalVendors = vendors.reduce((sum, current) => (current.name ? (sum += 1) : current), 0);

	//-------here i  fetched pickers using its response type and then sliced it to display only two pickers on the homepage----------
	const totalPickers = vendors.reduce((counter, obj) => {
		if (obj.type === '1') counter += 1;
		return counter;
	}, 0);

	//-------just like the pickers, I  fetched collectors using its response type and then sliced it to display only two collectors on the homepage----------
	const totalCollectors = vendors.reduce((counter, obj) => {
		if (obj.type === '2') counter += 1;
		return counter;
	}, 0);

	//-------just like above, I  fetched the available agencies using its response type and then sliced it to display only two----------
	const totalAgencies = vendors.reduce((counter, obj) => {
		if (obj.type === '5') counter += 1;
		return counter;
	}, 0);

	const options = {
		data: [
			{
				type: 'column',
				dataPoints: [
					{ label: 'Users', y: totalUsers },
					{ label: 'Pickers', y: totalPickers },
					{ label: 'Collectors', y: totalCollectors },
					{ label: 'Agencies', y: totalAgencies },
					{ label: 'Vendors', y: totalVendors }
				]
			}
		]
	};

	return (
		<div className="chartBody">
			<h2>Analytical Column Chart</h2>
			<CanvasJSChart options={options} id="mainChart" />
		</div>
	);
};

export default App;
