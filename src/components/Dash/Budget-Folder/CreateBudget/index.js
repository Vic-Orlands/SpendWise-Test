import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import Axios from 'axios';

import { AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { GrStatusGood } from 'react-icons/gr';

import graduate from '../../assets/graduate.svg';
import food from '../../assets/dinner.svg';
import car from '../../assets/car.svg';
import debt from '../../assets/debt.svg';
import receipt from '../../assets/receipt.svg';
import Insurance from '../../assets/family.svg';
import family from '../../assets/group.svg';
import cardiogram from '../../assets/cardiogram.svg';
import celebration from '../../assets/celebration.svg';
import home from '../../assets/home.svg';
import shopping from '../../assets/shopping.svg';
import museum from '../../assets/museum.svg';
import suitcase from '../../assets/suitcase.svg';
import gift from '../../assets/giftbox.svg';
import business from '../../assets/hand-shake.svg';
import statistics from '../../assets/statistics.svg';
import levels from '../../assets/levels.svg';
import searchImg from '../../assets/search.png';
import date from '../../assets/date.png';

let dropdownCategory = [
	{
		id: 1,
		img: graduate,
		li: 'Education'
	},
	{
		id: 2,
		img: food,
		li: 'Foods/Drinks'
	},
	{
		id: 3,
		img: debt,
		li: 'Debt Payment'
	},
	{
		id: 4,
		img: gift,
		li: 'Gifts/Donations'
	},
	{
		id: 5,
		img: cardiogram,
		li: 'Medical/Healthcare'
	},
	{
		id: 6,
		img: receipt,
		li: 'Bills/Utilities'
	},
	{
		id: 7,
		img: Insurance,
		li: 'Insurance'
	},
	{
		id: 8,
		img: statistics,
		li: 'Investment/Savings'
	},
	{
		id: 9,
		img: shopping,
		li: 'Shopping'
	},
	{
		id: 10,
		img: car,
		li: 'Transportation'
	},
	{
		id: 11,
		img: home,
		li: 'Household'
	},
	{
		id: 12,
		img: family,
		li: 'Family'
	},
	{
		id: 13,
		img: levels,
		li: 'Miscellaneous'
	},
	{
		id: 14,
		img: museum,
		li: 'Bank Charges'
	},
	{
		id: 15,
		img: business,
		li: 'Business Expense'
	},
	{
		id: 16,
		img: suitcase,
		li: 'Travel'
	},
	{
		id: 17,
		img: celebration,
		li: 'Entertainment'
	}
];

export default (props) => {
	const [ filtered, setFiltered ] = useState([]);
	const [ toggle, setToggle ] = useState(false);
	const [ dropDown, setDropDown ] = useState(false);

	// setting props onclose to false to close the modal
	const onclose = (e) => {
		props.onClose && props.onClose(e);
	};

	const oncloseSuccessModal = (e) => {
		window.location.reload();
	};

	// setting dropdown to true and displaying on true
	const displayDrop = () => {
		setDropDown(!dropDown);
	};

	// filtering the dropdown array when searching
	const search = (search) => {
		let newList = [];
		if (search !== '') {
			newList = dropdownCategory.filter((cate) => {
				const lc = cate.li.toLowerCase();
				const filter = search.toLowerCase();
				return lc.includes(filter);
			});
		} else {
			newList = dropdownCategory;
		}
		setFiltered(newList);
	};

	// changes the state of  the array onInputChange
	useEffect(() => {
		setFiltered(dropdownCategory);
	}, []);

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
	const [ category, setCategory ] = useState('');
	const [ state, setState ] = useState({
		amount: ''
	});

	const onHandleInputChange = (e) => {
		const { value } = e.target;
		setState({
			amount: value
		});
	};

	// getting the reference of the start and end dates
	const dateRef = useRef(null);
	const dateRef2 = useRef(null);

	//selecting a budget category from the dropdown
	const onSelectCategory = (e) => {
		setCategory(e.target.textContent);
		setDropDown(!dropDown);
	};

	const createBudget = (e) => {
		e.preventDefault();
		setSubmitting(true);
		// get user token from saved storage
		let userToken =
			JSON.parse(localStorage.getItem('authToken')) || JSON.parse(sessionStorage.getItem('authToken'));

		const userBudget = {
			category: category,
			budget_amount: state.amount,
			start_date: dateRef.current.textContent,
			end_date: dateRef2.current.textContent
		};

		Axios.post('https://www.spendwise.ng/api/budget/create/', userBudget, {
			headers: {
				Authorization: `Token ${userToken}`
			}
		})
			.then((res) => {
				if (res.status === 201) {
					setSuccess(res.data.message);
				} else return null;
			})
			.catch((err) => {
				if (err.response.data) {
					setSubmitting(false);
					setState({
						amount: ""
					})
					setError(err.response.data.message);
					setTimeout(() => {
						setError("");
					}, 6000);
				}
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
		<section className="create-budget-container">
			{!success ? (
				<div className="create-budget">
					<AiOutlineClose id="font" onClick={onclose} />

					<h1>Create Budget</h1>
					<h3>Create budget and set time frame</h3>

					<form>
						<label>Select category</label>
						<div className="form-drop">
							<p onClick={displayDrop}>
								{category ? category : 'Select Category'}
								<IoIosArrowDown />
							</p>
							{dropDown && (
								<ul className="dropdown-content">
									<li>
										<img src={searchImg} alt="img" />
										<input
											type="text"
											placeholder="Search Category"
											onChange={(e) => search(e.target.value)}
										/>
									</li>

									{filtered.map((dropCat) => (
										<li key={dropCat.id} onClick={onSelectCategory}>
											<img src={dropCat.img} alt="img" className="pen" />
											{dropCat.li}
										</li>
									))}
								</ul>
							)}
						</div>

						<label htmlFor="amount">Budget amount</label>
						<input type="text" name="amount" value={state.amount} onChange={onHandleInputChange} />
						{error ? <h6 id="errorMsg">{error}</h6> : ''}
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
								Starts: <span ref={dateRef}>{startDate}</span>
							</h6>
							<h6>
								Ends: <span ref={dateRef2}>{endDate}</span>
							</h6>
						</div>
					) : (
						toggle && (
							<div className="startDate">
								<h6>Select start date</h6>
								<div>
									<img src={date} alt="date_img" />
									<h6>January 05, 2021</h6>
								</div>
							</div>
						)
					)}
					<div className="create-cancel-btn">
						<button onClick={createBudget} disabled={!state.amount}>
							{!submitting ? 'Create' : 'Creating...'}
						</button>
						<button onClick={onclose}>Cancel</button>
					</div>
				</div>
			) : (
				<section className="modal-success">
					<div className="modal-status">
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
