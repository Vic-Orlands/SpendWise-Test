import React, { useState } from 'react';
import Nav from '../../../Dash/Nav/index';
import Sidemenu from '../../../Dash/Sidemenu/index';

import './styles.css';
import { IoIosArrowDown, IoIosArrowRoundDown, IoIosArrowRoundUp } from 'react-icons/io';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Modal from '../Finance-Modal';

export default () => {
	const [ open, setOpen ] = useState(false);

	const openModal = (e) => {
		setOpen(!open);
	};

	return (
		<main>
			<Sidemenu />

			<section className="finance">
				<Nav />

				<section className="finance-container">
					<div className="finance-top-section">
						<div>
							<h2>My Finance</h2>
							<h5>View account summary and add accounts</h5>
						</div>

						<div className="aside">
							<img src={require('../../assets/add.png')} alt="img" />
							<h3>Add Bank Account</h3>
						</div>
					</div>

					<section className="bank-accts">
						<div
							className="brown-box"
							onClick={(e) => {
								openModal(e);
							}}
						>
							<div className="grad1" />
							<div className="grad2" />
							<div className="brown-box-content">
								<div className="top-box">
									<div>
										<h3>Ecobank</h3>
										<h5>Savings Account</h5>
									</div>
									<h4>
										Month
										<IoIosArrowDown />
									</h4>
								</div>

								<div className="middle-box">
									<h6>
										<small>Balance</small> ₦2,700,000
									</h6>
									<BiDotsVerticalRounded id="dots" />
								</div>

								<div className="bottom-box">
									<div>
										<h5>
											<small>
												<IoIosArrowRoundDown id="arrw" />
												Inflow
											</small>
											₦1,000,000
										</h5>
									</div>

									<div>
										<h5>
											<small>
												<IoIosArrowRoundUp id="arrw" />
												Inflow
											</small>
											₦500,000
										</h5>
									</div>
								</div>
							</div>
						</div>

						<div
							className="brown-box"
							onClick={(e) => {
								openModal(e);
							}}
						>
							<div className="grad1" />
							<div className="grad2" />
							<div className="brown-box-content">
								<div className="top-box">
									<div>
										<h3>Ecobank</h3>
										<h5>Savings Account</h5>
									</div>
									<h4>
										Month
										<IoIosArrowDown />
									</h4>
								</div>

								<div className="middle-box">
									<h6>
										<small>Balance</small> ₦2,700,000
									</h6>
									<BiDotsVerticalRounded id="dots" />
								</div>

								<div className="bottom-box">
									<div>
										<h5>
											<small>
												<IoIosArrowRoundDown id="arrw" />
												Inflow
											</small>
											₦1,000,000
										</h5>
									</div>

									<div>
										<h5>
											<small>
												<IoIosArrowRoundUp id="arrw" />
												Inflow
											</small>
											₦500,000
										</h5>
									</div>
								</div>
							</div>
						</div>

						<div
							className="brown-box"
							onClick={(e) => {
								openModal(e);
							}}
						>
							<div className="grad1" />
							<div className="grad2" />
							<div className="brown-box-content">
								<div className="top-box">
									<div>
										<h3>Ecobank</h3>
										<h5>Savings Account</h5>
									</div>
									<h4>
										Month
										<IoIosArrowDown />
									</h4>
								</div>

								<div className="middle-box">
									<h6>
										<small>Balance</small> ₦2,700,000
									</h6>
									<BiDotsVerticalRounded id="dots" />
								</div>

								<div className="bottom-box">
									<div>
										<h5>
											<small>
												<IoIosArrowRoundDown id="arrw" />
												Inflow
											</small>
											₦1,000,000
										</h5>
									</div>

									<div>
										<h5>
											<small>
												<IoIosArrowRoundUp id="arrw" />
												Inflow
											</small>
											₦500,000
										</h5>
									</div>
								</div>
							</div>
						</div>
					</section>
				</section>
			</section>
			<Modal open={open} onClose={openModal} />
		</main>
	);
};
