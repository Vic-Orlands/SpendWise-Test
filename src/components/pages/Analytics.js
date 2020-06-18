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
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 4000);
	}, []);

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
							<h4>8</h4>
							<p>1 hour ago</p>
						</div>

						<div>
							<h5>
								<IoIosPerson className="hFont" /> Total Vendors
							</h5>
							<h4>15</h4>
							<p>1 hour ago</p>
						</div>

						<div>
							<h5>
								<IoIosDownload className="hFont" /> Waste Pickers
							</h5>
							<h4>8</h4>
							<p>1 hour ago</p>
						</div>

						<div>
							<h5>
								<IoIosPerson className="hFont" />Waste Collectors
							</h5>
							<h4>3</h4>
							<p>1 hour ago</p>
						</div>

						<div>
							<h5>
								<IoIosDownload className="hFont" /> Recycling Agencies
							</h5>
							<h4>8</h4>
							<p>1 hour ago</p>
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
