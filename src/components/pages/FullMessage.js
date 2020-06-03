import React, { useState, useEffect } from 'react';
import Navigation from '../section/Navigation';
import Sidemenu from '../section/Sidemenu';
import Footer from '../section/Footer';
import '../../styles/FullMessage.css';

const FullMessage = (props) => {
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 8000);
	}, []);

	const { values: { name, message } } = props;

	return (
		<div>
			<Navigation />
			<Sidemenu />

			{loading ? (
				<div className="gifLoad">
					<img src={require('../../assets/load.gif')} alt="Loading..." />
					<h1> Loading, please be patient </h1>
				</div>
			) : (
				<section className="fullMessage">
					<div>
						<h1>Message</h1>
					</div>

					<div className="readMsg">
						<h2>{name}</h2>

						<p>{message}</p>

						<button>Reply</button>
					</div>
				</section>
			)}

			<Footer />
		</div>
	);
};

export default FullMessage;
