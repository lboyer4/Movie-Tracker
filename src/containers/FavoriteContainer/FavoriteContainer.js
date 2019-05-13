import React from 'react';
import { connect } from 'react-redux';
import Movie from '../../components/Movie/Movie';

const FavoriteContainer = (props) => {
  const image = props.movies.map(movie => {
    if(movie.favorited) {
      return <Movie {...movie}/>
    }
  })
  return(
    <section className='main'>
      <section className='image-container'>
        {image}
      </section>
    </section>
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(FavoriteContainer)



