import React, { useState, useEffect } from 'react';
import Nav from '../../Nav/index';
import Sidemenu from '../../Sidemenu/index';

import './styles.css';
import Axios from 'axios';
import { MdKeyboardArrowDown, MdArrowDownward } from 'react-icons/md';

export default () => {
	const [ budget, setBudget ] = useState('');
	const [ track, setTrack ] = useState([]);
	const [ oneTrack, setOneTrack ] = useState("");

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
				console.log(res.data);
				setOneTrack(res.data);
				}
			})
			.catch((err) => {
				console.log(err);
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

						<h4>Create Budget</h4>
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
							<div className="top">
								<h5>Category</h5>

								<div>
									<h6>Status</h6>
									<h6>Spent</h6>
									<h6>Budget</h6>
									<h6>
										Date created<MdArrowDownward />
									</h6>
								</div>
							</div>

							<div className="bottom">
								{track.map((item) => (
									<div className="shelf" onClick={() => fetchBudgetById(item.id)} key={item.id}>
										<div>
											<input type="checkbox" id="inpt" />
											<img src={require('../../assets/food.png')} alt="img" />
											<p>{item.category}</p>
										</div>

										<div>
											<h3>{item.status}</h3>
											<h4>&#8358;{item.balance}</h4>
											<h4 id="scd">&#8358;{item.budget_amount}</h4>
											<h3>April 4, 2020</h3>
										</div>
									</div>
								))}
							</div>
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
					</section>
				</div>
			</section>
		</section>
	);
};
