import React, { Component } from 'react';
import { MessageList } from '../components/MessageList';
import { MessageForm } from '../components/MessageForm';

export class GuestBook extends Component {

	constructor(props) {
		super(props);

		this.state = {
			messageList: JSON.parse(localStorage.getItem('messageList')) || [],
		};
	}

	componentDidUpdate() {
		localStorage.setItem('messageList', JSON.stringify(this.state.messageList));
	}

	handleMessageSubmit = (message) => {
		this.setState({ messageList: [...this.state.messageList, message] });
	};

	onChangeScore = (messageId, score) => {
		this.setState((prevState) => {
			const newMessageList = prevState.messageList.map(message => {
				if (message.id === messageId) {
					message.score = score;
				}

				return message;
			});

			return { messageList: newMessageList };
		});
	};

	render() {
		const { messageList } = this.state;

		return (
			<div className="container guest-book">
				<MessageForm onMessageSubmit={this.handleMessageSubmit}/>
				<MessageList list={messageList} onChangeScore={this.onChangeScore}/>
			</div>
		);
	}

}
