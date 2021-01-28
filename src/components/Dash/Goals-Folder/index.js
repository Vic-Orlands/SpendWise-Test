import React from 'react';
import './styles.css';
import Nav from '../Nav';
import Sidemenu from '../Sidemenu/index';

export default () => {
	return (
		<main>
			<Sidemenu />
			<section>
				<Nav />

				<section className="goals-content">
					<div>
						<img src={require('../assets/construction.png')} alt="img" />
						<h3>Coming soon...</h3>
					</div>
				</section>
			</section>
		</main>
	);
};
