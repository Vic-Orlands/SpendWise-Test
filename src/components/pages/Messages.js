import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MdMail, MdRefresh, MdDelete } from 'react-icons/md';
import { IoIosSend } from 'react-icons/io';
import { BsThreeDotsVertical } from 'react-icons/bs';

import Navigation from '../section/Navigation';
import Sidemenu from '../section/Sidemenu';
import Footer from '../section/Footer';
import '../../styles/Messages.css';

const Messages = () => {
	const [state, setState ] = useState({
		name: '',
		message: ''
	})
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 8000);
	}, []);

	const handleChange = (input) => (e) => {
		setState({
			[input]: e.target.value
		})
	}
	
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
				<section className="messageBody">
					<div>
						<h1>Messages</h1>
					</div>

					<div className="displayShelf">
						<div>
							<h5>
								<MdMail className="mFont" />Overall Messages
							</h5>
							<h4>2500</h4>
							<p>This month</p>
						</div>

						<div>
							<h5>
								<IoIosSend className="mFont" />Sent Messages
							</h5>
							<h4>2500</h4>
							<p>This month</p>
						</div>

						<div>
							<h5>
								<MdRefresh className="mFont" />Received Messages
							</h5>
							<h4>2500</h4>
							<p>This month</p>
						</div>
					</div>

					<MdDelete className="removeFont" />

					<div className="tableContainer table-responsive">
						<table className="table">
							<tbody>
								<tr>
									<NavLink to="/readmsg" id="msgLink">
										<td handleChange={handleChange} values={state.name}>
											<input type="checkbox" />Innocent Chimezie
										</td>
										<td handleChange={handleChange} values={state.message}>
											Hello, I'm a businessman based in Owerri. I came across this site and loved
											it
										</td>
										<td>
											<BsThreeDotsVertical />
										</td>
									</NavLink>
								</tr>

								<tr>
									<NavLink to="/readmsg" id="msgLink">
										<td>
											<input type="checkbox" />Innocent Chimezie
										</td>
										<td>
											Hello, I'm a businessman based in Owerri. I came across this site and loved
											it
										</td>
										<td>
											<BsThreeDotsVertical />
										</td>
									</NavLink>
								</tr>

								<tr>
									<NavLink to="/readmsg" id="msgLink">
										<td>
											<input type="checkbox" />Innocent Chimezie
										</td>
										<td>
											Hello, I'm a businessman based in Owerri. I came across this site and loved
											it
										</td>
										<td>
											<BsThreeDotsVertical />
										</td>
									</NavLink>
								</tr>

								<tr>
									<NavLink to="/readmsg" id="msgLink">
										<td>
											<input type="checkbox" />Innocent Chimezie
										</td>
										<td>
											Hello, I'm a businessman based in Owerri. I came across this site and loved
											it
										</td>
										<td>
											<BsThreeDotsVertical />
										</td>
									</NavLink>
								</tr>

								<tr>
									<NavLink to="/readmsg" id="msgLink">
										<td>
											<input type="checkbox" />Innocent Chimezie
										</td>
										<td>
											Hello, I'm a businessman based in Owerri. I came across this site and loved
											it
										</td>
										<td>
											<BsThreeDotsVertical />
										</td>
									</NavLink>
								</tr>

								<tr>
									<NavLink to="/readmsg" id="msgLink">
										<td>
											<input type="checkbox" />Innocent Chimezie
										</td>
										<td>
											Hello, I'm a businessman based in Owerri. I came across this site and loved
											it
										</td>
										<td>
											<BsThreeDotsVertical />
										</td>
									</NavLink>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
			)}

			<Footer />
		</div>
	);
};

export default Messages;
