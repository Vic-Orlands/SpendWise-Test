import React, { useState } from 'react';
import './styles.css';

import { AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

export default (props) => {
	const onclose = (e) => {
		props.onClose && props.onClose(e);
	};

	if (!props.open) {
		return null;
	}

	const [ dropDown, setDropDown ] = useState(false);

	const displayDrop = () => {
		setDropDown(!dropDown);
	};

	return (
		<section className="create-budget-container">
			<div className="create-budget">
				<AiOutlineClose id="font" onClick={onclose} />

				<h1>Record Expense</h1>
				<h3>record expense and set time frame</h3>

				<form>
					<label>Select category</label>

					<div className="form-drop">
						<p onClick={displayDrop}>
							Select Category <IoIosArrowDown />
						</p>
						{dropDown && (
							<ul className="dropdown-content">
								<li>
									<img src={require('../../assets/search.png')} alt="img" />
									<input type="text" placeholder="Search Category" />
								</li>
								<li>
									<img src={require('../../assets/Edit.png')} alt="img" className="pen" />
									Custom category
								</li>
								<li>
									<img src={require('../../assets/dinner.png')} alt="img" className="penn"  />
									Feeding
								</li>
								<li>
									<img src={require('../../assets/dinner.png')} alt="img" className="penn"  />
									Feeding
								</li>
							</ul>
						)}
					</div>

					<label htmlFor="">Expense amount</label>
					<input type="text" />
				</form>

				<div>
					<h5>Time frame</h5>
					<div>
						<button>Current month</button>
						<button>Custom</button>
					</div>
				</div>

				<div className="date">
					<h6>Starts: 1st January</h6>
					<h6>Ends: 31st January</h6>
				</div>

				<div className="create-cancel-btn">
					<button>Create</button>
					<button>Cancel</button>
				</div>
			</div>
		</section>
	);
};
