import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Navigation from '../section/Navigation';
import Sidemenu from '../section/Sidemenu';
import Footer from '../section/Footer';
import '../../styles/Messages.css';

class Messages extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<Sidemenu />

				<section className="message">
					<div>
						<div className="messageDiv">
							<div>
								<NavLink to="/message" id="messageLink">
									<h3>
										Socrates Itunay<span>(4)</span>
									</h3>
								</NavLink>
								<p>
									I should be incapable of drawing a single stroke at the present moment; and yet I
									feel that I never...
								</p>
							</div>
							<p>10hours ago</p>
						</div>

						<div className="messageDiv">
							<div>
								<NavLink to="/message" id="messageLink">
									<h3>
										Socrates Itunay<span>(4)</span>
									</h3>
								</NavLink>
								<p>
									I should be incapable of drawing a single stroke at the present moment; and yet I
									feel that I never...
								</p>
							</div>
							<p>10hours ago</p>
						</div>

						<div className="messageDiv">
							<div>
								<NavLink to="/message" id="messageLink">
									<h3>
										Socrates Itunay<span>(4)</span>
									</h3>
								</NavLink>
								<p>
									I should be incapable of drawing a single stroke at the present moment; and yet I
									feel that I never...
								</p>
							</div>
							<p>10hours ago</p>
						</div>

						<div className="messageDiv">
							<div>
								<NavLink to="/message" id="messageLink">
									<h3>
										Socrates Itunay<span>(4)</span>
									</h3>
								</NavLink>
								<p>
									I should be incapable of drawing a single stroke at the present moment; and yet I
									feel that I never...
								</p>
							</div>
							<p>10hours ago</p>
						</div>

						<div className="messageDiv">
							<div>
								<NavLink to="/message" id="messageLink">
									<h3>
										Socrates Itunay<span>(4)</span>
									</h3>
								</NavLink>
								<p>
									I should be incapable of drawing a single stroke at the present moment; and yet I
									feel that I never...
								</p>
							</div>
							<p>10hours ago</p>
						</div>

						<div className="messageDiv">
							<div>
								<NavLink to="/message" id="messageLink">
									<h3>
										Socrates Itunay<span>(4)</span>
									</h3>
								</NavLink>
								<p>
									I should be incapable of drawing a single stroke at the present moment; and yet I
									feel that I never...
								</p>
							</div>
							<p>10hours ago</p>
						</div>

						<div className="messageDiv">
							<div>
								<NavLink to="/message" id="messageLink">
									<h3>
										Socrates Itunay<span>(4)</span>
									</h3>
								</NavLink>
								<p>
									I should be incapable of drawing a single stroke at the present moment; and yet I
									feel that I never...
								</p>
							</div>
							<p>10hours ago</p>
						</div>

						<div className="messageDiv">
							<div>
								<NavLink to="/message" id="messageLink">
									<h3>
										Socrates Itunay<span>(4)</span>
									</h3>
								</NavLink>
								<p>
									I should be incapable of drawing a single stroke at the present moment; and yet I
									feel that I never...
								</p>
							</div>
							<p>10hours ago</p>
						</div>

						<div className="messageDiv">
							<div>
								<NavLink to="/message" id="messageLink">
									<h3>
										Socrates Itunay<span>(4)</span>
									</h3>
								</NavLink>
								<p>
									I should be incapable of drawing a single stroke at the present moment; and yet I
									feel that I never...
								</p>
							</div>
							<p>10hours ago</p>
						</div>
					</div>
				</section>
				<Footer />
			</div>
		);
	}
}

export default Messages;
