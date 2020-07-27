import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Load from './loaderPage/Load';

const Hub = () => {
	const [ isLoading, setIsLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 6500);
	}, []);

	return (
		<div>
			{isLoading ? (
				<Load />
			) : (
				<main className="body">
					<Home />
				</main>
			)}
		</div>
	);
};

export default Hub;
