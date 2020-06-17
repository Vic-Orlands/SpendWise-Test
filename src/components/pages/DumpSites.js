import React, { useState, useEffect } from 'react';
import { MdMessage, MdArrowUpward, MdArrowDownward, MdError } from 'react-icons/md';
import { IoIosPerson, IoIosDownload } from 'react-icons/io';
import Navigation from '../core.sections/Navigation';
import Sidemenu from '../core.sections/Sidemenu';
import Footer from '../core.sections/Footer';
import '../../styles/DumpSite.css';

const DumpSite = () => {
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 4000);
	}, []);

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
				<section className="dumpBody">
					<div>
						<h1>Dump Sites</h1>
					</div>

					<div className="map">
						<h1>Locate waste dump sites</h1>
						<div className="gmap">
							<iframe
								id="gmap_canvas"
								src="https://maps.google.com/maps?q=owerri&t=&z=13&ie=UTF8&iwloc=&output=embed"
							/>
							<a href="https://www.whatismyip-address.com">my ip</a>
						</div>
					</div>
				</section>
			)}

			<Footer />
		</div>
	);
};

export default DumpSite;
