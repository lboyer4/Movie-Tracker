import React from 'react';
import { connect } from 'react-redux';
import Movie from '../../components/Movie/Movie';

const MovieContainer = (props) => {
  const image = props.movies.map(movie => {
    return <Movie {...movie}/>
  })
  // props.movies.length && <img src={props.movies[0].image} />
  return(
    <section>
      {image}
    </section>
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(MovieContainer)



