import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Message extends Component {

	static propTypes = {
		name: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
	};

	constructor(props) {
		super(props);
	}

	render() {
		const { name, text } = this.props;

		return (
			<div className="guest-message">
				<div className="name">
					{name}
				</div>
				<div className="message">
					{text}
				</div>
			</div>
		);
	}

}
