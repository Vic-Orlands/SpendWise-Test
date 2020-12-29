import React from 'react';
import Sidemenu from '../Sidemenu/index';
import Nav from '../Nav/index';
import TopDash from '../Top-Dash/index';

import './styles.css';
export default (props) => {
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

						<div className="trans">
							<img src={require('../assets/car.png')} alt="car+img" />
							<div>
								<h5>Transport</h5>
								<p>20 sep, 4:30pm</p>
							</div>

							<h6>N1,284.89</h6>
						</div>

						<div className="trans">
							<img src={require('../assets/food.png')} alt="car+img" />
							<div>
								<h5>Food</h5>
								<p>20 sep, 4:30pm</p>
							</div>

							<h6>N752.68</h6>
						</div>

						<div className="trans">
							<img src={require('../assets/car.png')} alt="car+img" />
							<div>
								<h5>Transport</h5>
								<p>20 sep, 4:30pm</p>
							</div>

							<h6>N1,000.00</h6>
						</div>

						<div className="trans">
							<img src={require('../assets/food.png')} alt="car+img" />
							<div>
								<h5>Food</h5>
								<p>20 sep, 4:30pm</p>
							</div>

							<h6>N256.16</h6>
						</div>

						<div className="trans">
							<img src={require('../assets/car.png')} alt="car+img" />
							<div>
								<h5>Transport</h5>
								<p>20 sep, 4:30pm</p>
							</div>

							<h6>N1,000.00</h6>
						</div>
					</div>
				</section>
			</section>
		</section>
	);
};
