export const cleanMovies = (movies) => {
  return movies.map(movie => {
    return {
      movie_id: movie.id,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      title: movie.title,
      poster_path: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + movie.poster_path,
      overview: movie.overview,
      favorited: false,
      key: movie.id
    };
  });
}