import React, { Component } from 'react';
import '../../styles/Nav.css';

import { FaBars } from 'react-icons/fa';
import { IoIosMailUnread, IoMdLogOut } from 'react-icons/io';
import { MdArrowDropDown, MdMessage, MdPerson } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
	state = {
		open: false
	};

	toggle = (e) => {
		e.preventDefault();
		this.setState({
			open: !this.state.open
		});
	};

	render() {
		return (
			<div className="adminNav">
				{/* top navigation */}
				<div>
					<FaBars id="navBar" />
				</div>

				<div className="navProfile">
					<IoIosMailUnread id="navMsg" />

					<div className="navProfileDrop">
						<h1>Welcome, Admin</h1>
						<MdArrowDropDown className="dropdownTogggle" onClick={this.toggle} />
						{this.state.open && (
							<ul className="dropdownMenuList">
								<li>
									<MdPerson id="dropdownFont" />My Profile
								</li>
								<li>
									<NavLink to="/" id="link">
									<MdMessage id="dropdownFont" /> Inbox
									</NavLink>
								</li>
								<li>
									<IoMdLogOut id="dropdownFont" /> Logout
								</li>
							</ul>
						)}
					</div>
				</div>
				{/* /top navigation */}
			</div>
		);
	}
}
