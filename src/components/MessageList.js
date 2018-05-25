import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Message } from './Message';

export class MessageList extends Component {

	static propTypes = {
		list: PropTypes.arrayOf(PropTypes.object).isRequired,
		onChangeScore: PropTypes.func.isRequired,
	};

	onChangeScore = (messageId, score) => {
		this.props.onChangeScore(messageId, score);
	};

	renderMessages() {
		const { list } = this.props;

		if (!list.length) {
			return null;
		}

		return list.map(({ id, name, text, score }) => {
			return (
				<Message
					id={id}
					name={name}
					text={text}
					score={score}
					onChangeScore={this.onChangeScore}
					key={id}
				/>
			);
		});
	}

	render() {
		const renderedMessages = this.renderMessages();

		return (
			<div className="messages">
				{renderedMessages}
			</div>
		);
	}

}
