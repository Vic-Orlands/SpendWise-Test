import React from 'react';
import '../../../styles/users.styles/Vendors.css';

import Navigation from '../../core.sections/Navigation';
import Sidemenu from '../../core.sections/Sidemenu';
import { NavLink } from 'react-router-dom';

const Vendors = () => {
	return (
		<div className="usersBody">
			<Navigation />
			<Sidemenu />

			<section className="users">
				<div>
					<div className="userDiv">
						<div>
							<h3>
								Pickers<span>(13)</span>
							</h3>
							<p>People who pick wastes</p>
						</div>
						<NavLink to="/vendors" id="userLink">
							<p>See more</p>
						</NavLink>
					</div>

					<div className="userDiv">
						<div>
							<h3>
								Collectors<span>(3)</span>
							</h3>
							<p>
								Those that collect wastes<br />from pickers or users
							</p>
						</div>
						<NavLink to="/collectors" id="userLink">
							<p>See more</p>
						</NavLink>{' '}
					</div>

					<div className="userDiv">
						<div>
							<h3>
								Recycling Agencies<span>(9)</span>
							</h3>
							<p>
								Agencies that buy wastes<br /> and recycle them for use
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

export default Vendors;
