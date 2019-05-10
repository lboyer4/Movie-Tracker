import React from 'react';

const Movie = ({ title, image, overview, id, favorited }) => {
  return(
    <section>
      <section className='movie-info-wrapper'>
        <h2 className='movie-title'>{title}</h2>
        <img src={image} />
        <p>{overview}</p>
      </section>
    </section>
  )
}

export default Movie;