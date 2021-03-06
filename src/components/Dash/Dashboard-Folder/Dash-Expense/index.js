import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';
import Axios from 'axios';

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
import brownAdd from "../../assets/brown-add.png"

let status = {
	percentage2: 30,
	percentage3: 60
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
				setMessage('No recent expenses');
			});
	}, []);

	return (
		<section className="graph-expenses">
			<div className="goal-grad">
				<div className="graduate">
					<img src={graduate} alt="img" />
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
					<img src={graduate} alt="img" />
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
					<img src={brownAdd} alt="img" />
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

				{expenses.slice(0, 5).map((expense) => (
					<div className="trans" key={expense.id}>
						{expense.category === 'Food/Drinks' ? (
							<img src={food} alt="img" />
						) : expense.category === 'Bills/Utilities' ? (
							<img src={receipt} alt="img" />
						) : expense.category === 'Education' ? (
							<img src={graduate} alt="img" />
						) : expense.category === 'Entertainment' ? (
							<img src={celebration} alt="img" />
						) : expense.category === 'Gifts/Donations' ? (
							<img src={gift} alt="img" />
						) : expense.category === 'Medical/Healthcare' ? (
							<img src={cardiogram} alt="img" />
						) : expense.category === 'Insurance' ? (
							<img src={Insurance} alt="img" />
						) : expense.category === 'Investment/Savings' ? (
							<img src={statistics} alt="img" />
						) : expense.category === 'Shopping' ? (
							<img src={shopping} alt="img" />
						) : expense.category === 'Transportation' ? (
							<img src={car} alt="img" />
						) : expense.category === 'Household' ? (
							<img src={home} alt="img" />
						) : expense.category === 'Family' ? (
							<img src={family} alt="img" />
						) : expense.category === 'Miscellaneous' ? (
							<img src={levels} alt="img" />
						) : expense.category === 'Banking Charges' ? (
							<img src={museum} alt="img" />
						) : expense.category === 'Business Expense' ? (
							<img src={business} alt="img" />
						) : expense.category === 'Travel' ? (
							<img src={suitcase} alt="img" />
						) : expense.category === 'Debt Payment' ? (
							<img src={debt} alt="img" />
						) : (
							<img src={uncategorized} alt="img" />
						)}

						<div>
							<h5>{expense.category}</h5>
							<p>20 sep, 4:30pm</p>
						</div>

						<h6>N{expense.tx_amount}</h6>
					</div>
				))}

				{message ? (
					<div className="noExpense">
						<img src={info} alt="img" />
						<h5>{message}</h5>
					</div>
				) : (
					''
				)}
			</div>
		</section>
	);
};
