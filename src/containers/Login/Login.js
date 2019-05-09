import React, { Component } from 'react';


export default class Login extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: ''
		}
	}

	render() {
		return (
			<form>
				<h1> Sign-in to continue! </h1>
				<input 
					type="text"
					name="username"
					placeholder="username"
					value={this.state.username}
				/>
				<input
					type="text"
					name="password"
					placeholder="password"
					value={this.state.password} 
				/>

				<button> Submit </button>

			</form>
			)
	}
}