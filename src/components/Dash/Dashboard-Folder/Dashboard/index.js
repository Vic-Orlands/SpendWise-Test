import React, { useState, useEffect } from 'react';
import Sidemenu from '../../Sidemenu/index';
import Nav from '../../Nav/index';
import TopDash from '../Top-Dash/index';

import './styles.css';
import Axios from 'axios';

// import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

export default () => {
	const [ expenses, setExpenses ] = useState([]);
	const [ message, setMessage ] = useState('');

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
				if (err.response.status === 404) {
					setMessage(err.response.data.message);
				}
			});
	}, []);

	// --------------------------------graph section------------------------------------
	// const data = [
	// 	{ name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
	// 	{ name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
	// 	{ name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
	// 	{ name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
	// 	{ name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
	// 	{ name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
	// 	{ name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
	// ];

	return (
		<section>
			<Sidemenu />
			<section className="dash">
				<Nav />

				<TopDash />

				<section className="graph-expenses">
					<div className="graph">
						{/* <LineChart
							data={data}
							height={300}
							width={600}
							margin={{ top: 3, right: 30, left: 20, bottom: 25 }}
						>
							<XAxis dataKey="name" />
							<YAxis />
							<CartesianGrid strokeDasharray="1 3" />
							<Tooltip />
							<Line type="monotone" dataKey="pv" stroke="blue" activeDot={{ r: 8 }} dot={{ r: 0 }} />
							<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
						</LineChart> */}
						<center>
							<h1>Graph is coming soon...</h1>
						</center>
					</div>

					<div className="expenses">
						<hgroup>
							<h2>Recent Expenses</h2>
							<h4>View all</h4>
						</hgroup>

						{expenses ? (
							expenses.map((expense) => (
								<div className="trans" key={expense.id}>
									{expense.category === 'Food/Drinks' ? (
										<img src={require('../../assets/food.png')} alt="car+img" />
									) : (
										<img src={require('../../assets/car.png')} alt="car+img" />
									)}

									<div>
										<h5>{expense.category}</h5>
										<p>20 sep, 4:30pm</p>
									</div>

									<h6>N{expense.tx_amount}</h6>
								</div>
							))
						) : (
							<div className="errorMessage">
								<img src={require('../../assets/info.png')} alt="img" />
								<h5>{message}</h5>
							</div>
						)}
					</div>
				</section>
			</section>
		</section>
	);
};
