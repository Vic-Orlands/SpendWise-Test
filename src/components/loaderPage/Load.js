import React, { Component } from 'react';
import './Load.css';

class Load extends Component {
	render() {
		return (
			<section className="dotContainer">
				<div className="dotBody">
					<ul className="dotArea">
						<li />
						<li />
						<li />
						<li />
						<li />
						<li />
						<li />
						<li />
						<li />
						<li />
						<li />
						<li />
						<li />
						<li />
						<li />
						<li />
					</ul>
				</div>

				<div className="load">
					<div className="loadText">
						<h1>
							wm-<span id="spa">H</span>as
						</h1>
						<h4>panel</h4>
					</div>
					<span id="loadSpan" />
				</div>
			</section>
		);
	}
}
export default Load;
