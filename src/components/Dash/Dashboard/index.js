import React, { useState, useEffect } from 'react';
import Sidemenu from '../Sidemenu/index';
import Nav from '../Nav/index';
import TopDash from '../Top-Dash/index';

import './styles.css';
import Axios from 'axios';
export default () => {
	const [ expenses, setExpenses ] = useState([]);

	useEffect(() => {
		// ------------------------get user token from saved storage--------------------------
		let userToken =
			JSON.parse(localStorage.getItem('authToken')) || JSON.parse(sessionStorage.getItem('authToken'));

		// ------------------------getting all expense transactions of user--------------------------
		Axios.post(
			'https://www.spendwise.ng/api/tx/all_tx/',
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
					setExpenses(res.data.results);
				}
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	}, []);
	console.log(expenses);

	return (
		<section>
			<Sidemenu />
			<section className="dash">
				<Nav />

				<TopDash />

				<section className="graph-expenses">
					<div className="graph" />
					<div className="expenses">
						<hgroup>
							<h2>Recent Expenses</h2>
							<h4>View all</h4>
						</hgroup>

						{expenses.map((expense) => (
							<div className="trans" key={expense.id}>
								{expense.category === 'Food/Drinks' ? (
									<img src={require('../assets/food.png')} alt="car+img" />
								) : (
									<img src={require('../assets/car.png')} alt="car+img" />
								)}
								<div>
									<h5>{expense.category}</h5>
									<p>20 sep, 4:30pm</p>
								</div>

								<h6>N{expense.tx_amount}</h6>
							</div>
						))}
					</div>
				</section>
			</section>
		</section>
	);
};
