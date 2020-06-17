import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import { BsThreeDotsVertical } from 'react-icons/bs';
import { FcPieChart } from 'react-icons/fc';
import { FiDownload } from 'react-icons/fi';
import { GiChart } from 'react-icons/gi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

import Navigation from '../core.sections/Navigation';
import Sidemenu from '../core.sections/Sidemenu';
import '../../styles/Home.css';
import '../../styles/slider/slider-animation.css';
import '../../styles/slider/slide.css';

// ----------------slider components-----------------
const content = [
	{
		name: 'Stella Marris',
		title: 'Family man',
		description:
			'This is not only solving dirt issues and hazard that comes with it, its an opportunity for me to make money and pay my bills as well because i can make extra money',
		button: 'Read More',
		background: '#1d2939'
	},
	{
		name: 'Mr Onyekachi',
		title: 'Founder ABC testing',
		description:
			'This is a great platform that everyone should explore because it solving the most vital environmental challenge in the region. I will always recommend this platform.',
		button: 'Read More',
		background: '#034a82'
	},
	{
		name: 'Stella Marris',
		title: 'Family man',
		description:
			'This is not only solving dirt issues and hazard that comes with it, its an opportunity for me to make money and pay my bills as well because i can make extra money',
		button: 'Read More',
		background: '#1f0d00'
	}
];
// ----------------slider components-----------------

