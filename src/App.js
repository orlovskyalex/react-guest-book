import React, { Component } from 'react';
import './App.css';
import { GuestBook } from './containers/GuestBook';

class App extends Component {
	render() {
		return (
			<div className="App">
				<GuestBook/>
			</div>
		);
	}
}

export default App;
