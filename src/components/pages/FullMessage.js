import React, { Component } from 'react';
import { IoIosSend } from 'react-icons/io';
import '../../styles/FullMessage.css';
import Navigation from '../core.sections/Navigation';
import Sidemenu from '../core.sections/Sidemenu';

class Pickers extends Component {
	state = {
		loading: true,
		messages: [],
		newMessage: ''
		// drag: false
	};

	// handleDrag = (e) => {
	// 	e.preventDefault();
	// 	this.setState({
	// 		drag: !this.state.drag
	// 	});
	// };

	componentDidMount = () => {
		const proxyurl = 'https://cors-anywhere.herokuapp.com/';
		const uri = `http://admin.wm-has.org.ng/api/user/message?vendor_id=${this.props.location.id}`;

			fetch(proxyurl + uri)
				.then((res) => res.json())
				.then((res) => {
					this.setState({
						messages: res.message,
						loading: !this.state.loading
					});
				})
				.catch((error) => {
					console.log(error);
				});
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.newMessage !== ' ') {
			this.setState((prevState) => {
				return {
					messages: [ ...prevState.messages, this.state.newMessage ],
					newMessage: (prevState.newMessage = ' ')
				};
			});
		} else
			this.setState((prevState) => {
				return prevState.messages;
			});
	};

	render() {
		const { loading, newMessage, messages } = this.state;

		// ---------------------little function to get current date stamp------------------
		const date = new Date();
		const format = 'YYYY-MMM-DD DDD';

		const dateConvert = (dateobj, format) => {
			let year = dateobj.getFullYear();
			let month = ('0' + (dateobj.getMonth() + 1)).slice(-2);
			let date = ('0' + dateobj.getDate()).slice(-2);
			let day = dateobj.getDay();
			let months = [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC' ];
			let dates = [ 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT' ];
			let converted_date = '';

			switch (format) {
				case 'YYYY-MM-DD':
					converted_date = year + '-' + month + '-' + date;
					break;
				case 'YYYY-MMM-DD DDD':
					converted_date = year + '-' + months[parseInt(month) - 1] + '-' + date + ' ' + dates[parseInt(day)];
					break;
				default:
					converted_date = date;
			}

			return converted_date;
		};

		const timeStamp = dateConvert(date, format);
		// -------------the function ends here------------

		return (
			<div className="fullMsg">
				<Navigation />
				<Sidemenu />
				{/* <Message /> */}

				{loading ? (
					<div className="gifLoad">
						<img src={require('../../assets/load.gif')} alt="Loading..." />
					</div>
				) : (
					<section className="messages">
						<div>
							<img src={require('../../assets/wmhas black.PNG')} alt="img" />
							<div>
								<h1>{(this.props.location.name) ? this.props.location.name : "Null User"}</h1>
								<h3>{timeStamp}</h3>
							</div>
							{/* 
							<FaBars id="msg-shift-drop" onClick={this.handleDrag} />
							{this.state.drag && (
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
													I should be incapable of drawing a single stroke at the present
													moment; and yet I feel that I never...
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
													I should be incapable of drawing a single stroke at the present
													moment; and yet I feel that I never...
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
													I should be incapable of drawing a single stroke at the present
													moment; and yet I feel that I never...
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
													I should be incapable of drawing a single stroke at the present
													moment; and yet I feel that I never...
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
													I should be incapable of drawing a single stroke at the present
													moment; and yet I feel that I never...
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
													I should be incapable of drawing a single stroke at the present
													moment; and yet I feel that I never...
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
													I should be incapable of drawing a single stroke at the present
													moment; and yet I feel that I never...
												</p>
											</div>
											<p>10hours ago</p>prevState
										</div>

										<div className="messageDiv">
											<div>
												<NavLink to="/message" id="messageLink">
													<h3>
														Socrates Itunay<span>(4)</span>
													</h3>
												</NavLink>
												<p>
													I should be incapable of drawing a single stroke at the present
													moment; and yet I feel that I never...
												</p>
											</div>
											<p>10hours ago</p>
										</div>
									</div>
								</section>
							)} */}
						</div>

						<section className="replyMsg">
							<div>
								{messages.map((msg, index) => (
									<h3 key={index}>
										<span>Message Title: {(msg.title) ? msg.title : "null"}</span>
										<br />
										{(msg.message) ? msg.message : " No messages received at this time"}
										<span>{(msg.created_at) ? msg.created_at : null}</span>
									</h3>
								))}
							</div>

							<div className="writeMsg">
								<input
									type="text"
									name="newMessage"
									placeholder="Write Message"
									value={newMessage}
									onChange={this.handleChange}
								/>
								<IoIosSend className="sendBtn" onClick={this.handleSubmit} />
								<button onClick={this.handleSubmit}>Send</button>
							</div>
						</section>
					</section>
				)}
			</div>
		);
	}
}

export default Pickers;
