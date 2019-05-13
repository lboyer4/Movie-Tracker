import React, { Component } from 'react';
import './_App.scss';
import '../../index.scss';
import { Route} from 'react-router-dom';
import { apikey } from '../../utils/apikey';
import { fetchMovie } from '../../utils/fetchMovie.js';
import { addMovies } from '../../actions'
import { connect } from 'react-redux';
import MovieContainer from '../../containers/MovieContainer/MovieContainer';
import Header  from '../Header/Header';
import  Login  from '../../containers/Login/Login';
import Signup from '../../containers/Signup/Signup';
import FavoriteContainer from '../../containers/FavoriteContainer/FavoriteContainer';
import MovieDetails from '../MovieDetails/MovieDetails'

class App extends Component {
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


  makeMovies = (results) => {
    results = results.map(movie => {
      return {
        movie_id: movie.id,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        title: movie.title,
        poster_path: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + movie.poster_path,
        overview: movie.overview,
        favorited: false,
        key: movie.id
      }
    })
    this.props.addMovies(
    results
    )
  }

  render() {
    console.log(this.props.movies)
    return (
      <div className="App">
        <Route exact path='/favorites' component= { FavoriteContainer } />
        <Route exact path="/" component= { Header  } />     
        <Route exact path="/" component= { MovieContainer }/>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/signup" component={ Signup } />
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

const mapStateToProps = (state) => ({
  movies: state.movies
})

const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

