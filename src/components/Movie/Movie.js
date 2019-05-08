import React from 'react';

const Movie = ({ title, image, overview, id, favorited }) => {
  return(
    <section>
      <h2>{title}</h2>
      <img src={image} />
      <p>{overview}</p>
    </section>
  )
}

export default Movie;