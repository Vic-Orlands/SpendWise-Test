import React, { useState, useEffect } from 'react';
import Sidemenu from '../../Sidemenu/index';
import Nav from '../../Nav/index';
import TopDash from '../Top-Dash/index';
import DashExpense from '../Dash-Expense/index';

import './styles.css';
import { IoIosAddCircle } from 'react-icons/io';

export default () => {
	const [ user, setUser ] = useState(null);

	useEffect(() => {
		let user = JSON.parse(localStorage.getItem('USER')) || JSON.parse(sessionStorage.getItem('USER'));

		if (user) {
			setUser(user.user);
		} else {
			setUser('User');
		}
	}, []);

	return (
		<section>
			<Sidemenu />
			<section>
				<Nav />

				<section className="main-dash">
					<header>
						<h1>Hello, {user}</h1>

						<div className="aside">
							<IoIosAddCircle id="addFnt" />
							<h3>Add Bank Account</h3>
						</div>
					</header>

					<section className="dash">
						<TopDash />

						<DashExpense />
					</section>
				</section>
			</section>
		</section>
	);
};
