import React from 'react';

import './styles.css';
import { IoIosArrowDown, IoIosArrowRoundDown, IoIosArrowRoundUp, IoIosClose } from 'react-icons/io';
import { BiDotsVerticalRounded } from 'react-icons/bi';

export default (props) => {
	const onclose = (e) => {
		props.onClose && props.onClose(e);
	};

	if (!props.open) {
		return null;
	}

	return (
		<section className="finance-modal">
			<section className="finance-modal-content">
				<div className="top-content">
					<IoIosClose onClick={onclose} id="closeFnt" />

					<div className="brown-box">
						<div className="grad1" />
						<div className="grad2" />
						<div className="brown-box-content">
							<div className="top-box">
								<div>
									<h3>Ecobank</h3>
									<h5>Savings Account</h5>
								</div>
								<h4>
									Month
									<IoIosArrowDown />
								</h4>
							</div>

							<div className="middle-box">
								<h6>
									<small>Balance</small> ₦2,700,000
								</h6>
								<BiDotsVerticalRounded id="dots" />
							</div>

							<div className="bottom-box">
								<div>
									<h5>
										<small>
											<IoIosArrowRoundDown id="arrw" />
											Inflow
										</small>
										₦1,000,000
									</h5>
								</div>

								<div>
									<h5>
										<small>
											<IoIosArrowRoundUp id="arrws" />
											Outflow
										</small>
										₦500,000
									</h5>
								</div>
							</div>
						</div>
					</div>

					<div className="activity-btn">
						<h3>Your Activities</h3>

						<h5>
							All <IoIosArrowDown id="arrw" />
						</h5>
					</div>
				</div>

				<section className="table-scroll">
					<table className="table">
						<thead>
							<tr>
								<td>Narration</td>
								<td>Date/Time</td>
								<td>Amount</td>
							</tr>
						</thead>

						<tbody>
							<tr>
								<td>Credit Alert</td>
								<td>10 Jun 2020, 3:25 PM</td>
								<td>₦1,850</td>
							</tr>

							<tr>
								<td>POS payment @Mega Chicken</td>
								<td>10 Jun 2020, 3:25 PM</td>
								<td>₦1,850</td>
							</tr>

							<tr>
								<td>POS payment @Mega Chicken</td>
								<td>10 Jun 2020, 3:25 PM</td>
								<td>₦1,850</td>
							</tr>

							<tr>
								<td>POS payment @Mega Chicken</td>
								<td>10 Jun 2020, 3:25 PM</td>
								<td>₦1,850</td>
							</tr>

							<tr>
								<td>POS payment @Mega Chicken</td>
								<td>10 Jun 2020, 3:25 PM</td>
								<td>₦1,850</td>
							</tr>
							<tr>
								<td>POS payment @Mega Chicken</td>
								<td>10 Jun 2020, 3:25 PM</td>
								<td>₦1,850</td>
							</tr>

							<tr>
								<td>POS payment @Mega Chicken</td>
								<td>10 Jun 2020, 3:25 PM</td>
								<td>₦1,850</td>
							</tr>

							<tr>
								<td>POS payment @Mega Chicken</td>
								<td>10 Jun 2020, 3:25 PM</td>
								<td>₦1,850</td>
							</tr>

							<tr>
								<td>POS payment @Mega Chicken</td>
								<td>10 Jun 2020, 3:25 PM</td>
								<td>₦1,850</td>
							</tr>

							<tr>
								<td>POS payment @Mega Chicken</td>
								<td>10 Jun 2020, 3:25 PM</td>
								<td>₦1,850</td>
							</tr>
							<tr>
								<td>POS payment @Mega Chicken</td>
								<td>10 Jun 2020, 3:25 PM</td>
								<td>₦1,850</td>
							</tr>
							<tr>
								<td>POS payment @Mega Chicken</td>
								<td>10 Jun 2020, 3:25 PM</td>
								<td>₦1,850</td>
							</tr>
													<tr>
								<td>POS payment @Mega Chicken</td>
								<td>10 Jun 2020, 3:25 PM</td>
								<td>₦1,850</td>
							</tr>
													<tr>
								<td>POS payment @Mega Chicken</td>
								<td>10 Jun 2020, 3:25 PM</td>
								<td>₦1,850</td>
							</tr>
													<tr>
								<td>POS payment @Mega Chicken</td>
								<td>10 Jun 2020, 3:25 PM</td>
								<td>₦1,850</td>
							</tr>
						</tbody>
					</table>
				</section>
			</section>
		</section>
	);
};
