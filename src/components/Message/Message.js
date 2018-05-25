import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Message.css';

export class Message extends Component {

	static propTypes = {
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		score: PropTypes.number.isRequired,
		onChangeScore: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);

		this.state = { ...props };
	}

	like = (event) => {
		event.preventDefault();

		this.setState({ score: this.state.score + 1 }, () => {
			const { id, score } = this.state;
			this.props.onChangeScore(id, score);
		});
	};

	dislike = (event) => {
		event.preventDefault();

		this.setState({ score: this.state.score - 1 }, () => {
			const { id, score } = this.state;
			this.props.onChangeScore(id, score);
		});
	};

	render() {
		const { name, text, score } = this.state;

		return (
			<div className="card text-left">
				<div className="card-header">
					<h5 className="card-title d-flex align-items-center">
						<img className="avatar" src="https://placeimg.com/60/60/people" alt="avatar"/>
						<span className="name">
							{name}
						</span>
					</h5>
					<h6 className="card-subtitle mb-2 text-muted">
						Score: {score}
					</h6>
				</div>
				<div className="card-body">
					<div className="card-text mb-2">
						{text}
					</div>
					<a href="#" className="card-link" onClick={this.like}>
						Like
					</a>
					<a href="#" className="card-link" onClick={this.dislike}>
						Dislike
					</a>
				</div>
			</div>
		);
	}

}
