import React, { useState, useEffect } from 'react';
import { MdMessage, MdArrowUpward, MdArrowDownward, MdError } from 'react-icons/md';
import { IoIosPerson, IoIosDownload } from 'react-icons/io';
import Navigation from '../section/Navigation';
import Sidemenu from '../section/Sidemenu';
import Footer from '../section/Footer';
import '../../styles/Projects.css';

const Projects = () => {
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
				<section className="projectBody">
					<div>
						<h1>Projects</h1>
					</div>

					<div className="shelf">
						<div>
							<h5>
								<IoIosPerson className="hFont" />Total Users
							</h5>
							<h4>2500</h4>
							<p>
								4%<span>From last week</span>
							</p>
						</div>

						<div>
							<h5>
								<IoIosDownload className="hFont" />Total Downloads
							</h5>
							<h4>2500</h4>
							<p>
								7%<MdArrowDownward />
								<span>From last week</span>
							</p>
						</div>

						<div>
							<h5>
								<IoIosDownload className="hFont" />Total Vendors
							</h5>
							<h4>60</h4>
							<p>
								7%<MdArrowDownward />
								<span>From last week</span>
							</p>
						</div>

						<div>
							<h5>
								<MdMessage className="hFont" />Total Messages
							</h5>
							<h4>600</h4>
							<p>
								10%<MdArrowUpward />
								<span>From last week</span>
							</p>
						</div>

						<div>
							<h5>
								<MdError className="hFont" />Errors Issues
							</h5>
							<h4>30</h4>
							<p>
								2%<MdArrowUpward />
								<span>From last week</span>
							</p>
						</div>
					</div>
				</section>
			)}

			<Footer />
		</div>
	);
};

export default Projects;
