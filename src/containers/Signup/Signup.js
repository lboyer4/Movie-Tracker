import React, { Component } from 'react';
import { fetchUsers } from '../../utils/fetchUsers';

export default class Signup extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			email: '',
			password: '',
			error: ''
		}
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value })
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.postUserInput(this.state)
		this.setState({ name: '', email: '', password: '' })
	}

	postUserInput = (state) => {
		const url = 'http://localhost:3000/api/users/new';
		const { name, email, password } = state;
		const options = { 
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
					name,
					email,
					password
			})
		}
		fetchUsers(url, options)
		.then(results => {
			if (results === 'error') {
				this.setState({
					error: '*Email has already been used, try again.'
				})
			}
		})
	}

	render() {
		return (
			<form className="submit-form" onSubmit = {this.handleSubmit}>
				<div className="create-header">
					<h1 className="form-title"> Create Account </h1> 
				</div>
				<h3 className="error-msg"> {this.state.error} </h3>
				<input 
					className="name"
					type="text" 
					name="name" 
					placeholder="name" 
					value={this.state.name}
					onChange={this.handleChange}
				/>
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
				<button className="submit-btn"> Submit </button>
			</form>
		)
	}
}