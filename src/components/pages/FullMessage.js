import React, { Component } from 'react';
// import Message from './Messages';
import { IoIosSend } from 'react-icons/io';
// import { FaBars } from 'react-icons/fa';
import '../../styles/FullMessage.css';
import Navigation from '../core.sections/Navigation';
import Sidemenu from '../core.sections/Sidemenu';

class Pickers extends Component {
	state = {
		loading: true,
		messages: [],
		newMessage: '',
		drag: false
	};

	handleDrag = (e) => {
		e.preventDefault();
		this.setState({
			drag: !this.state.drag
		});
	};

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
					console.log(res.message);
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
		// if (this.state.newMessage === null) {
		// 	this.setState((prevState) => {
		// 		return {
		// 			messages: [ ...prevState.messages ]
		// 		};
		// 	});
		// } else
		// 	this.setState((prevState) => {
		// 		return {
		// 			messages: [ ...prevState.messages, this.state.newMessage ],
		// 			newMessage: (prevState.newMessage = ' ')
		// 		};
		// 	});
			const proxyurl = 'https://cors-anywhere.herokuapp.com/';
		const uri = `http://admin.wm-has.org.ng/api/user/message?vendor_id=${this.props.location.id}`;

			fetch(proxyurl + uri)
				.then((res) => res.json())
				.then((res) => {
					this.setState({
						messages: res.message,
						loading: !this.state.loading
					});
					console.log(res.message);
				})
				.catch((error) => {
					console.log(error);
				});
	};

	render() {
		const { loading, newMessage, messages } = this.state;

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
								<h1>Socrates Itunay</h1>
								<h3>Oct 20, 2020 8:45am</h3>
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
								<h3>
									I should be incapable of drawing a single stroke at the present moment; and yet I
									feel that I never...
									<span>8:45pm</span>
								</h3>

								<h4>
									Hello, We successfully received your message and will proceed to check it out.
									Thanks for using our platform.
									<span>10:00pm</span>
								</h4>

								{messages.map((msg, index) => (
									<h3 key={index}>
									<span>
									{msg.title}
									</span>
									{""}
									{""}
										{msg.message}
										<span>{msg.created_at.split(" ")[1].concat( " " ).concat( msg.created_at.split(" ")[0])}</span>
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
