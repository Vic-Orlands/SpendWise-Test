import React, { useState } from 'react';
import './styles.css';
import Axios from 'axios';

import { AiOutlineClose } from 'react-icons/ai';
import { GrStatusGood } from 'react-icons/gr';

export default (props) => {
	const [ toggle, setToggle ] = useState(false);

	// setting props onclose to false to close the modal
	const onclose = (e) => {
		props.onClose && props.onClose(e);
	};

	const oncloseSuccessModal = (e) => {
		window.location.reload();
	};

	// toggling between current month and custom
	const onToggleMonthTrue = () => {
		setToggle(true);
	};

	const onToggleMonthFalse = () => {
		setToggle(false);
	};

	// parameters needed to create a budget
	//category
	//amt
	//start and end date
	// create is a post request
	const [ submitting, setSubmitting ] = useState(false);
	const [ success, setSuccess ] = useState('');
	const [ error, setError ] = useState('');
	const [ state, setState ] = useState({
		amount: ''
	});

	const onHandleInputChange = (e) => {
		const { value } = e.target;
		setState({
			amount: value
		});
	};

	const updateBudget = (e) => {
		e.preventDefault();
		setSubmitting(true);
		// get user token from saved storage
		let userToken =
			JSON.parse(localStorage.getItem('authToken')) || JSON.parse(sessionStorage.getItem('authToken'));

		const updatedBudget = {
			id: props.details.id,
			budget_amount: state.amount,
			start_date: props.details.start_date,
			end_date: props.details.end_date
		};

		Axios.post('https://www.spendwise.ng/api/budget/update_budget/', updatedBudget, {
			headers: {
				Authorization: `Token ${userToken}`
			}
		})
			.then((res) => {
				setSuccess(res.data.message);
			})
			.catch((err) => {
				setSubmitting(false);
				setError('Not a valid amount');
				setTimeout(() => {
					setError('');
				}, 6000);
			});
	};

	// returns nothing if props.open is false
	if (!props.open) {
		return null;
	}

	// getting static date for now
	let currentDate = new Date();
	let startDate = currentDate.getUTCFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getUTCDate();
	let endDate = currentDate.getUTCFullYear() + '-' + (currentDate.getMonth() + 2) + '-' + currentDate.getUTCDate();

	return (
		<section className="edit-budget-container">
			{!success ? (
				<div className="edit-budget">
					<AiOutlineClose id="font" onClick={onclose} />

					<h1>Edit Budget</h1>
					<h3>Edit and update your budget</h3>

					<form>
						<label>Select category</label>
						<p>{props.details.category}</p>

						<div className="label-err">
							{error ? <h6 id="errorMsg">{error}</h6> : ''}
							<label htmlFor="amount">Budget amount</label>
							<input type="text" name="amount" value={state.amount} onChange={onHandleInputChange} />
						</div>
					</form>

					<div>
						<h5>Time frame</h5>
						<div>
							<button onClick={onToggleMonthFalse} className={'btn ' + (!toggle ? 'active' : '')}>
								Current month
							</button>
							<button onClick={onToggleMonthTrue} className={'btn ' + (toggle ? 'active' : '')}>
								Custom
							</button>
						</div>
					</div>
					{!toggle ? (
						<div className="date">
							<h6>
								Starts: <span>{startDate}</span>{' '}
							</h6>
							<h6>
								Ends: <span>{endDate}</span>
							</h6>
						</div>
					) : (
						toggle && (
							<div className="startDate">
								<h6>Select start date</h6>
								<div>
									<img src={require('../../assets/date.png')} alt="date_img" />
									<h6>January 05, 2021</h6>
								</div>
							</div>
						)
					)}
					<div className="create-cancel-btn">
						<button onClick={updateBudget} disabled={!state.amount}>
							{!submitting ? 'Update' : 'Updating...'}
						</button>
						<button onClick={onclose}>Cancel</button>
					</div>
				</div>
			) : (
				<section className="edit-success">
					<div className="edit-status">
						<AiOutlineClose id="font" onClick={oncloseSuccessModal} />
						<center>
							<GrStatusGood id="successFont" />
							<h1>{success}</h1>
						</center>
					</div>
				</section>
			)}
		</section>
	);
};
