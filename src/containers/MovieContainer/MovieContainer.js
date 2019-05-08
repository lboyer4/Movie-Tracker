import React from 'react';
import { connect } from 'react-redux';

const MovieContainer = (props) => {
  console.log(props.movies)
  const image = props.movies.length && <img src={props.movies[0].image} />
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



