import React, { useState, useEffect } from 'react';
import Nav from '../../Nav';
import Sidemenu from '../../Sidemenu';
import './styles.css';

import DonutChart from 'react-donut-chart';

import CreateBudget from '../CreateBudget';
import UpdateBudget from '../Update-Budget';
import ArchivedBudgets from '../ArchivedBudgets';

import Axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';
import { BsArrowDown } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { GrStatusGood } from 'react-icons/gr';

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

export default () => {
	const [ track, setTrack ] = useState([]);
	const [ noBudget, setNoBudget ] = useState('');
	const [ open, setOpen ] = useState(false);
	const [ openArchive, setOpenArchive ] = useState(false);
	const [ editBdget, setEditBdget ] = useState(false);
	const [ openMobileModal, setOpenMobileModal ] = useState(false);
	const [ budget, setBudget ] = useState('');
	const [ oneTrack, setOneTrack ] = useState('');
	const [ archiveMessage, setArchiveResponse ] = useState('');
	const [ submitting, setSubmitting ] = useState(false);
	const [ archives, setArchives ] = useState([]);
	const [ errorResponse, setErrorResponse ] = useState('');

	// ------------------------get user token from saved storage--------------------------
	let userToken = JSON.parse(localStorage.getItem('authToken')) || JSON.parse(sessionStorage.getItem('authToken'));

	useEffect(
		() => {
			const fetchedUrl = () => {
				// ------------------------getting all budget status of user--------------------------
				Axios.post(
					'https://www.spendwise.ng/api/budget/all_budgets_status/',
					{
						body: {
							month: '10'
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
							setBudget(res.data.result);
						}
					})
					.catch((err) => {
						console.log(err);
					});
			};

			const fetchedUrl2 = () => {
				// ------------------------getting all budget status of user--------------------------
				Axios.post(
					'https://www.spendwise.ng/api/budget/all_budgets/',
					{
						body: {
							month: '10'
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
							setTrack(res.data.results);
						}
					})
					.catch((err) => {
						setNoBudget("You don't have a current budget");
					});
			};

			// getting list of archived budgets
			const fetchArchiveList = () => {
				// getting current month and year
				let currentMonth = new Date().getMonth() + 1;
				let currentYear = new Date().getUTCFullYear();

				let body = {
					year: `${currentYear}`,
					month: `${currentMonth}`
				};

				// getting all budget status of user
				Axios.post('https://www.spendwise.ng/api/budget/search_archive/', body, {
					headers: {
						Authorization: `Token ${userToken}`
					}
				})
					.then((res) => {
						if (res.status === 200) {
							setArchives(res.data.results);
						}
					})
					.catch((err) => {
						if (err.response) {
							setErrorResponse(err.response.data.message);
						}
					});
			};

			fetchedUrl();
			fetchedUrl2();
			fetchArchiveList();
			Promise.all([ fetchedUrl, fetchedUrl2, fetchArchiveList ]);
		},
		[ userToken ]
	);

	// ----------------------------------function to fetch user by id--------------------------------

	const fetchBudgetById = (item) => {
		let user_id = item;
		Axios.post(
			'https://www.spendwise.ng/api/budget/get_budget/',
			{
				budget_id: `${user_id}`
			},
			{
				headers: {
					Authorization: `Token ${userToken}`
				}
			}
		)
			.then((res) => {
				if (res.status === 200) {
					setOneTrack(res.data);
					setOpenMobileModal(!openMobileModal);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// opens create budget modal
	const openSide = (e) => {
		setOpen(!open);
	};

	// close archive modal
	const closeArchive = () => {
		setOpenArchive(!openArchive);
	};

	// open archive modal
	const showArchivedBudgets = () => {
		setOpenArchive(!openArchive);
	};

	// open edit modal to edit a budget
	let [ getBudget, setGetBudget ] = useState('');

	const openEditBudgt = (oneTrack) => {
		setEditBdget(!editBdget);
		setGetBudget(oneTrack);
	};

	// opens budget-info modal
	const onclose = () => {
		setOpenMobileModal(!openMobileModal);
	};

	// archiving budgets
	const archiveBudgetById = (oneTrack) => {
		setSubmitting(true);
		let budget_id = oneTrack;
		Axios.post(
			'https://www.spendwise.ng/api/budget/archive_budget/',
			{
				budget_id: `${budget_id}`
			},
			{
				headers: {
					Authorization: `Token ${userToken}`
				}
			}
		)
			.then((res) => {
				if (res.status === 200) {
					setArchiveResponse(res.data.message.toLowerCase());
					setTimeout(() => {
						window.location.reload();
					}, 3000);
				} else return null;
			})
			.catch((err) => {
				setSubmitting(false);
			});
	};

	return (
		<section>
			<Sidemenu />

			<section className="budget-container">
				<Nav />

				<div className="parent">
					<div className="top-section">
						<div>
							<h2>Budget</h2>
							<h5>
								You currently have <span>{budget.total}</span> set budgets,
								<span style={{ color: 'lightgreen' }}> {budget.on_track}</span> on-track and
								<span style={{ color: 'tomato' }}> {budget.exceeded}</span> exceeded
							</h5>
						</div>

						<h4
							onClick={(e) => {
								openSide(e);
							}}
						>
							Create Budget
						</h4>
					</div>

					<section className="box-section">
						<div>
							<h4>
								Status <MdKeyboardArrowDown id="icon" />
							</h4>
							<h4>
								Most Recent
								<MdKeyboardArrowDown id="icon" />
							</h4>
						</div>

						<h4
							onClick={(e) => {
								showArchivedBudgets(e);
							}}
						>
							View Archive
						</h4>
					</section>

					<section className="budget">
						<section className="category">
							<table className="table">
								<thead>
									<tr>
										<td className="text-left">Category</td>
										<td>Status</td>
										<td>Spent</td>
										<td>Budget</td>
										<td>
											Date Created
											<BsArrowDown />
										</td>
									</tr>
								</thead>

								{!noBudget ? (
									<tbody>
										{track.map((item) => (
											<tr
												className="shelf"
												onClick={() => fetchBudgetById(item.id)}
												key={item.id}
											>
												<td>
													<input
														type="checkbox"
														id="inpt"
														onClick={() => fetchBudgetById(item.id)}
														key={item.id}
													/>
													{item.category === 'Foods/Drinks' ? (
														<img src={food} alt="img" />
													) : item.category === 'Bills/Utilities' ? (
														<img src={receipt} alt="img" />
													) : item.category === 'Education' ? (
														<img src={graduate} alt="img" />
													) : item.category === 'Entertainment' ? (
														<img src={celebration} alt="img" />
													) : item.category === 'Gifts/Donations' ? (
														<img src={gift} alt="img" />
													) : item.category === 'Medical/Healthcare' ? (
														<img src={cardiogram} alt="img" />
													) : item.category === 'Insurance' ? (
														<img src={Insurance} alt="img" />
													) : item.category === 'Investment/Savings' ? (
														<img src={statistics} alt="img" />
													) : item.category === 'Shopping' ? (
														<img src={shopping} alt="img" />
													) : item.category === 'Transportation' ? (
														<img src={car} alt="img" />
													) : item.category === 'Household' ? (
														<img src={home} alt="img" />
													) : item.category === 'Family' ? (
														<img src={family} alt="img" />
													) : item.category === 'Miscellaneous' ? (
														<img src={levels} alt="img" />
													) : item.category === 'Banking Charges' ? (
														<img src={museum} alt="img" />
													) : item.category === 'Business Expense' ? (
														<img src={business} alt="img" />
													) : item.category === 'Travel' ? (
														<img src={suitcase} alt="img" />
													) : item.category === 'Debt Payment' ? (
														<img src={debt} alt="img" />
													) : (
														<img src={uncategorized} alt="img" />
													)}
													<p>{item.category}</p>
												</td>

												<td id="h3">{item.status}</td>
												<td id="h4">&#8358;{item.balance}</td>
												<td id="h45">&#8358;{item.budget_amount}</td>
												<td id="h3">
													{new Intl.DateTimeFormat('en-GB', {
														month: 'long',
														day: '2-digit',
														year: 'numeric'
													}).format(new Date(item.date_created))}
												</td>
											</tr>
										))}
									</tbody>
								) : (
									<div className="noBudget">
										<img src={require('../../assets/info.png')} alt="img" />
										<h5>{noBudget}</h5>
									</div>
								)}
							</table>
						</section>

						<section className="budget-info">
							{oneTrack ? (
								<section>
									{!archiveMessage ? (
										<div className="budget-info-content">
											<p>
												You have <span>₦{oneTrack.balance}</span> left on this budget
											</p>
											<DonutChart
												data={[
													{
														label: 'Amount Left',
														value: 25
													},
													{
														label: 'Amount Spent',
														value: 75,
														isEmpty: true
													}
												]}
												height={280}
												width={300}
												legend={false}
												colors={[ '#d9dae1' ]}
												emptyColor="#0089b4"
												innerRadius={0.58}
												outerRadius={0.63}
											/>

											<div className="chkBox">
												<div>
													<div id="h4" />
													<h6>Amount Left</h6>
												</div>
												<div>
													<div id="h4" />
													<h6>Amount Spent</h6>
												</div>
											</div>

											<div className="sumSpent">
												<div>
													<h6>Amount Left</h6>
													<h5>₦{oneTrack.balance}</h5>
												</div>

												<div>
													<h6>Amount Spent</h6>
													<h5>₦{oneTrack.budget_amount}</h5>
												</div>
											</div>

											<div className="edit-archive-bdgt">
												<h3 onClick={() => openEditBudgt(oneTrack)}>Edit Budget</h3>
												<h3 onClick={() => archiveBudgetById(oneTrack.id)}>
													{!submitting ? 'Archive Budget' : 'Archiving...'}
												</h3>
											</div>
										</div>
									) : (
										<div className="success-info">
											<center>
												<GrStatusGood
													style={{ fontSize: 24, color: 'green', marginBottom: 10 }}
												/>
												<h1>Budget has been {archiveMessage}</h1>
											</center>
										</div>
									)}
								</section>
							) : (
								<div className="budget-error">
									<img src={info} alt="img" />
									<p>Select budget to display information</p>
								</div>
							)}
						</section>

						<section className="mobile-view">
							<h2>View all Budgets</h2>

							{track.map((item) => (
								<div
									className="mobile-view-content"
									onClick={() => fetchBudgetById(item.id)}
									key={item.id}
								>
									{item.category === 'Foods/Drinks' ? (
										<img src={food} alt="img" />
									) : item.category === 'Bills/Utilities' ? (
										<img src={receipt} alt="img" />
									) : item.category === 'Education' ? (
										<img src={graduate} alt="img" />
									) : item.category === 'Entertainment' ? (
										<img src={celebration} alt="img" />
									) : item.category === 'Gifts/Donations' ? (
										<img src={gift} alt="img" />
									) : item.category === 'Medical/Healthcare' ? (
										<img src={cardiogram} alt="img" />
									) : item.category === 'Insurance' ? (
										<img src={Insurance} alt="img" />
									) : item.category === 'Investment/Savings' ? (
										<img src={statistics} alt="img" />
									) : item.category === 'Shopping' ? (
										<img src={shopping} alt="img" />
									) : item.category === 'Transportation' ? (
										<img src={car} alt="img" />
									) : item.category === 'Household' ? (
										<img src={home} alt="img" />
									) : item.category === 'Family' ? (
										<img src={family} alt="img" />
									) : item.category === 'Miscellaneous' ? (
										<img src={levels} alt="img" />
									) : item.category === 'Banking Charges' ? (
										<img src={museum} alt="img" />
									) : item.category === 'Business Expense' ? (
										<img src={business} alt="img" />
									) : item.category === 'Travel' ? (
										<img src={suitcase} alt="img" />
									) : item.category === 'Debt Payment' ? (
										<img src={debt} alt="img" />
									) : (
										<img src={uncategorized} alt="img" />
									)}

									<div>
										<h3>
											{item.category}
											<small>{item.status}</small>
										</h3>
									</div>

									<h4>&#8358;{item.budget_amount}</h4>
								</div>
							))}

							{openMobileModal && (
								<section className="budget-infos">
									{!archiveMessage ? (
										<div className="budget-info-content">
											<AiOutlineClose id="font" onClick={onclose} />

											<p>
												You have <span>₦{oneTrack.balance}</span> left on this budget
											</p>
											<div className="chkBox">
												<div>
													<div id="h4" />
													<h6>Amount Left</h6>
												</div>
												<div>
													<div id="h4" />
													<h6>Amount Spent</h6>
												</div>
											</div>

											<div className="sumSpent">
												<div>
													<h6>Amount Left</h6>
													<h5>₦{oneTrack.balance}</h5>
												</div>

												<div>
													<h6>Amount Spent</h6>
													<h5>₦{oneTrack.budget_amount}</h5>
												</div>
											</div>

											<div className="edit-archive-bdgt">
												<h3 onClick={() => openEditBudgt(oneTrack)}>Edit Budget</h3>
												<h3 onClick={() => archiveBudgetById(oneTrack.id)}>
													{!submitting ? 'Archive Budget' : 'Archiving...'}
												</h3>
											</div>
										</div>
									) : (
										<div className="success-info">
											<AiOutlineClose id="font" onClick={onclose} />
											<center>
												<GrStatusGood id="successFont" />
												<h1>Budget has been {archiveMessage}</h1>
											</center>
										</div>
									)}
								</section>
							)}
						</section>
					</section>
				</div>
			</section>
			<CreateBudget open={open} onClose={openSide} />
			<ArchivedBudgets
				open={openArchive}
				onClose={closeArchive}
				archiveList={archives}
				errorResponse={errorResponse}
			/>
			<UpdateBudget open={editBdget} onClose={openEditBudgt} details={getBudget} />
		</section>
	);
};
