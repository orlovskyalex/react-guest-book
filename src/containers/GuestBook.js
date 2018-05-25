import React, { Component } from 'react';
import { MessageList } from '../components/MessageList/MessageList';
import { MessageForm } from '../components/MessageForm/MessageForm';
import axios from 'axios';

const API_URL = 'http://localhost:3100/api';

export class GuestBook extends Component {

	constructor(props) {
		super(props);

		this.state = {
			messageList: [],
		};
	}

	componentDidMount() {
		axios.get(`${API_URL}/message`)
			.then(({ data }) => {
				this.setState({ messageList: data });
			})
			.catch(err => {
				console.error(err);
			});
	}

	//componentDidUpdate() {
	//	localStorage.setItem('messageList', JSON.stringify(this.state.messageList));
	//}

	handleMessageSubmit = (message) => {
		this.setState({ messageList: [...this.state.messageList, message] });

		axios.post(`${API_URL}/message`, message)
			.then(({ data }) => {
				this.setState({ messageList: data });
			})
			.catch(err => {
				console.error(err);
			});
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

		axios.patch(`${API_URL}/message/${messageId}`, { score })
			.then(({ data }) => {
				this.setState({ messageList: data });
			})
			.catch(err => {
				console.error(err);
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
