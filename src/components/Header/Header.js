import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import  Login  from '../../containers/Login/Login';
import Signup from '../../containers/Signup/Signup';
import Home from '../Home/Home';
import { connect } from 'react-redux';
import { logOut } from '../../actions';

const Header = (props) => {
	let toggleLogin;
	console.log('props', props.loggedIn.id)
	let logUserOut = <button className='logout btn' onClick={ logOut({}) }> <NavLink to='/login' className="nav"> Logout </NavLink></button>
	let logUserIn = <button className='login btn'><NavLink to='/login' className="nav"> Login </NavLink></button>
		toggleLogin = props.loggedIn.id ? logUserOut : logUserIn 
		return (
			<header>
				<h1 className='title'> Movie Tracker </h1>
				<section className='link-wrapper'>
					{ toggleLogin }
					<button className='signup btn'><NavLink to='/signup' className="nav">Signup</NavLink></button>
				</section>
			</header>
			)
	}

const mapStateToProps = (state) => ({
	loggedIn: state.loggedIn
})

const mapStateToDispatch = (dispatch) => ({
	loggedOut: () => dispatch(logOut())
})


export default connect(mapStateToProps, mapStateToDispatch)(Header)