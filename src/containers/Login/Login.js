import React, { Component } from 'react';
import { fetchUsers } from '../../utils/fetchUsers';
import { connect } from 'react-redux';
import { updateLogin } from '../../actions';
import { Redirect } from 'react-router-dom';
import { setFavorites } from '../../actions';
import PropTypes from 'prop-types';


export class Login extends Component {
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
		this.setState({ [name] : value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.postLogin(this.state);
		this.setState({ email: '', password: '' });
	};

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
		};

		fetchUsers(url, options)
		.then(results => {
			if(results === 'error') {
				this.setState({error: '*Email and password do not match, please try again'})
			} else {
				this.setState({ loggedIn: true })
				this.props.updateLogin(
					results.data
          )
			}
		});
	};

	render() {
		if(this.state.loggedIn) {
			return ( 
				<Redirect to="/" />
				)
		}
		return (
			<form className="signin-form" onSubmit={this.handleSubmit}>
			<div className="create-header">
				<h1 className="form-title"> Log in </h1>
			</div>
				<h3 className="error-msg" >{this.state.error}</h3>
				<input 
					className="email-input"
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
			);
	};
};

export const mapStateToProps = (state) => ({
	loggedIn: state.loggedIn
});

export const mapDispatchToProps = (dispatch) => ({
	updateLogin: (user) => dispatch(updateLogin(user)),
	setFavorites: (favorites) => dispatch(setFavorites(favorites))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propType = {
	history: PropTypes.object,
	location: PropTypes.object,
	loggedIn: PropTypes.object,
	match:PropTypes.object,
	setFavorites: PropTypes.func,
	updateLogin: PropTypes.func,
}