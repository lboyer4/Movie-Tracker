import React from 'react';

const Movie = ({ title, image, overview, id, favorited }) => {
  return(
    <section className='card'>
      <section className='movie-info-wrapper'>
        <h2 className='movie-title'>{title}</h2>
        <img src={image} />
        <p className='movie-overview'>{overview}</p>
      </section>
    </section>
  )
}

export default Movie;