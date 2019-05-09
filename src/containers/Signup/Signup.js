import React, { Component } from 'react';


export default class Signup extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			username: '',
			password: ''
		}
	}

	render() {
		return (

			<form>
				<h1> Welcome! Please create an account to continue. </h1> 
				<input 
					type="text" 
					name="name" 
					placeholder="name" 
					value={this.state.name}
				/>
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