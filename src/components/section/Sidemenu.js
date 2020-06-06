import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FaDashcube, FaEdit, FaBell } from 'react-icons/fa';
import {
	MdMessage,
	MdArrowDropDown,
	MdSettings,
	MdPerson,
	MdDashboard,
	MdLocalPostOffice,
	MdChat,
	MdPersonPinCircle
} from 'react-icons/md';
import { IoMdLogOut, IoMdStats, IoMdBrowsers } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';

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
						<FaDashcube style={{ marginRight: 5, marginTop: -3.5 }} id="font" />
						<span>WM-HAS ADMIN PANEL</span>

						<h2>Innocent Chimezie</h2>
						<h4>admin</h4>

						<img src={require('../../assets/logo.PNG')} alt="admin img" />
					</div>
					{/* menu profile quick info */}

					<br />
					{/* sidebar menu */}
					<div>
						<div className="dashSection">
							<h3>APPLICATIONS</h3>
							<ul>
								<li onClick={this.toggle}>
									<MdDashboard className="dashmenuFont" />
									<span>
										Dashboards<MdArrowDropDown />
									</span>
								</li>
								{this.state.open && (
									<ul id="dropList">
										<NavLink to="/home">
											<li>Analytics</li>
										</NavLink>
										<NavLink to="/project">
											<li>Project</li>
										</NavLink>
									</ul>
								)}

								<NavLink to="user">
									<li>
										<MdPersonPinCircle className="dashmenuFont" />
										<span>Users</span>
									</li>
								</NavLink>
								<NavLink to="/message">
									<li>
										<MdMessage className="dashmenuFont" />
										<span>
											Messages
											<span>
												<MdArrowDropDown />
											</span>
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
