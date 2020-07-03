import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FaEdit, FaBell } from 'react-icons/fa';
import {
	MdArrowDropDown,
	MdSettings,
	MdPerson,
	MdDashboard,
	MdLocalPostOffice,
	MdChat,
	MdPersonPinCircle,
	MdPhoneAndroid
} from 'react-icons/md';
import { IoMdLogOut, IoMdStats, IoMdBrowsers, IoIosLeaf } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineMinus } from 'react-icons/ai';
import { BsEnvelope } from 'react-icons/bs';

import '../../styles/Sidemenu.css';

export default class Sidemenu extends Component {
	state = {
		open: false,
		drop: false
	};

	toggleDashboard = (e) => {
		e.preventDefault();
		this.setState({
			open: !this.state.open
		});
	};

	dropdownUsers = (e) => {
		e.preventDefault();
		this.setState({
			drop: !this.state.drop
		});
	};

	render() {
		return (
			<div className="sideBody">
				<div>
					{/* menu profile quick info */}
					<div className="sideBody-Intro">
						<IoIosLeaf id="font" />
						<span>WM-HAS ADMIN PANEL</span>

						<img src={require('../../assets/logo.PNG')} alt="admin img" />
						<h4>admin</h4>
					</div>
					{/* menu profile quick info */}

					<br />
					{/* sidebar menu */}
					<div>
						<div className="dashSection">
							<h3>NAVIGATION</h3>
							<ul>
								<li onClick={this.toggleDashboard}>
									<MdDashboard className="dashmenuFont" />
									<span>Dashboards</span>
									<MdArrowDropDown id="dropFont" />
								</li>
								{this.state.open && (
									<ul id="dropList">
										<NavLink to="/home">
											<li>
												<AiOutlineMinus id="lineFont" />
												Home
											</li>
										</NavLink>
										<NavLink to="/analytics">
											<li>
												<AiOutlineMinus id="lineFont" />
												Analytics
											</li>
										</NavLink>
									</ul>
								)}

								<li onClick={this.dropdownUsers} className="mobileUsers">
									<MdPhoneAndroid id="lineFont" />
									<span>Mobile Users</span>
									<MdArrowDropDown id="dropFont" />
								</li>
								{this.state.drop && (
									<ul id="dropList">
										<NavLink to="/users">
											<li>
												<MdPerson id="lineFont" className="userFont" />
												Users
											</li>
										</NavLink>
										<NavLink to="/vendors">
											<li>
												<MdPersonPinCircle className="dashmenuFont" />
												Vendors
											</li>
										</NavLink>
									</ul>
								)}

								<NavLink to="/message">
									<li>
										<BsEnvelope className="dashmenuFont" />
										<span>Messages</span>
									</li>
								</NavLink>

								<li>
									<FaEdit className="dashmenuFont" />
									<span>Transactions</span>
								</li>
								<NavLink to="/dump">
									<li>
										<RiDeleteBin6Line className="dashmenuFont" />
										<span>DumpSites</span>
									</li>
								</NavLink>

								<li>
									<MdChat className="dashmenuFont" />
									<span>Tasks</span>
								</li>

								<li>
									<MdPerson className="dashmenuFont" />
									<span>Profile</span>
								</li>
							</ul>
						</div>
					</div>
					{/* /sidebar menu */}

					{/* /menu footer buttons */}
					<div className="sidemenu-footer">
						<li>
							<IoMdBrowsers />
						</li>
						<li>
							<MdSettings />
						</li>
						<li>
							<IoMdLogOut />
						</li>
					</div>
					{/* /menu footer buttons */}
				</div>
			</div>
		);
	}
}
