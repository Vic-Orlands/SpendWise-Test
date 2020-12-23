import React, { useState, useEffect } from 'react';
import './styles.css';

const Nav = () => {
	const [ user, setUser ] = useState(null);

	useEffect(() => {
		let user = JSON.parse(localStorage.getItem('usertoken'));
		setUser(user.user)
	}, []);

	return (
		<nav>
			<img src={require('../assets/Vector.png')} alt="notifications_img" id="nav-icon" />

			<div>
				<h1>EF</h1>
				<p>{user}</p>
			</div>
		</nav>
	);
};

export default Nav;
