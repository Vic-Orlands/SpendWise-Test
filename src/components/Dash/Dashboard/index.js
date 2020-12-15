import React, { Component } from 'react';
import './styles.css';
import Sidemenu from '../Sidemenu/index';
import Nav from '../Nav/index';

import { IoIosAddCircle } from 'react-icons/io';
export default class index extends Component {
	render() {
		return (
			<section>
				<Sidemenu />
				<section className="dash">
					<Nav />

					<section className="main-dash">
						<aside>
							<IoIosAddCircle id="addFnt" />
							<h3>Add Bank Account</h3>
						</aside>

						<header>
							<div className="first-box">
								<img src={require('../assets/box.png')} alt="box-img" />

								<h2>$200,000</h2>
							</div>

							<div className="green-box">
								<div>
									<h3>Your account</h3>
								</div>
							</div>

							<div className="brown-box">
								<div>
									<h3>Your account</h3>
								</div>
							</div>
						</header>
						hello
						<h1>Dashboard</h1>
						<h1>Dashboard</h1>
						<h1>Dashboard</h1>
						<h1>Dashboard</h1>
						<h1>Dashboard</h1>
						<h1>Dashboard</h1>
						<h1>Dashboard</h1>
						<h1>Dashboard</h1>
					</section>
				</section>
			</section>
		);
	}
}
