import React, { Component } from 'react';
import './App.scss';
import { apikey } from '../../utils/apikey';
import { fetchMovie } from '../../utils/fetchMovie.js';

export default class App extends Component {
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

  makeMovies = (results) => {
    console.log('results before', results)
    results = results.map(movie => {
      return {
        title: movie.title,
        image: movie.poster_path,
        overview: movie.overview,
        id: movie.id
      }
    })
    this.setState({
      movies: results
    })
  }



  render() {
    return (
      <div className="App">
        Movie-Tracker
      </div>
    );
  }
}

