import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import  Login  from '../../containers/Login/Login';
import Signup from '../../containers/Signup/Signup';
import Home from '../Home/Home';
import { connect } from 'react-redux';

const Header = (props) => {
	let logOut = <NavLink to='/login' className="nav"> Logout </NavLink> 
	let logIn = <NavLink to='/login' className="nav"> Login </NavLink>
	let toggleLogin = props.loggedIn ? logOut : logIn;
		return (
			<header>
				<h1 className='title'> Movie Tracker </h1>
				<section className='link-wrapper'>
					{toggleLogin}
					<NavLink to='/signup' className="nav">Signup</NavLink>
				</section>
			</header>
			)
	}

const mapStateToProps = (state) => ({
	loggedIn: state.loggedIn
})

export default connect(mapStateToProps)(Header)