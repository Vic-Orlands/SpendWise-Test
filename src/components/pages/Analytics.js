import React, { useState, useEffect } from 'react';
import { MdMessage, MdArrowUpward, MdArrowDownward } from 'react-icons/md';
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
					<h1> Loading, please be patient </h1>
				</div>
			) : (
				<section className="analytics">
					<div>
						<h1>Analytics</h1>
					</div>

					<div className="shelf">
						<div>
							<h5>
								<IoIosPerson className="hFont" /> Waste Recyclers
							</h5>
							<h4>25</h4>
							<p>
								4%<span>From last week</span>
							</p>
						</div>

						<div>
							<h5>
								<IoIosPerson className="hFont" /> Waste Pickers
							</h5>
							<h4>15</h4>
							<p>
								4%<span>From last week</span>
							</p>
						</div>

						<div>
							<h5>
								<IoIosDownload className="hFont" /> Waste Generators
							</h5>
							<h4>40</h4>
							<p>
								24%<MdArrowDownward />
								<span>From last week</span>
							</p>
						</div>

						<div>
							<h5>
								<IoIosPerson className="hFont" />Dump Sites
							</h5>
							<h4>40</h4>
							<p>
								1%<span>From last week</span>
							</p>
						</div>

						<div>
							<h5>
								<IoIosDownload className="hFont" /> Waste Vendors
							</h5>
							<h4>30</h4>
							<p>
								12%<MdArrowDownward />
								<span>From last week</span>
							</p>
						</div>

						<div>
							<h5>
								<IoIosPerson className="hFont" />Waste Management <br />{' '}
								<span style={{ marginLeft: 20 }}>Agencies</span>
							</h5>
							<h4>4</h4>
							<p>
								1%<span>From last week</span>
							</p>
						</div>

						<div>
							<h5>
								<MdMessage className="hFont" /> Messages
							</h5>
							<h4>4</h4>
							<p>
								10%<MdArrowUpward />
								<span>From last week</span>
							</p>
						</div>

						<div>
							<h5>
								<IoIosPerson className="hFont" />Eye witnesses
							</h5>
							<h4>15</h4>
							<p>From last week</p>
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
