import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';
import Axios from 'axios';

// import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
let status = {
	percentage2: 20,
	percentage3: 70
};

export default () => {
	const [ percentage ] = useState(status);
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
		<section className="graph-expenses">
			<div className="goal-grad">
				<div className="graduate">
					<img src={require('../../assets/graduate.png')} alt="img" />
					<h2>Masters Program</h2>
					<h4>Education</h4>
					<div>
						<p>&#8358;1,832,000</p>
						<p>&#8358;5,832,000</p>
					</div>
					<div className="progress-bar2">
						<div className="filler2" style={{ width: `${percentage.percentage2}%` }} />
					</div>
				</div>

				<div className="graduate">
					<img src={require('../../assets/graduate.png')} alt="img" />
					<h2>Masters Program</h2>
					<h4>Education</h4>
					<div>
						<p>&#8358;1,832,000</p>
						<p>&#8358;5,832,000</p>
					</div>
					<div className="progress-bar3">
						<div className="filler3" style={{ width: `${percentage.percentage3}%` }} />
					</div>{' '}
				</div>
				<h2 id="goals">
					Goals
					<img src={require('../../assets/brown-add.png')} alt="img" />
				</h2>
			</div>

			{/* ----------------------------------------side expense box-------------------------------------------- */}
			<div className="expenses">
				<hgroup>
					<h2>Recent Expenses</h2>
					<NavLink to="/page/expense" id="link">
						<h4>View all</h4>
					</NavLink>
				</hgroup>

				{expenses ? (
					expenses.slice(0, 5).map((expense) => (
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
	);
};