const Home = () => {
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 5000);
	}, []);

	return (
		<div>
			<Navigation />
			<Sidemenu />

			{loading ? (
				<div className="gifLoad">
					<img src={require('../../assets/load.gif')} alt="Loading..." />
				</div>
			) : (
				// ------------------------------home jsx starts here----------------------------------------
				<section className="homeBody">
					<h1>Home</h1>

					<div className="topShelf">
						<div>
							<RiMoneyDollarCircleLine id="shelfFont" />
							<div>
								<h2>Total Revenue</h2>
								<h3>$758</h3>
								<p>From last week</p>
							</div>
						</div>

						<div>
							<FcPieChart id="shelfFont" />
							<div>
								<h2>Orders Received</h2>
								<h3>1024</h3>
								<p>From this week</p>
							</div>
						</div>

						<div>
							<GiChart id="shelfFont" />
							<div>
								<h2>Total Active Users</h2>
								<h3>214</h3>
								<p>From one day ago</p>
							</div>
						</div>

						<div>
							<FiDownload id="shelfFont" />
							<div>
								<h2>Total Downloads</h2>
								<h3>200</h3>
								<p>From one day ago</p>
							</div>
						</div>
					</div>
					{/* // ------------------------------home jsx starts here---------------------------------------- */}

					{/* ---------------------------------------second grid divs starts here--------------------------------- */}
					{/* ---------------------------------------second grid divs starts here--------------------------------- */}

					<section className="new-main">
						<section>
							<div>
								<h2>Activity</h2>
							</div>

							<div className="overlap">
								<div>
									<h3>Users</h3>
									<h5>72 New Members</h5>
								</div>

								<div>
									<h3> Vendors</h3>
									<h5>72 New Members</h5>
								</div>

								<div>
									<h3>Dump Site</h3>
									<h5>14 total</h5>
								</div>

								<div>
									<h3> Messages</h3>
									<h5>10 New Messages</h5>
								</div>
							</div>
						</section>

						<aside>
							<section>
								<h2>Disposal Analysis</h2>

								<h1 style={{ color: 'purple' }}>670+</h1>
								<h5>Successful transactions</h5>
							</section>

							<section>
								<h2>App Transactions</h2>

								<h1 style={{ color: '#e8428e' }}>1340+</h1>
								<h5>Completed orders</h5>
							</section>
						</aside>

						<div className="what-people-say">
							<Slider className="slider-wrapper" autoplay="900ms" infinite="true">
								{content.map((item, index) => (
									<div
										key={index}
										className="slider-content"
										style={{ background: `${item.background}` }}
									>
										<div className="inner" style={{ background: `${item.background}` }}>
											<h2>{item.name}</h2>
											<span>{item.title}</span>
											<p>{item.description}</p>
											<button>{item.button}</button>
										</div>
									</div>
								))}
							</Slider>
						</div>
					</section>

					<section className="usersShelf">
						<div className="newUsers">
							<header>
								<h2>Newly Registered Users</h2>

								<h2>
									<NavLink to="/users" id="link">
										See more
									</NavLink>
								</h2>
							</header>

							<div>
								<img src={require('../../assets/logo.PNG')} alt="user-img" />
								<hgroup>
									<h3>Innocent</h3>
									<h4>innocent39@gmail.com</h4>
								</hgroup>

								<h5>View</h5>
							</div>

							<div>
								<img src={require('../../assets/logo.PNG')} alt="user-img" />
								<hgroup>
									<h3>Amaizu</h3>
									<h4>maconzy12@gmail.com</h4>
								</hgroup>

								<h5>View</h5>
							</div>

							<div>
								<img src={require('../../assets/logo.PNG')} alt="user-img" />
								<hgroup>
									<h3>melody</h3>
									<h4>mels@gmail.com</h4>
								</hgroup>

								<h5>View</h5>
							</div>

							<div>
								<img src={require('../../assets/logo.PNG')} alt="user-img" />
								<hgroup>
									<h3>Zlatan</h3>
									<h4>burna@gmail.com</h4>
								</hgroup>

								<h5>View</h5>
							</div>

							<div>
								<img src={require('../../assets/logo.PNG')} alt="user-img" />
								<hgroup>
									<h3>okon</h3>
									<h4>okon@gmail.com</h4>
								</hgroup>

								<h5>View</h5>
							</div>
						</div>

						<div className="task">
							<header>
								<h2>Task</h2>
							</header>

							<div>
								<input type="checkbox" />
								<div>
									<h3>Assemble all Vendors</h3>
									<h4>By Bob</h4>
								</div>

								<BsThreeDotsVertical id="font" />
							</div>

							<div>
								<input type="checkbox" />
								<div>
									<h3>Server Maintainance</h3>
									<h4>By Melody</h4>
								</div>

								<BsThreeDotsVertical id="font" />
							</div>

							<div>
								<input type="checkbox" />
								<div>
									<h3>Update customers' testimony</h3>
									<h4>By Chimezie</h4>
								</div>

								<BsThreeDotsVertical id="font" />
							</div>

							<div>
								<input type="checkbox" />
								<div>
									<h3>Mobile Application Upgrade</h3>
									<h4>By Shegun</h4>
								</div>

								<BsThreeDotsVertical id="font" />
							</div>

							<div>
								<input type="checkbox" />
								<div>
									<h3>Replace digital brands and logos</h3>
									<h4>By Jasper</h4>
								</div>

								<BsThreeDotsVertical id="font" />
							</div>
						</div>

						<div className="popularVendors">
							<header>
								<h2>Popular Vendors</h2>
								<hgroup>
									<h3>Latest</h3>
									<h3>Month</h3>
									<h3>All time</h3>
								</hgroup>
							</header>

							<section>
								<div>
									<h2>Orlands Enterprise</h2>
									<h3>Waste Disposal Vendor</h3>
									<h4>Location: Owerri</h4>
								</div>

								<div>
									<div>
										<h2>19,200</h2>
										<h4>sales</h4>
									</div>

									<div>
										<h2>1046</h2>
										<h4>sales</h4>
									</div>
								</div>
							</section>

							<section>
								<div>
									<h2>Phillip Org</h2>
									<h3>Waste Disposal Vendor</h3>
									<h4>Location: Umuahia</h4>
								</div>

								<div>
									<div>
										<h2>19,200</h2>
										<h4>sales</h4>
									</div>

									<div>
										<h2>1046</h2>
										<h4>sales</h4>
									</div>
								</div>
							</section>

							<section>
								<div>
									<h2>Kings ltd</h2>
									<h3>Waste Disposal Vendor</h3>
									<h4>Location: Anambra</h4>
								</div>

								<div>
									<div>
										<h2>19,200</h2>
										<h4>sales</h4>
									</div>

									<div>
										<h2>1046</h2>
										<h4>sales</h4>
									</div>
								</div>
							</section>

							<section>
								<div>
									<h2>Orlands Enterprise</h2>
									<h3>Waste Disposal Vendor</h3>
									<h4>Location: Owerri</h4>
								</div>

								<div>
									<div>
										<h2>19,200</h2>
										<h4>sales</h4>
									</div>

									<div>
										<h2>1046</h2>
										<h4>sales</h4>
									</div>
								</div>
							</section>
						</div>
						{/* 
						<div className="what-people-say">
							<Slider className="slider-wrapper">
								{content.map((item, index) => (
									<div
										key={index}
										className="slider-content"
										style={{ background: `${item.background}` }}
									>
										<div className="inner" style={{ background: `${item.background}` }}>
											<h2>{item.name}</h2>
											<span>{item.title}</span>
											<p>{item.description}</p>
											<button>{item.button}</button>
										</div>
									</div>
								))}
							</Slider>
						</div> */}
					</section>
				</section>
			)}
		</div>
	);
};

export default Home;
