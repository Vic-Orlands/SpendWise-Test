import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import '../../styles/Navigation.css';

import { FaBars } from 'react-icons/fa';
import { IoIosMailUnread, IoMdLogOut, IoIosLeaf, IoMdBrowsers } from 'react-icons/io';
import {
	MdArrowDropDown,
	MdSettings,
	MdPerson,
	MdDashboard,
	MdChat,
	MdPersonPinCircle,
	MdPhoneAndroid
} from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineMinus } from 'react-icons/ai';
import { BsEnvelope } from 'react-icons/bs';

class Navigation extends Component {
	state = {
		open: false,
		push: false,
		drop: false,
		dropProfile: false
	};

	pullout = (e) => {
		e.preventDefault();
		this.setState({
			push: !this.state.push
		});
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

	dropProfile = (e) => {
		e.preventDefault();
		this.setState({
			dropProfile: !this.state.dropProfile
		});
	};

	handleLogout = () => {
		const { history } = this.props;
		localStorage.removeItem('loggedIn');
		if (history) history.push('/');
	};

	render() {
		return (
			<div className="adminNav">
				{/* top navigation */}
				<div>
					<FaBars id="navBar" onClick={this.pullout} />
					{this.state.push && (
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
												<ul id="dropList" className="dropAnime">
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
												<ul id="dropList" className="dropAnime">
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
												<MdSettings className="dashmenuFont" />
												<span>Settings</span>
											</li>
										</ul>
									</div>
								</div>
								{/* /sidebar menu */}

								{/* /menu footer buttons */}
								<div className="sidemenu-footer">
									<li>
										<a
											href="https://www.wm-has.cresponet.net"
											target="_blank"
											rel="noopener noreferrer"
											style={{ color: 'white' }}
										>
											<IoMdBrowsers />
										</a>
									</li>
									<li>
										<MdSettings />
									</li>
									<li onClick={this.handleLogout}>
										<IoMdLogOut />
									</li>
								</div>
								{/* /menu footer buttons */}
							</div>
						</div>
					)}
				</div>

				<div className="navProfile">
					<NavLink to="/message">
					<IoIosMailUnread id="navMsg" />
					</NavLink>

					<div className="navProfileDrop">
						<h1 onClick={this.dropProfile}>Welcome, Admin</h1>
						<MdArrowDropDown className="dropdownToggle" onClick={this.dropProfile} />
						{this.state.dropProfile && (
							<ul className="dropdownMenuList">
								<li>
									<MdSettings id="dropdownFont" /> Settings
								</li>
								<li onClick={this.handleLogout}>
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
export default withRouter(Navigation);
