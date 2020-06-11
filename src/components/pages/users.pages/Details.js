import React, { useState, useEffect } from 'react';
import '../../../styles/users.styles/Details.css';

import Navigation from '../../section/Navigation';
import Sidemenu from '../../section/Sidemenu';
import Footer from '../../section/Footer';
import { NavLink } from 'react-router-dom';
import { FaPiggyBank } from 'react-icons/fa';

const Details = () => {
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 4000);
	}, []);

	return (
		<div className="detailsBody">
			<Navigation />
			<Sidemenu />

			{loading ? (
				<div className="gifLoad">
					<img src={require('../../../assets/load.gif')} alt="Loading..." />
					<h1> Loading, please be patient </h1>
				</div>
			) : (
				<section className="details">
					<h1>User Details</h1>

					<section className="flexDivs">
						<section className="username">
							<div>
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h2>melody amaizu</h2>
							</div>

							<div className="firstDiv">
								<div id="gt">
									<FaPiggyBank id="font" />
									<div>
										<h3>Earnings</h3>
										<h4>$349,500</h4>
									</div>
								</div>

								<div id="gt">
									<FaPiggyBank id="font" />
									<div>
										<h3>Net</h3>
										<h4>$84,060</h4>
									</div>
								</div>
							</div>

							<div className="secondDiv">
								<label>
									Email:
									<h3>odinakauchu@gmail.com</h3>
								</label>

								<label>
									Platform:
									<h3>Android</h3>
								</label>

								<label>
									Active:
									<h3>Yes</h3>
								</label>

								<label>
									Phone:
									<h3>08054356723</h3>
								</label>
							</div>

							<div className="thirdDiv">
								<button id="btn1">Send Mail</button>
								<button id="btn2">Warn</button>
								<button id="btn3">Ban</button>
							</div>
						</section>

						<section className="userTransactionDetails">
							<section>
								<div className="first">
									<div>
										<div>
											<h2>Weekly Orders</h2>
											<h3>Average Weekly Orders</h3>
										</div>

										<h4>+17%</h4>
									</div>

									<div>
										<div>
											<h2>Weekly Transactions</h2>
											<h3>Average Transactions Increase</h3>
										</div>

										<h4>+80%</h4>
									</div>

									<div>
										<div>
											<h2>Weekly Revenue</h2>
											<h3>Average Revenue Increase</h3>
										</div>

										<h4>+6%</h4>
									</div>
								</div>

								<div className="second">
									<div>
										<div>
											<h2>Monthly Orders</h2>
											<h3>Average Monthly Orders</h3>
										</div>

										<h4>+30%</h4>
									</div>

									<div>
										<div>
											<h2>Monthly Transactions</h2>
											<h3>Average Transactions Increase</h3>
										</div>

										<h4>+30%</h4>
									</div>

									<div>
										<div>
											<h2>Monthly Revenue</h2>
											<h3>Average Revenue Increase</h3>
										</div>

										<h4>+10%</h4>
									</div>
								</div>

								<div className="third">
									<div>
										<div>
											<h2>Yearly Orders</h2>
											<h3>Average Yearly Orders</h3>
										</div>

										<h4>+40%</h4>
									</div>

									<div>
										<div>
											<h2>Yearly Transactions</h2>
											<h3>Average Transactions Increase</h3>
										</div>

										<h4>+80%</h4>
									</div>

									<div>
										<div>
											<h2>Yearly Revenue</h2>
											<h3>Average Revenue Increase</h3>
										</div>

										<h4>+8%</h4>
									</div>
								</div>
							</section>
						</section>

						<section className="financeBody">
							<h2>Finance Summary</h2>

							<div>
								<div>
									<h3>Total Transactions</h3>
									<h4>$500,000</h4>
								</div>

								<div>
									<h3>Total Transactions</h3>
									<h4>$500,000</h4>
								</div>

								<div>
									<h3>Total Transactions</h3>
									<h4>$500,000</h4>
								</div>

								<div>
									<h3>Total Transactions</h3>
									<h4>$500,000</h4>
								</div>
							</div>
						</section>
					</section>
				</section>
			)}
			<Footer />
		</div>
	);
};

export default Details;
