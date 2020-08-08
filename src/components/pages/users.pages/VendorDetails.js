import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import '../../../styles/users.styles/Details.css';

import Navigation from '../../core.sections/Navigation';
import Sidemenu from '../../core.sections/Sidemenu';
import Footer from '../../core.sections/Footer';
import { FaPiggyBank } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';

// -------modal custom default styling----------
const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '25%',
		transform: 'translate(-25%, -50%)',
		background: '#1d2939'
	}
};

const VendorDetails = (props) => {
	let subtitle;
	const [ vendor, setVendor ] = useState([]);
	const [ btnText, setBtnText ] = useState('');
	const [ modalText, setModalText ] = useState('');
	const [ isLoading, setIsLoading ] = useState(true);
	const [ modalIsOpen, setModalIsOpen ] = useState(false);
	const [ approveModalIsOpen, setApproveModalIsOpen ] = useState(false);

	const approveEl = useRef(null);

	const proxyurl = 'https://cors-anywhere.herokuapp.com/';
	const vendorUrl = `http://admin.wm-has.org.ng/api/user/adminApi/${props.location.id}`;

	useEffect(
		() => {
			if (props.location.id !== undefined) {
				let saveId = JSON.stringify(props.location.id);
				localStorage.setItem('vendorId', saveId);
				fetch(proxyurl + vendorUrl)
					.then((res) => res.json())
					.then((res) => {
						setVendor(res.data);
						setIsLoading(false);
						if (res.data.status === 'approved') {
							setBtnText('Ban');
						} else if (res.data.status === 'banned') {
							setBtnText('Onboard');
						} else if (res.data.status === 'onboarding') {
							setBtnText('Approve');
						}
					})
					.catch((error) => {
						console.log(error);
					});
			} else {
				let currentVendorId = JSON.parse(localStorage.getItem('vendorId'));
				fetch(proxyurl + `http://admin.wm-has.org.ng/api/user/adminApi/${currentVendorId}`)
					.then((res) => res.json())
					.then((res) => {
						setVendor(res.data);
						setIsLoading(false);
						if (res.data.status === 'approved') {
							setBtnText('Ban');
						} else if (res.data.status === 'banned') {
							setBtnText('Onboard');
						} else if (res.data.status === 'onboarding') {
							setBtnText('Approve');
						}
					})
					.catch((error) => {
						console.log(error);
					});
			}
			Modal.setAppElement('body');
			return () => {
				localStorage.removeItem('vendorId');
			};
		},
		[ vendorUrl, props ]
	);

	const oneVendor = vendor;

	const deleteVendor = async (id) => {
		await fetch(`${proxyurl}http://admin.wm-has.org.ng/api/user/adminApi/${id}`, {
			method: 'delete',
			header: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});
		props.history.push({
			pathname: '/vendors'
		});
	};

	const handleSendMsg = ({ id, name }) => {
		props.history.push({
			id: id,
			name: name,
			pathname: '/message'
		});
	};

	// -------------------------approve vendor function----------------------------
	const ApproveVendor = async (id) => {
		let userApproval = btnText === 'Approve' ? 'approved' : btnText === 'Ban' ? 'banned' : 'approved';
		console.log(userApproval);
		await fetch(
			`${proxyurl}http://admin.wm-has.org.ng/api/user/adminupdate?vendor_id=${id}&status=${userApproval}`,
			{
				method: 'PATCH',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
			}
		)
			.then((res) => res.json())
			.then(console.log)
			.catch(console.error);
		window.location.reload(false);
	};
	// -------------------------approve vendor function ends here----------------------------

	// ----------------modal funct---------------
	const openModal = () => {
		setModalIsOpen(true);
	};

	const afterOpenModal = () => {
		subtitle.style.color = '#fff';
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};
	// ----------------modal funct---------------

	// ----------------approve modal funct---------------
	const approveModal = () => {
		setApproveModalIsOpen(true);
		setModalText(approveEl.current.innerText);
	};

	const afterApproveOpenModal = () => {
		subtitle.style.color = '#fff';
	};

	const closeApproveModal = () => {
		setApproveModalIsOpen(false);
	};
	// ----------------approve modal funct---------------

	return (
		<div className="detailsBody">
			<Navigation />
			<Sidemenu />

			{isLoading ? (
				<div className="gifLoad">
					<img src={require('../../../assets/load.gif')} alt="Loading..." />
				</div>
			) : (
				<section className="details">
					<h1>Vendor Details</h1>

					<section className="flexDivs">
						<section className="username">
							<div>
								<img src={oneVendor.document_image} alt="img" />
								<h2> {oneVendor.name} </h2>
							</div>

							<div className="firstDiv">
								<div id="gt">
									<FaPiggyBank id="font" />
									<div>
										<h3>Earnings</h3>
										<h4>&#8358;{oneVendor.wallet}</h4>
									</div>
								</div>

								<div id="gt">
									<FaPiggyBank id="font" />
									<div>
										<h3>NetBalance</h3>
										<h4>&#8358;{oneVendor.wallet}</h4>
									</div>
								</div>
							</div>

							<div className="secondDiv">
								<label>
									Email:
									<h3>{oneVendor.email}</h3>
								</label>

								<label>
									Gender:
									<h3>{oneVendor.gender}</h3>
								</label>

								<label>
									Rating:
									<h3>{oneVendor.rating}</h3>
								</label>

								<label>
									Status:
									<h3>{oneVendor.status}</h3>
								</label>

								<label>
									Phone Number:
									<h3>{oneVendor.number}</h3>
								</label>

								<label>
									Address:
									<h3>{oneVendor.address ? oneVendor.address : 'null'}</h3>
								</label>

								<label>
									City:
									<h3>{oneVendor.city ? oneVendor.city : 'null'}</h3>
								</label>
							</div>

							<div className="thirdDiv">
								<button id="btn1" onClick={() => handleSendMsg(oneVendor)}>
									Send Message
								</button>
								<button id="btn2" onClick={approveModal} ref={approveEl}>
									{btnText}
								</button>
								<button id="btn3" onClick={openModal}>
									Delete
								</button>
							</div>

							{/* -------delete modal div------------ */}

							<Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} style={customStyles}>
								<div className="confirmModal">
									<div>
										<h2 ref={(_subtitle) => (subtitle = _subtitle)}>Confirmation</h2>

										<IoIosClose onClick={closeModal} className="close-modal" />
									</div>

									<hr />

									<h4>Are you sure you want to delete this Vendor?</h4>
									<h6>
										<span className="text-danger">Warning:</span>This action is not reversible
									</h6>

									<div className="btnParent">
										<button className="btn btn-success" onClick={() => deleteVendor(oneVendor.id)}>
											Proceed
										</button>
										<button onClick={closeModal} className="btn btn-danger">
											Cancel
										</button>
									</div>
								</div>
							</Modal>

							{/* -------delete modal div ends here------------ */}

							{/* -------approve modal div------------ */}

							<Modal isOpen={approveModalIsOpen} onAfterOpen={afterApproveOpenModal} style={customStyles}>
								<div className="confirmModal">
									<div>
										<h2 ref={(_subtitle) => (subtitle = _subtitle)}>Confirmation</h2>

										<IoIosClose onClick={closeApproveModal} className="close-modal" />
									</div>

									<hr />

									<h4> Are you sure you want to {modalText} this Vendor? </h4>

									<div className="btnParent">
										<button className="btn btn-success" onClick={() => ApproveVendor(oneVendor.id)}>
											{modalText}
										</button>
										<button onClick={closeApproveModal} className="btn btn-danger">
											Decline
										</button>
									</div>
								</div>
							</Modal>

							{/* -------approve modal div ends here------------ */}
						</section>

						<section className="userTransactionDetails">
							<section>
								<div className="first">
									<div>
										<div>
											<h2>Weekly Orders</h2>
											<h3>Average Weekly Orders</h3>
										</div>

										<h4>0%</h4>
									</div>

									<div>
										<div>
											<h2>Weekly Transactions</h2>
											<h3>Average Transactions Increase</h3>
										</div>

										<h4>0%</h4>
									</div>

									<div>
										<div>
											<h2>Weekly Revenue</h2>
											<h3>Average Revenue Increase</h3>
										</div>

										<h4>0%</h4>
									</div>
								</div>

								<div className="second">
									<div>
										<div>
											<h2>Monthly Orders</h2>
											<h3>Average Monthly Orders</h3>
										</div>

										<h4>0%</h4>
									</div>

									<div>
										<div>
											<h2>Monthly Transactions</h2>
											<h3>Average Transactions Increase</h3>
										</div>

										<h4>0%</h4>
									</div>

									<div>
										<div>
											<h2>Monthly Revenue</h2>
											<h3>Average Revenue Increase</h3>
										</div>

										<h4>0%</h4>
									</div>
								</div>

								<div className="third">
									<div>
										<div>
											<h2>Yearly Orders</h2>
											<h3>Average Yearly Orders</h3>
										</div>

										<h4>0%</h4>
									</div>

									<div>
										<div>
											<h2>Yearly Transactions</h2>
											<h3>Average Transactions Increase</h3>
										</div>

										<h4>0%</h4>
									</div>

									<div>
										<div>
											<h2>Yearly Revenue</h2>
											<h3>Average Revenue Increase</h3>
										</div>

										<h4>0%</h4>
									</div>
								</div>
							</section>
						</section>

						<section className="financeBody">
							<h2>Finance Summary</h2>

							<div>
								<div>
									<h3>Total Transactions</h3>
									<h4>&#8358;{oneVendor.wallet}</h4>
								</div>

								<div>
									<h3>Total Balance</h3>
									<h4>&#8358;{oneVendor.wallet}</h4>
								</div>

								<div>
									<h3>Total Transactions</h3>
									<h4>&#8358;{oneVendor.wallet}</h4>
								</div>

								<div>
									<h3>Total Balance</h3>
									<h4>&#8358;{oneVendor.wallet}</h4>
								</div>
							</div>
						</section>
					</section>
				</section>
			)}
			<Footer />
		</div>
	);
};

export default VendorDetails;
