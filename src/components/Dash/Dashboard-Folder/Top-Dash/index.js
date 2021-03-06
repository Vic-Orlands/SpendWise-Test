import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

import forward from "../../assets/forward.png"

import Axios from 'axios';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
	{ name: '1', uv: 4000, pv: 2400, amt: 2400 },
	{ name: '5', uv: 3000, pv: 1398, amt: 2210 },
	{ name: '10', uv: 2000, pv: 8900, amt: 2290 },
	{ name: '15', uv: 2780, pv: 3908, amt: 2000 },
	{ name: '20', uv: 1890, pv: 4800, amt: 2181 },
	{ name: '25', uv: 2390, pv: 3800, amt: 2500 },
	{ name: '30', uv: 3490, pv: 4300, amt: 2100 }
];

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
			});
	};

	render() {
		const { budget_status } = this.state;
		return (
			<section className="top-box-container">
				<div className="first-box">
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
					<NavLink to="/page/finance" id="dashLink">
						<div className="brown-box">
							<div className="grad1" />
							<div className="grad2" />
							<div>
								<h3>My Finance</h3>
								<p>Click to view account summary</p>
								<div className="view">
									<h6>View</h6>
									<img src={forward} alt="img" />
								</div>
							</div>
						</div>
					</NavLink>

					<NavLink to="/page/budget" id="dashLink">
						<div className="green-box">
							<div className="grad11" />
							<div className="grad12" />

							<div className="green-flex">
								<div id="un">
									<h2>{budget_status.total}</h2>
									<h3>Set Budgets</h3>
								</div>

								<div id="harsh">
									<h2>{budget_status.exceeded}</h2>
									<h3>Exceeded</h3>
								</div>

								<div id="trois">
									<h2>{budget_status.on_track}</h2>
									<h3>On track</h3>
								</div>
							</div>
						</div>
					</NavLink>
				</div>

				{/* --------------------------graph box--------------------------------- */}
				<div className="graph">
					<div className="graph-bar">
						<h2>Recent</h2>

						<h2>March, 2021</h2>
					</div>

					<ResponsiveContainer width="95%" height={300}>
						<LineChart
							data={data}
							height={300}
							width={800}
							margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
						>
							<XAxis dataKey="name" tick={{fontSize:12}} />
							<YAxis tick={{fontSize: 12}} />

							<Tooltip wrapperStyle={{ background: '#2e41c0', borderRadius: 3 }} />
							<CartesianGrid stroke="#dad5d5" strokeDasharray="1" vertical={false} />

							<Line type="monotone" dataKey="pv" stroke="#2e41c0" dot={false} activeDot={{ r: 9 }} strokeWidth={3} />
							<Line type="monotone" dataKey="uv" stroke="lightgrey" dot={false} strokeWidth={3} />
						</LineChart>
					</ResponsiveContainer>
				</div>
			</section>
		);
	}
}
