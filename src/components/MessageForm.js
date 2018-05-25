import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MessageForm extends Component {

	static propTypes = {
		onMessageSubmit: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);

		this.baseState = {
			message: {
				name: '',
				text: '',
			},
			formValid: false,
		};

		this.state = Object.assign({}, this.baseState);
	}

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState((prevState) => {
			const newState = { ...prevState };

			newState.message[name] = value.trim();
			newState.formValid = !!(newState.message.name.length && newState.message.text.length);

			return newState;
		});
	};

	submit = (event) => {
		event.preventDefault();

		this.props.onMessageSubmit({
			...this.state.message,
			id: this._generateMessageId(),
			score: 0,
		});

		this.setState({ ...this.baseState });
	};

	render() {
		const { message, formValid } = this.state;

		return (
			<div className="message-form p-2">
				<h2>Leave your message</h2>
				<form className="mt-3" onSubmit={this.submit}>
					<div className="form-group row">
						<label htmlFor="name" className="col-form-label col-3 text-right">
							Your name
						</label>
						<input
							type="text"
							className="form-control col-9"
							name="name"
							id="name"
							value={message.name}
							onChange={this.handleChange}
							autoComplete="off"
						/>
					</div>
					<div className="form-group row">
						<label htmlFor="text" className="col-form-label col-3 text-right">
							Your message
						</label>
						<textarea
							className="form-control col-9"
							name="text"
							id="text"
							value={message.text}
							onChange={this.handleChange}
							autoComplete="off"
						/>
					</div>
					<div className="form-group">
						<button className="btn btn-link" type="submit" disabled={!formValid}>
							Send message
						</button>
					</div>
				</form>
			</div>
		);
	}

	_generateMessageId() {
		return Math.random().toString(36).substr(2, 9);
	}

}
