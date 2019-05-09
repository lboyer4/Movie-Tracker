import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import  Login  from '../../containers/Login/Login';
import Signup from '../../containers/Signup/Signup';

import Home from '../Home/Home';



export default class Header extends Component {

	render() {
		return (
			<header>
				<h1> Movie Tracker </h1>
				<NavLink to='/login' className="nav"> Login </NavLink>
				<NavLink to='/signup' className="nav">Signup</NavLink>

			</header>


			)


	}
}