import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../utils/fetchUsers';
import { toggleFavorite } from '../../actions';
import { Route, Link } from 'react-router-dom';
import MovieDetails from '../MovieDetails/MovieDetails';
import PropTypes from 'prop-types';

export class Movie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			createAccountMsg: '',
			currentMovieId: 0
		}
	}

	handleClick = () => {
		if (!this.props.loggedIn.id)  {
			this.setState({createAccountMsg: '* Please create an account'})
		} else if(this.props.favorited === false) {
			this.props.toggleFavorite(this.props.movie_id)
			this.postFavoriteMovie()
		} else if (this.props.favorited === true) {
			this.props.toggleFavorite(this.props.movie_id)
			this.deleteFavoriteMovie(this.props.movie_id)
		}
	}

	deleteFavoriteMovie = (movie_id) => {
		const { id } = this.props.loggedIn
		
		const url = `http://localhost:3000/api/users/${id}/favorites/${movie_id}`
		const options = {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id,
				movie_id
			})
		}
		fetchUsers(url, options)
	}

	postFavoriteMovie = () => {
		const url = 'http://localhost:3000/api/users/favorites/new';
		const { movie_id, title, poster_path, release_date, vote_average, overview } = this.props
		const user_id = this.props.loggedIn.id
		const options = { 
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				movie_id, 
				user_id, 
				title, 
				poster_path, 
				release_date, 
				vote_average, 
				overview 
			})
		}
		fetchUsers(url, options)
	}

	render() {
		let movieId = this.props.movie_id
		let trueMessage = <h4 className='toggle-msg'> Remove Favorite </h4>
		let falseMessage = <h4 className='toggle-msg'> Favorite </h4>
		let toggleMessage = this.props.favorited ? trueMessage : falseMessage
		let message = <h3 className='login-msg'>{this.state.createAccountMsg}</h3>
	  return(
	    <section className='card'>    	
	      <section className='movie-info-wrapper'>
					<Link to=
						{`/movies/${movieId}`}>
						<img src={this.props.poster_path} alt='movie poster'/>
					</Link> 
					<Route exact path=
						{`/movies/${movieId}`} 
						component= { MovieDetails } 
					/>
					<button onClick={this.handleClick} className='fav-btn'> 
						{toggleMessage} 
					</button>
	      </section>
	      {message}
	    </section>
	  )
	}
}

export const mapStateToProps = (state) => ({
	loggedIn: state.loggedIn,
	favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
	toggleFavorite: (id) => dispatch(toggleFavorite(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie)