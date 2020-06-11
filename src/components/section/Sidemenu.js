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
	MdPersonPinCircle
} from 'react-icons/md';
import { IoMdLogOut, IoMdStats, IoMdBrowsers, IoIosLeaf } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineMinus } from 'react-icons/ai';
import { BsEnvelope } from 'react-icons/bs';

import '../../styles/Sidemenu.css';

export default class Sidemenu extends Component {
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
								<li onClick={this.toggle}>
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

								<NavLink to="/users">
									<li>
										<MdPersonPinCircle className="dashmenuFont" />
										<span>Users</span>
									</li>
								</NavLink>
								<NavLink to="/message">
									<li>
										<BsEnvelope className="dashmenuFont" />
										<span>
											Messages
										</span>
									</li>
								</NavLink>
								<li>
									<IoMdStats className="dashmenuFont" />
									<span>Downloads</span>
								</li>
								<li>
									<FaBell className="dashmenuFont" />
									<span>Notifications</span>
								</li>

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
									<MdPerson className="dashmenuFont" />
									<span>Profile</span>
								</li>

								<li>
									<MdLocalPostOffice className="dashmenuFont" />
									<span>Posts</span>
								</li>

								<li>
									<MdChat className="dashmenuFont" />
									<span>Chat</span>
								</li>
							</ul>
						</div>
					</div>
					{/* /sidebar menu */}

					{/* /menu footer buttons */}
					<div className="sidemenu-footer">
						<a>
							<IoMdBrowsers />
						</a>
						<a>
							<MdSettings />
						</a>
						<a>
							<IoMdLogOut />
						</a>
					</div>
					{/* /menu footer buttons */}
				</div>
			</div>
		);
	}
}
