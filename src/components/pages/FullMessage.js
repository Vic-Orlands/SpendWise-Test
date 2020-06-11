import React, { Component } from 'react';
import Message from './Messages';
import '../../styles/FullMessage.css';

class Pickers extends Component {
	state = {
		loading: true,
		messages: [],
		newMessage: ' '
	};

	componentDidMount = () => {
		setTimeout(() => {
			this.setState({
				loading: false
			});
		}, 0);
	};

	handleChange = (e) => {
		this.setState({
			newMessage: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState((prevState) => {
			return {
				messages: [ ...prevState.messages, this.state.newMessage ],
				newMessage: (prevState.newMessage = ' ')
			};
		});
	};

	render() {
		const { loading, newMessage, messages } = this.state;
		return (
			<div className="fullMsg">
				<Message />

				{loading ? (
					<div className="gifLoad">
						<img src={require('../../assets/load.gif')} alt="Loading..." />
					</div>
				) : (
					<section className="messages">
						<div>
							<img src={require('../../assets/wmhas black.PNG')} alt="user_img" />
							<div>
								<h1>Socrates Itunay</h1>
								<h3>Oct 20, 2020 8:45am</h3>
							</div>
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

								{messages.map((msg) => (
									<h4>
										{msg}
									</h4>
								))}
							</div>

							<input type="file" placeholder="Click to attach a file" />

							<div className="writeMsg">
								<input
									type="text"
									placeholder="Write Message"
									value={newMessage}
									onChange={this.handleChange}
								/>
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
