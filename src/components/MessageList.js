import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Message } from './Message';

export class MessageList extends Component {

	static propTypes = {
		list: PropTypes.arrayOf(PropTypes.object).isRequired,
	};

	constructor(props) {
		super(props);
	}

	renderMessages() {
		const { list } = this.props;

		if (!list.length) {
			return null;
		}

		return list.map(({ id, name, text }) => {
			return <Message name={name} text={text} key={id}/>;
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
