import React, { Component } from 'react';
import './_App.scss';
import '../../index.scss';
import { Route } from 'react-router-dom';
import { apikey } from '../../utils/apikey';
import { fetchMovie } from '../../utils/fetchMovie.js';
import { addMovies } from '../../actions'
import { connect } from 'react-redux';
import MovieContainer from '../../containers/MovieContainer/MovieContainer';
import Header from '../Header/Header';
import Login from '../../containers/Login/Login';
import Signup from '../../containers/Signup/Signup';
import FavoriteContainer from '../../containers/FavoriteContainer/FavoriteContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import { cleanMovies } from '../../utils/cleaners';

export class App extends Component {
  constructor() {
    super();
    this.state={
      movies: []
    }
  }

  componentDidMount = () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`;
   fetchMovie(url)
    .then(results => this.makeMovies(results.results)
    ) 
  }

  makeMovies = (movies) => {
    movies = cleanMovies(movies);
    this.props.addMovies(movies);
  }

  render() {
    return (
      <div className='App'>
        <Route exact path='/favorites' component= { FavoriteContainer } />
        <Route exact path='/' component= { Header  } />     
        <Route exact path='/' component= { MovieContainer }/>
        <Route exact path='/login' component={ Login } />
        <Route exact path='/signup' component={ Signup } />
        <Route path='/movies/:id' render={({ match }) => {
          const selectedMovie = this.props.movies.find(movie => {
            return movie.movie_id === parseInt(match.params.id)
           }) 
          if (selectedMovie) {         
            return <MovieDetails {...selectedMovie} />
            }
        }}
        />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies
})

export const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

