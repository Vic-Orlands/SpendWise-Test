import React, { useState, useEffect } from 'react';
import './styles.css';
import Nav from '../../../Dash/Nav/index';
import Sidemenu from '../../../Dash/Sidemenu/index';
import RecordExpense from '../Record-Expense/index';

import { BsArrowDown } from 'react-icons/bs';
import { IoIosArrowDown, IoIosClose } from 'react-icons/io';

import Axios from 'axios';

let status = {
	percentage: 60
};

export default () => {
	const [ percentage ] = useState(status);
	const [ modalPercentage ] = useState(40);
	const [ open, setOpen ] = useState(false);
	const [ openModal, setOpenModal ] = useState(false);
	const [ oneTrack, setOneTrack ] = useState('');
	const [ expense, setExpense ] = useState([]);

	const openSide = (e) => {
		setOpen(!open);
	};

	const openMobileModal = (e) => {
		setOpenModal(!openModal);
	};

	// ----------------------------------function to fetch user by id--------------------------------

	const fetchExpenses = () => {
		// ------------------------get user token from saved storage--------------------------
		let userToken =
			JSON.parse(localStorage.getItem('authToken')) || JSON.parse(sessionStorage.getItem('authToken'));

		Axios.post(
			'https://www.spendwise.ng/api/tx/category_totals/',
			{
				body: {
					month: '10',
					year: '2021'
				}
			},
			{
				headers: {
					Authorization: `Token ${userToken}`
				}
			}
		)
			.then((res) => {
				if (res.status === 200) {
					setExpense(res.data);
					// console.log(res.data);
					console.log(res.data[0].category);
					console.log(res.data[1].totals);
					console.log(res.data[2].budgets);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		fetchExpenses();
	}, []);

	return (
		<section>
			<Sidemenu />

			<section className="expense-container">
				<Nav />

				<section className="expense-body">
					<div className="top-section">
						<div>
							<h2>Expense</h2>

							<h4
								onClick={(e) => {
									openSide(e);
								}}
							>
								Record Expense
							</h4>
						</div>
					</div>

					<section className="expense-category">
						<section className="expense-table">
							<table className="table">
								<thead>
									<tr>
										<td className="text-left">Category</td>
										<td>Transaction</td>
										<td>Spent</td>
										<td>Budget</td>
										<td />
									</tr>
								</thead>

								<tbody>
									<tr>
										<td>
											<input type="checkbox" id="inpt" />
											<img src={require('../../assets/food.png')} alt="img" />
											<p>Feeding</p>
										</td>

										<td>
											5 Transactions
											<BsArrowDown />
										</td>
										<td>&#8358;5,000</td>
										<td>&#8358;3,000</td>
										<td>
											<div className="progress-bar2">
												<div
													className="filler2"
													style={{ width: `${percentage.percentage}%` }}
												/>
											</div>
										</td>
									</tr>

									<tr>
										<td>
											<input type="checkbox" id="inpt" />
											<img src={require('../../assets/food.png')} alt="img" />
											<p>Feeding</p>
										</td>

										<td>
											5 Transactions
											<BsArrowDown />
										</td>
										<td>&#8358;5,000</td>
										<td>&#8358;3,000</td>
										<td>
											<div className="progress-bar2">
												<div
													className="filler2"
													style={{ width: `${percentage.percentage}%` }}
												/>
											</div>
										</td>
									</tr>

									<tr>
										<td>
											<input type="checkbox" id="inpt" />
											<img src={require('../../assets/food.png')} alt="img" />
											<p>Feeding</p>
										</td>

										<td>
											5 Transactions
											<BsArrowDown />
										</td>
										<td>&#8358;5,000</td>
										<td>&#8358;3,000</td>
										<td>
											<div className="progress-bar2">
												<div
													className="filler2"
													style={{ width: `${percentage.percentage}%` }}
												/>
											</div>
										</td>
									</tr>

									<tr>
										<td>
											<input type="checkbox" id="inpt" />
											<img src={require('../../assets/food.png')} alt="img" />
											<p>Feeding</p>
										</td>

										<td>
											5 Transactions
											<BsArrowDown id="fnt" />
										</td>
										<td>&#8358;5,000</td>
										<td>&#8358;3,000</td>
										<td>
											<div className="progress-bar2">
												<div
													className="filler2"
													style={{ width: `${percentage.percentage}%` }}
												/>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</section>

						<section className="expense-info">
							{oneTrack ? (
								<div className="expense-info-content">
									<h1>
										Feeding<small>
											5 Transactions <BsArrowDown />
										</small>
									</h1>

									<div>
										<h5>
											Food Stuff
											<small>1 Jan 2021 9:17pm</small>
										</h5>

										<h6>&#8358;5,000</h6>
									</div>

									<div>
										<h5>
											Food Stuff
											<small>1 Jan 2021 9:17pm</small>
										</h5>

										<h6>&#8358;5,000</h6>
									</div>

									<div>
										<h5>
											Food Stuff
											<small>1 Jan 2021 9:17pm</small>
										</h5>

										<h6>&#8358;5,000</h6>
									</div>

									<div>
										<h5>
											Food Stuff
											<small>1 Jan 2021 9:17pm</small>
										</h5>

										<h6>&#8358;5,000</h6>
									</div>

									<div>
										<h5>
											Food Stuff
											<small>1 Jan 2021 9:17pm</small>
										</h5>

										<h6>&#8358;5,000</h6>
									</div>
								</div>
							) : (
								<div className="expense-error">
									<img src={require('../../assets/info.png')} alt="img" />
									<p>Select budget to display information</p>
								</div>
							)}
						</section>

						{/* --------------------------------expense transaction for mobile view(--this is conform with the design of the m0bile application--)---------------------- */}
						<section className="mobile-view">
							<h2>View all Expenses</h2>

							<div className="mobile-view-content" onClick={openMobileModal}>
								<img src={require('../../assets/food.png')} alt="img" />

								<div>
									<h3>
										Housing
										<small>
											5 Transactions <IoIosArrowDown />
										</small>{' '}
									</h3>
								</div>

								<h4>&#8358;5,000</h4>
							</div>

							<div className="mobile-view-content">
								<img src={require('../../assets/food.png')} alt="img" />

								<div>
									<h3>
										Feeding{' '}
										<small>
											5 Transactions <IoIosArrowDown />
										</small>{' '}
									</h3>
								</div>

								<h4>&#8358;5,000</h4>
							</div>

							<div className="mobile-view-content">
								<img src={require('../../assets/food.png')} alt="img" />

								<div>
									<h3>
										Feeding{' '}
										<small>
											5 Transactions <IoIosArrowDown />
										</small>{' '}
									</h3>
								</div>

								<h4>&#8358;5,000</h4>
							</div>
						</section>

						{/* ---------mobile-exense-modal------- */}
						{openModal && (
							<section className="mobile-modal">
								<div className="mobile-view-content">
									<div>
										<IoIosClose id="closeFnt" onClick={openMobileModal} />

										<div>
											<img src={require('../../assets/food.png')} alt="img" />

											<div>
												<h3>
													Feeding{' '}
													<small>
														5 Transactions <IoIosArrowDown />
													</small>{' '}
												</h3>
											</div>

											<h4>&#8358;5,000</h4>
										</div>

										<div className="modal-progress-bar">
											<div className="modal-fill" style={{ width: `${modalPercentage}%` }} />
										</div>
									</div>

									<section className="modal-transactions">
										<div>
											<h5>
												Food Stuff
												<small>1 Jan 2021 9:17pm</small>
											</h5>

											<h6>&#8358;5,000</h6>
										</div>

										<div>
											<h5>
												Food Stuff
												<small>1 Jan 2021 9:17pm</small>
											</h5>

											<h6>&#8358;5,000</h6>
										</div>

										<div>
											<h5>
												Food Stuff
												<small>1 Jan 2021 9:17pm</small>
											</h5>

											<h6>&#8358;5,000</h6>
										</div>

										<div>
											<h5>
												Food Stuff
												<small>1 Jan 2021 9:17pm</small>
											</h5>

											<h6>&#8358;5,000</h6>
										</div>

										<div>
											<h5>
												Food Stuff
												<small>1 Jan 2021 9:17pm</small>
											</h5>

											<h6>&#8358;5,000</h6>
										</div>
									</section>
								</div>
							</section>
						)}
					</section>
				</section>
			</section>

			<RecordExpense open={open} onClose={openSide} />
		</section>
	);
};
