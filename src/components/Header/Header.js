import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../actions';

export const Header = (props) => {
	let toggleLogin;
	let logUserOut = 
		<button className='logout btn' onClick={ props.logOut }> 		
			<NavLink to='/login' className="nav"> Logout </NavLink>
		</button>
	let logUserIn = 
		<button className='login btn'>
			<NavLink to='/login' className="nav"> Login </NavLink>
		</button>
		toggleLogin = props.loggedIn.id ? logUserOut : logUserIn 
		let viewFavorites = 
		<button className='view-fave btn'>
			<NavLink to='/favorites' className="nav"> View Favorites </NavLink>
		</button>
		return (
			<header>
				<h1 className='title'> Movie Tracker </h1>
				<section className='link-wrapper'>
					{ props.loggedIn.id && viewFavorites }
					{ toggleLogin }
					<button className='signup btn'>
						<NavLink to='/signup' className="nav"> Signup </NavLink>
					</button>
				</section>
			</header>
			)
	}

export const mapStateToProps = (state) => ({
	loggedIn: state.loggedIn
});

export const mapDispatchToProps = (dispatch) => ({
	logOut: () => dispatch(logOut())
});


export default connect(mapStateToProps, mapDispatchToProps)(Header)