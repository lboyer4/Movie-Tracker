import React, { Component } from 'react';
import { fetchUsers } from '../../utils/fetchUsers';

export default class Login extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: ''
		}
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name] : value })
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.getUserInput(this.state);
	}

	getUserInput = (state) => {
		const userPromise = fetchUsers();
		console.log('userPromise', userPromise)
		return userPromise;
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h1> Sign-in to continue! </h1>
				<input 
					type="text"
					name="username"
					placeholder="username"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<input
					type="text"
					name="password"
					placeholder="password"
					value={this.state.password} 
					onChange={this.handleChange}
				/>

				<button> Submit </button>

			</form>
			)
	}
}