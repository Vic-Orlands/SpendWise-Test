import React from 'react';
import '../../styles/Users.css';

import Navigation from '../section/Navigation';
import Sidemenu from '../section/Sidemenu';
import { NavLink } from 'react-router-dom';

const Users = () => {
	return (
		<div className="usersBody">
			<Navigation />
			<Sidemenu />

			<section className="users">
				<div>
					<div className="userDiv">
						<div>
							<h3>
								Waste Pickers<span>(13)</span>
							</h3>
							<p>People who pick wastes</p>
						</div>
						<NavLink to="/users" id="userLink">
							<p>See more</p>
						</NavLink>
					</div>

					<div className="userDiv">
						<div>
							<h3>
								Waste Vendors<span>(3)</span>
							</h3>
							<p>
								Those that sell and buy<br /> wastes from pickers
							</p>
						</div>
						<NavLink to="/vendors" id="userLink">
							<p>See more</p>
						</NavLink>{' '}
					</div>

					<div className="userDiv">
						<div>
							<h3>
								Waste Generators<span>(8)</span>
							</h3>
							<p>
								Consumers that want to <br />dispose or sell off their wastes
							</p>
						</div>
						<NavLink to="/generators" id="userLink">
							<p>See more</p>
						</NavLink>{' '}
					</div>

					<div className="userDiv">
						<div>
							<h3>
								Waste Recyclers<span>(9)</span>
							</h3>
							<p>
								Vendors that buy wastes<br /> and recycle them for use
							</p>
						</div>
						<NavLink to="/recyclers" id="userLink">
							<p>See more</p>
						</NavLink>{' '}
					</div>

					<div className="userDiv">
						<div>
							<h3>
								Eye Witnesses<span>(4)</span>
							</h3>
							<p>
								Passerbys that report to <br />the platform the nature <br />of our dumpsites
							</p>
						</div>
						<NavLink to="/witness" id="userLink">
							<p>See more</p>
						</NavLink>{' '}
					</div>

					<div className="userDiv">
						<div>
							<h3>
								Waste Agencies<span>(2)</span>
							</h3>
							<p>
								Recycling agaencies that <br />buys wastes for recycling
							</p>
						</div>
						<NavLink to="/agencies" id="userLink">
							<p>See more</p>
						</NavLink>{' '}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Users;
