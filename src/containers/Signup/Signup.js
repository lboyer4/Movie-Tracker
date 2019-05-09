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
		this.setState({ [name] : value })
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
		const newUser = fetchUsers(url, options)
		.then(results => {
			if (results === 'error') {
			this.setState({error: 'Email has already been used, try again.'})
			}
		})
		
		

	}

	render() {
		// if (this.state.email === ) {
		// 	return 'email has already be used'
		// }
		
		return (

			<form onSubmit = {this.handleSubmit}>
				<h1> Welcome! Please create an account to continue. </h1> 
				<h3> {this.state.error} </h3>
				<input 
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