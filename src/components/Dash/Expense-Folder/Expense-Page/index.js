import React, { useState, useEffect } from 'react';
import './styles.css';
import Nav from '../../Nav';
import Sidemenu from '../../Sidemenu';
import RecordExpense from '../Record-Expense';

import Axios from 'axios';

import { BsArrowDown } from 'react-icons/bs';
import { IoIosArrowDown, IoIosClose } from 'react-icons/io';

import graduate from '../../assets/graduate.svg';
import food from '../../assets/dinner.svg';
import car from '../../assets/car.svg';
import info from '../../assets/info.png';
import debt from '../../assets/debt.svg';
import receipt from '../../assets/receipt.svg';
import uncategorized from '../../assets/uncategorized.svg';
import Insurance from '../../assets/family.svg';
import family from '../../assets/group.svg';
import cardiogram from '../../assets/cardiogram.svg';
import celebration from '../../assets/celebration.svg';
import home from '../../assets/home.svg';
import shopping from '../../assets/shopping.svg';
import museum from '../../assets/museum.svg';
import suitcase from '../../assets/suitcase.svg';
import gift from '../../assets/giftbox.svg';
import business from '../../assets/hand-shake.svg';
import statistics from '../../assets/statistics.svg';
import levels from '../../assets/levels.svg';

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
	const [ errorMessage, setErrorMessage ] = useState('');

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
					console.log(res.data)
					setExpense(res.data);
					setErrorMessage(res.data.message);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		fetchExpenses();
	}, []);

	
	// let newArray = Object.entries(expense)
	// let category = expense.map((item) => item.category);
	// let totals = expense.map((item) => item.totals);
	
	// const checkExpenseArray = Array.isArray(category) && category.length ? category[0] : {};
	
	// const checkExpenseAmount = Array.isArray(totals) && totals.length ? totals[1] : {};

	// console.log(checkExpenseAmount);

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

								{errorMessage ? (
									<div className="noExpense">
										<img src={info} alt="img"/>
										<h3>{errorMessage}</h3>
									</div>
								) : (
									<tbody>
										{/* {Object.entries(checkExpenseArray).map((item, index) => (
											<tr onClick={openMobileModal} key={index}>
												<td>
													<input type="checkbox" id="inpt" />
													{item[0] === 'Food/Drinks' ? (
														<img src={food} alt="img" />
													) : item[0] === 'Bills/Utilities' ? (
														<img src={receipt} alt="img" />
													) : item[0] === 'Education' ? (
														<img src={graduate} alt="img" />
													) : item[0] === 'Entertainment' ? (
														<img src={celebration} alt="img" />
													) : item[0] === 'Gifts/Donations' ? (
														<img src={gift} alt="img" />
													) : item[0] === 'Medical/Healthcare' ? (
														<img src={cardiogram} alt="img" />
													) : item[0] === 'Insurance' ? (
														<img src={Insurance} alt="img" />
													) : item[0] === 'Investment/Savings' ? (
														<img src={statistics} alt="img" />
													) : item[0] === 'Shopping' ? (
														<img src={shopping} alt="img" />
													) : item[0] === 'Transportation' ? (
														<img src={car} alt="img" />
													) : item[0] === 'Household' ? (
														<img src={home} alt="img" />
													) : item[0] === 'Family' ? (
														<img src={family} alt="img" />
													) : item[0] === 'Miscellaneous' ? (
														<img src={levels} alt="img" />
													) : item[0] === 'Banking Charges' ? (
														<img src={museum} alt="img" />
													) : item[0] === 'Business Expense' ? (
														<img src={business} alt="img" />
													) : item[0] === 'Travel' ? (
														<img src={suitcase} alt="img" />
													) : item[0] === 'Debt Payment' ? (
														<img src={debt} alt="img" />
													) : (
														<img src={uncategorized} alt="img" />
													)}

													<p>{item[0]}</p>
												</td>

												<td>
													{item[1]} Transactions
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
										))} */}
									</tbody>
								)}
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
									<img src={info} alt="img" />
									<p>Select budget to display information</p>
								</div>
							)}
						</section>

						{/* expense transaction for mobile view(--this is conform with the design of the m0bile application */}
						<section className="mobile-view">
							<h2>View all Expenses</h2>

							{errorMessage ? (
								<div className="noExpense">
									<img src={require('../../assets/info.png')} alt="img" />
									<h3>{errorMessage}</h3>
								</div>
							) : (
								<div>
									{/* {Object.entries(checkExpenseArray).map((item, index) => (
										<div className="mobile-view-content" onClick={openMobileModal} key={index}>
											{item[0] === 'Food/Drinks' ? (
												<img src={food} alt="img" />
											) : item[0] === 'Bills/Utilities' ? (
												<img src={receipt} alt="img" />
											) : item[0] === 'Education' ? (
												<img src={graduate} alt="img" />
											) : item[0] === 'Entertainment' ? (
												<img src={celebration} alt="img" />
											) : item[0] === 'Gifts/Donations' ? (
												<img src={gift} alt="img" />
											) : item[0] === 'Medical/Healthcare' ? (
												<img src={cardiogram} alt="img" />
											) : item[0] === 'Insurance' ? (
												<img src={Insurance} alt="img" />
											) : item[0] === 'Investment/Savings' ? (
												<img src={statistics} alt="img" />
											) : item[0] === 'Shopping' ? (
												<img src={shopping} alt="img" />
											) : item[0] === 'Transportation' ? (
												<img src={car} alt="img" />
											) : item[0] === 'Household' ? (
												<img src={home} alt="img" />
											) : item[0] === 'Family' ? (
												<img src={family} alt="img" />
											) : item[0] === 'Miscellaneous' ? (
												<img src={levels} alt="img" />
											) : item[0] === 'Banking Charges' ? (
												<img src={museum} alt="img" />
											) : item[0] === 'Business Expense' ? (
												<img src={business} alt="img" />
											) : item[0] === 'Travel' ? (
												<img src={suitcase} alt="img" />
											) : item[0] === 'Debt Payment' ? (
												<img src={debt} alt="img" />
											) : (
												<img src={uncategorized} alt="img" />
											)}

											<div>
												<h3>
													{item[0]}
													<small>
														{item[1]} Transactions
														<IoIosArrowDown />
													</small>
												</h3>
											</div>

											{Object.values(checkExpenseAmount).map((item, index) => (
												<h4 key={index}>&#8358;{item}</h4>
											))}
										</div>
									))} */}
								</div>
							)}
						</section>

						{/* ---------mobile-exense-modal------- */}
						{openModal && (
							<section className="mobile-modal">
								<div className="mobile-view-content">
									<div>
										<IoIosClose id="closeFnt" onClick={openMobileModal} />

										<div>
											<img src={debt} alt="img" />

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
