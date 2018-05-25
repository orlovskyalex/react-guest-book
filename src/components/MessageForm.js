import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MessageForm extends Component {

	static propTypes = {
		onMessageSubmit: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);

		this.state = {
			message: {
				name: '',
				text: '',
			},
			formValid: false,
		};

		this.defaultState = this.state;
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
		});

		this.setState(this.defaultState);
	};

	render() {
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
							onChange={this.handleChange}
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
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<button className="btn btn-link" type="submit" disabled={!this.state.formValid}>
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
