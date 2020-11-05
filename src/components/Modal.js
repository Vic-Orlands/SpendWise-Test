import React, { Component } from 'react';
import '../styles/Modal.css';

import { AiOutlineClose } from 'react-icons/ai';

class Modal extends Component {
	onClose = (e) => {
		this.props.onClose && this.props.onClose(e);
	};

	windowClickClose = (e) => {
		this.props.onClose && this.props.onClose(e);
	};

	render() {
		if (this.props.open) {
			return null;
		}

		return (
			<section className="modal-container" id="modal" onClick={this.windowClickClose}>
				<div class="modal-content">
					<header>
						<hgroup>
							<h1>Notify Me</h1>
							<h3>Please input your details here</h3>
						</hgroup>

						<AiOutlineClose id="font" onClick={this.onClose} />
					</header>
					<hr />

					<form action="">
						<label htmlFor="first_name">
							First Name
							<input type="text" />
						</label>

						<label htmlFor="email">
							Email Address
							<input type="email" />
						</label>

						<label htmlFor="device_type">
							Device Type
							<select name="cars">
								<option value="android">Android</option>
								<option value="ios">IOS</option>
								<option value="both">Both</option>
							</select>
						</label>

						<button type="button">Notify me</button>
					</form>
				</div>
			</section>
		);
	}
}

export default Modal;
