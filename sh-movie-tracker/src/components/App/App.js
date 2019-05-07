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
    fetchMovie(url)
    .then(data => 
      console.log(data)
    )
    
  }

  render() {
    return (
      <div className="App">
        Movie-Tracker
      </div>
    );
  }
}

