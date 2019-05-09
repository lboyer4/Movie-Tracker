import React, { Component } from 'react';
import './App.scss';
import { Route, Switch, NavLink } from 'react-router-dom';
import { apikey } from '../../utils/apikey';
import { fetchMovie } from '../../utils/fetchMovie.js';
import { addMovies } from '../../actions'
import { connect } from 'react-redux';
import MovieContainer from '../../containers/MovieContainer/MovieContainer';
import Header  from '../Header/Header';
import  Login  from '../../containers/Login/Login';
import Signup from '../../containers/Signup/Signup';
import Home from '../Home/Home';
class App extends Component {
  constructor() {
    super();
    this.state={
      movies: []
    }
  }

  componentDidMount = () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`;
    let movies = fetchMovie(url)
    .then(results => this.makeMovies(results.results)
    ) 
  }

  //comment

  makeMovies = (results) => {
    console.log('results before', results)
    results = results.map(movie => {
      return {
        title: movie.title,
        image: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + movie.poster_path,
        overview: movie.overview,
        id: movie.id,
        favorited: false
      }
    })
    console.log(results)
    this.props.addMovies(
    results
    )
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component= { Header  } />     
        <Route exact path="/" component= { MovieContainer }/>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/signup" component={ Signup } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

