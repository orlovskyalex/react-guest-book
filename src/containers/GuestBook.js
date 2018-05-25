import React, { Component } from 'react';
import { MessageList } from '../components/MessageList';
import { MessageForm } from '../components/MessageForm';

export class GuestBook extends Component {

	constructor(props) {
		super(props);

		this.state = {
			messageList: [],
		};
	}

	handleMessageSubmit = (message) => {
		this.setState({ messageList: [...this.state.messageList, message] });
	};

	render() {
		const { messageList } = this.state;

		return (
			<div className="container guest-book">
				<MessageForm onMessageSubmit={this.handleMessageSubmit}/>
				<MessageList list={messageList}/>
			</div>
		);
	}

}
