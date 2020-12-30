import React, { useState, useEffect } from 'react';
import './styles.css';

const Nav = () => {
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
