import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../../../styles/users.styles/Details.css';

import Navigation from '../../core.sections/Navigation';
import Sidemenu from '../../core.sections/Sidemenu';
import Footer from '../../core.sections/Footer';
import { FaPiggyBank } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { IoIosClose } from 'react-icons/io';

// -------modal custom default styling----------
const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '25%',
		transform: 'translate(-25%, -50%)',
		background: '#1d2939'
	}
};

const Details = (props) => {
	let subtitle;
	const [ user, setUser ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(true);
	const [ modalIsOpen, setModalIsOpen ] = useState(false);

	const proxyurl = 'https://cors-anywhere.herokuapp.com/';
	const uri = 'http://admin.wm-has.org.ng/api/user/adminApiUser';

	const fetchedData = () => {
		fetch(proxyurl + uri)
			.then((res) => res.json())
			.then((res) => {
				setUser(res.data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		fetchedData();
	}, []);
	
	const one = user.find( (oneUser ) => oneUser.id === '1' )
	
	// ----------------modal funct---------------
	const openModal = () => {
		setModalIsOpen(true);
	};
	
	const afterOpenModal = () => {
		subtitle.style.color = '#fff';
	};
	
	const closeModal = () => {
		setModalIsOpen(false);
	};
	// ----------------modal funct---------------

	return (
		<div className="detailsBody">
			<Navigation />
			<Sidemenu />

			{isLoading ? (
				<div className="gifLoad">
					<img src={require('../../../assets/load.gif')} alt="Loading..." />
				</div>
			) : (
				<section className="details">
					<h1>User Details</h1>

						<section className="flexDivs">
						<section className="username">
							<div>
								<img src={require('../../../assets/wmhas black.PNG')} alt="user_img" />
								<h2>{one.name} {one.other_name}</h2>
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
									<h3>{one.email}</h3>
								</label>

								<label>
									Platform:
									<h3>Android</h3>
								</label>

								<label>
									gender:
									<h3>{one.gender}</h3>
								</label>

								<label>
									Phone:
									<h3>{one.number}</h3>
								</label>
							</div>

							<div className="thirdDiv">
								<button id="btn1">
									<NavLink to="/message" id="msgLink">
										Send Mail
									</NavLink>
								</button>
								<button id="btn2" onClick={openModal}>
									Warn
								</button>
								<button id="btn3" onClick={openModal}>
									Ban
								</button>
							</div>

							{/* -------modal div------------ */}

							<Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} style={customStyles}>
								<div className="confirmModal">
									<div>
										<h2 ref={(_subtitle) => (subtitle = _subtitle)}>Confirmation</h2>

										<IoIosClose onClick={closeModal} className="close-modal" />
									</div>

									<hr />

									<h4>Are you sure you want to remove this user?</h4>
									<h6>
										<span className="text-danger">Warning:</span>This action is not reversible
									</h6>

									<div className="btnParent">
									<button className="btn btn-success">Proceed</button>
									<button onClick={closeModal} className="btn btn-danger">Cancel</button>
									</div>
								</div>
							</Modal>

							{/* -------modal div------------ */}
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
