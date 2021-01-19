import React, { useState, useEffect } from 'react';
import Nav from '../../../Dash/Nav/index';
import Sidemenu from '../../../Dash/Sidemenu/index';

import CreateBudget from '../CreateBudget/index';

import './styles.css';
import Axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';
import { BsArrowDown } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';

export default () => {
	const [ track, setTrack ] = useState([]);
	const [ open, setOpen ] = useState(false);
	const [ openMobileModal, setOpenMobileModal ] = useState(false);
	const [ budget, setBudget ] = useState('');
	const [ oneTrack, setOneTrack ] = useState('');

	const fetchedUrl = () => {
		// ------------------------get user token from saved storage--------------------------
		let userToken =
			JSON.parse(localStorage.getItem('authToken')) || JSON.parse(sessionStorage.getItem('authToken'));

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
		// ------------------------get user token from saved storage--------------------------
		let userToken =
			JSON.parse(localStorage.getItem('authToken')) || JSON.parse(sessionStorage.getItem('authToken'));

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
				console.log(err);
				// console.log(err.response.data);
			});
	};

	useEffect(() => {
		fetchedUrl();
		fetchedUrl2();
		Promise.all([ fetchedUrl, fetchedUrl2 ]);
	}, []);

	// ----------------------------------function to fetch user by id--------------------------------

	const fetchBudgetById = (item) => {
		let user_id = item;
		// ------------------------get user token from saved storage--------------------------
		let userToken =
			JSON.parse(localStorage.getItem('authToken')) || JSON.parse(sessionStorage.getItem('authToken'));

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

	const openSide = (e) => {
		setOpen(!open);
	};

	const onclose = () => {
		setOpenMobileModal(!openMobileModal);
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

						<h4>View Archive</h4>
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

								<tbody>

								{track.map((item) => (
									<tr className="shelf" onClick={() => fetchBudgetById(item.id)} key={item.id}>
										<td>
											<input
												type="checkbox"
												id="inpt"
												onClick={() => fetchBudgetById(item.id)}
												key={item.id}
												/>
											<img src={require('../../assets/food.png')} alt="img" />
											<p>{item.category}</p>
										</td>

										<td id="h3">{item.status}</td>
										<td id="h4">&#8358;{item.balance}</td>
										<td id="h45">&#8358;{item.budget_amount}</td>
										<td id="h3">April 4, 2020</td>
									</tr>
								))}
								</tbody>
							</table>
						</section>

						<section className="budget-info">
							{oneTrack ? (
								<div className="budget-info-content">
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
										<h3>Edit Budget</h3>
										<h3>Archive Budget</h3>
									</div>
								</div>
							) : (
								<div className="budget-error">
									<img src={require('../../assets/info.png')} alt="img" />
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
									<img src={require('../../assets/food.png')} alt="img" />

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
											<h3>Edit Budget</h3>
											<h3>Archive Budget</h3>
										</div>
									</div>
								</section>
							)}
						</section>
					</section>
				</div>
			</section>
			<CreateBudget open={open} onClose={openSide} />
		</section>
	);
};
