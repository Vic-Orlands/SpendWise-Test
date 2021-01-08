import React, { Component } from 'react';
import './styles.css';

import Axios from 'axios';
export default class index extends Component {
	state = {
		percentage1: 50,
		budget_status: ''
	};

	componentDidMount = () => {
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
					this.setState({
						budget_status: res.data.result
					});
				}
			})
			.catch((err) => {
				console.log(err);
				// console.log(err.response.data);
			});
	};

	render() {
		const { budget_status } = this.state;
		return (
			<section className="top-box-container">
				<div className="first-box">
					<img src={require('../../assets/box.png')} alt="box-img" />

					<div className="first-box-content">
						<div className="spent">
							<h4>Spent</h4>
							<h5>June</h5>
						</div>
						<h2>NGN 40,000</h2>

						<div className="progress-bar">
							<div className="filler" style={{ width: `${this.state.percentage1}%` }} />
						</div>

						<div className="amt">
							<div className="tday">
								<h5>-&#8358;7000</h5>
								<h6>today</h6>
							</div>
							<div className="bdget">
								<h5>NGN 85,000</h5>
								<h6>Budget</h6>
							</div>
						</div>
					</div>
				</div>

				<div className="brown-green">
					<div className="brown-box">
						<div className="grad1" />
						<div className="grad2" />
						<div>
							<h3>My Finance</h3>
							<p>Click to view account summary</p>
							<div className="view">
								<h6>View</h6>
								<img src={require('../../assets/forward.png')} alt="img" />
							</div>
						</div>
					</div>

					<div className="green-box">
						<div className="grad11" />
						<div className="grad12" />

						<div className="green-flex">
							<div>
								<h2>{budget_status.total}</h2>
								<h3>Set Budgets</h3>
							</div>

							<div id="harsh">
								<h2>{budget_status.exceeded}</h2>
								<h3>Exceeded</h3>
							</div>

							<div>
								<h2>{budget_status.on_track}</h2>
								<h3>On track</h3>
							</div>
						</div>
					</div>
				</div>

				{/* --------------------------graph box--------------------------------- */}
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
			</section>
		);
	}
}
