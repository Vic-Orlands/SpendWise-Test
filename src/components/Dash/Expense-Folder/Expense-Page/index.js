import React, { useState } from 'react';
import './styles.css';
import Nav from '../../../Dash/Nav/index';
import Sidemenu from '../../../Dash/Sidemenu/index';
import RecordExpense from "../Record-Expense/index"

import { BsArrowDown } from 'react-icons/bs';

let status = {
	percentage: 60
};

export default () => {
	const [ percentage ] = useState(status);
	const [ open, setOpen ] = useState(false);
	const [ oneTrack, setOneTrack ] = useState('');

	const openSide = (e) => {
		setOpen(!open);
	};

	return (
		<section>
			<Sidemenu />

			<section className="expense-container">
				<Nav />

				<section className="expense-body">
					<div className="top-section">
						<div>
							<h2>Expense</h2>

							<h4 onClick={(e) => {
								openSide(e);
							}}>Record Expense</h4>
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

								<tbody>
									<tr>
										<td>
											<input type="checkbox" id="inpt" />
											<img src={require('../../assets/food.png')} alt="img" />
											<p>Feeding</p>
										</td>

										<td>
											5 Transactions
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

									<tr>
										<td>
											<input type="checkbox" id="inpt" />
											<img src={require('../../assets/food.png')} alt="img" />
											<p>Feeding</p>
										</td>

										<td>
											5 Transactions
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

									<tr>
										<td>
											<input type="checkbox" id="inpt" />
											<img src={require('../../assets/food.png')} alt="img" />
											<p>Feeding</p>
										</td>

										<td>
											5 Transactions
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

									<tr>
										<td>
											<input type="checkbox" id="inpt" />
											<img src={require('../../assets/food.png')} alt="img" />
											<p>Feeding</p>
										</td>

										<td>
											5 Transactions
											<BsArrowDown id="fnt" />
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
								</tbody>
							</table>
						</section>

						<section className="expense-info">
							{oneTrack ? (
								<div className="expense-info-content">Hello World</div>
							) : (
								<div className="expense-error">
									<img src={require('../../assets/info.png')} alt="img" />
									<p>Select budget to display information</p>
								</div>
							)}
						</section>
					</section>
				</section>
			</section>

			<RecordExpense open={open} onClose={openSide} />

		</section>
	);
};
