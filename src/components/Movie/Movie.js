import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../utils/fetchUsers';
import { fetchMovie } from '../../utils/fetchMovie';
import { setFavorites } from '../../actions';

class Movie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			createAccountMsg: '',
			currentMovieId: 0
		}
	}

	handleClick = () => {
		if (!this.props.loggedIn.id)  {
			this.setState({createAccountMsg: 'please create an account'})
		} else {
			// this.postFavoriteMovie()
			this.fetchCurrentMovies(this.props.loggedIn.id)
		}
	}

	fetchCurrentMovies = (id) => {
		const url = `http://localhost:3000/api/users/${id}/favorites`
		const currentMovie = fetchMovie(url)
		.then(results => this.props.setFavorites(results.data))
	}

// 	searchCurrentMovies = (data) => {
// 		console.log('movieId:', this.props.movie_id)
// 		data.find(currentMovie => {
// 			if(currentMovie.id === this.props.movie_id) {
// 				this.postFavoriteMovie();
// 			} 
// 	})
// }

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
		const favoriteMovie = fetchUsers(url, options)
	}

	render() {
		let message = <h1>{this.state.createAccountMsg}</h1>
	  return(
	    <section className='card'>
	      <section className='movie-info-wrapper'>
	        <h2 className='movie-title'>{this.props.title}</h2>
	        <img src={this.props.poster_path} />
	        <p className='movie-overview'>{this.props.overview}</p>
	        {message}
	        <button onClick={this.handleClick} className='fav-btn'> Favorite </button>
	      </section>
	    </section>
	  )
	}
}

const mapStateToProps = (state) => ({
	loggedIn: state.loggedIn
})

const mapDispatchToProps = (dispatch) => ({
	setFavorites: (favorites) => dispatch(setFavorites(favorites))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie)