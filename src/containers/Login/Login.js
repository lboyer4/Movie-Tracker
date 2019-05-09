import React, { Component } from 'react';
import { fetchUsers } from '../../utils/fetchUsers';

export default class Login extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			loggedIn: false,
			error: ''
		}
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name] : value })
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.postLogin(this.state);
		this.setState({ email: '', password: '' })
	}

	postLogin = (state) => {
		const url = 'http://localhost:3000/api/users';
		const { email, password } = state;
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email, 
				password
			})
		}
		fetchUsers(url, options)
		.then(results => {
			if(results === 'error') {
				this.setState({error: 'Email and password do not match, please try again'})
			}
		})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h1> Sign-in to continue! </h1>
				<h3>{this.state.error}</h3>
				<input 
					type="text"
					name="email"
					placeholder="email"
					value={this.state.email}
					onChange={this.handleChange}
				/>
				<input
					type="password"
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