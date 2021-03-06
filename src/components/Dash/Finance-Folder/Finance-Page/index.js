import React, { useState, useEffect } from 'react';
import Nav from '../../Nav';
import Sidemenu from '../../Sidemenu';
import Modal from '../Finance-Modal';
import './styles.css';

import add from '../../assets/add.png';

import { BiDotsVerticalRounded } from 'react-icons/bi';
import { IoIosArrowDown, IoIosArrowRoundDown, IoIosArrowRoundUp } from 'react-icons/io';

import Axios from 'axios';

export default () => {
	const [ open, setOpen ] = useState(false);
	const [ banks, setBanks ] = useState([]);

	const openModal = (e) => {
		setOpen(!open);
	};

	const fetchBanks = () => {
		// ------------------------get user token from saved storage--------------------------
		let userToken =
			JSON.parse(localStorage.getItem('authToken')) || JSON.parse(sessionStorage.getItem('authToken'));

		Axios.get('https://www.spendwise.ng/api/accounts/banks/', {
			headers: {
				Authorization: `Token ${userToken}`
			}
		})
			.then((res) => {
				if (res.status === 200) {
					setBanks(res.data);
					console.log(res.data);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		fetchBanks();
	}, []);

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
							<img src={add} alt="img" />
							<h3>Add Bank Account</h3>
						</div>
					</div>

					<section className="bank-accts">
						{banks.map((bank) => (
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
											<h3>{bank.bank_name}</h3>
											<h5>{bank.ac_type} Account</h5>
										</div>
										<h4>
											Month
											<IoIosArrowDown />
										</h4>
									</div>

									<div className="middle-box">
										<h6>
											<small>Account number</small> {bank.account_number}
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
						))}
					</section>
				</section>
			</section>
			<Modal open={open} onClose={openModal} />
		</main>
	);
};
