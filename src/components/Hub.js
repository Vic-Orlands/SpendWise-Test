import React, { useState, useEffect } from 'react';
import Load from './Loading/Load';
import Analytics from './pages/Analytics';

const Hub = () => {
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading({
				loading: false
			});
		}, 8000);
	});

	return (
		<body>
			{loading === true ? (
				<Load />
			) : (
				<main className="body">
					<Analytics />
				</main>
			)}
		</body>
	);
};

export default Hub;
