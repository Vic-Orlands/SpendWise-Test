import React, { Component } from 'react';
import '../styles/Modal.css';

import { AiOutlineClose } from 'react-icons/ai';

import Axios from 'axios';

class Modal extends Component {
	state = {
		first_name: '',
		email: '',
		device_type: '',
		status: '',
		message: '',
		loading: false
	};

	handleInputChange = (e) => {
		this.setState({ [e.target.name]: e.target.value.toLowerCase() });
	};

	handleSelectChange = (e) => {
		this.setState({
			device_type: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.setState({ loading: true });

		let obj = {
			name: this.state.first_name,
			email: this.state.email,
			device_type: this.state.device_type
		};

		Axios.post('https://www.spendwise.ng/api/accounts/wait_list/', obj, {
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => {
				if (res.status === 200) {
					this.setState({
						status: res.status,
						message: res.data.message
					});
				}
			})
			.then(() =>
				this.setState({
					first_name: '',
					email: '',
					device_type: ''
				})
			)
			.catch((err) => {
				console.log(err.res);
			});
	};

	onClose = (e) => {
		this.props.onClose && this.props.onClose(e);
	};

	render() {
		if (this.props.open) {
			return null;
		}

		return (
			<div>
				{this.state.status !== 200 ? (
					<section className="modal-container" id="modal">
						<div className="modal-content">
							<header>
								<hgroup>
									<h1>Notify Me</h1>
									<h3>Please input your details here</h3>
								</hgroup>

								<AiOutlineClose id="font" onClick={this.onClose} />
							</header>
							<hr />

							<form>
								<label htmlFor="first_name">
									First Name
									<input
										type="text"
										name="first_name"
										value={this.state.first_name}
										onChange={this.handleInputChange}
									/>
								</label>

								<label htmlFor="email">
									Email Address
									<input
										type="email"
										name="email"
										value={this.state.email}
										onChange={this.handleInputChange}
									/>
								</label>

								<label htmlFor="device_type">
									Device Type
									<select
										name="device_type"
										value={this.state.device_type}
										onChange={this.handleSelectChange}
									>
										<option />
										<option value="android">Android</option>
										<option value="ios">IOS</option>
										<option value="both">Both</option>
									</select>
								</label>

								<button onClick={this.onSubmit}>
									{this.state.loading ? 'Notifying...' : 'Notify me'}
								</button>
							</form>
						</div>
					</section>
				) : this.state.status === 200 ? (
					<section className="modal-success">
						<div className="modal-status">
							<AiOutlineClose id="font" onClick={this.onClose} />
							<h1>
								<span>Success:</span> {this.state.message}
							</h1>
						</div>
					</section>
				) : (
					''
				)}
			</div>
		);
	}
}

export default Modal;
