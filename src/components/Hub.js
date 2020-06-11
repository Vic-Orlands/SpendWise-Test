import React, { useState, useEffect } from 'react';
import Load from './Loading/Load';
import Home from './pages/Home';

const Hub = () => {
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading({
				loading: false
			});
		}, 5000);
	});

	return (
		<body>
			{loading === true ? (
				<Load />
			) : (
				<main className="body">
					<Home />
				</main>
			)}
		</body>
	);
};

export default Hub;
