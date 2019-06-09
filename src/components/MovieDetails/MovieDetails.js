import React from 'react';
import './_MovieDetails.scss';
import PropTypes from 'prop-types';

const MovieDetails = ({ movie_id, title, poster_path, release_date, vote_average, overview, favorited}) => {
	return (
		<article>
			<div className="left">
				<img src={poster_path} alt='movie poster'/>
			</div>
			<div className="right">
				<h1 className='movie-title-detail'>{title}</h1>
				<h5 className='date-detail'>Release Date: {release_date}</h5>
				<p className='overview-details'> {overview} </p>
				<h6 className='vote-detail'> Vote Average: {vote_average}</h6>
			</div>
		</article>
	)
}

export default MovieDetails;

MovieDetails.propTypes = {
	favorited: PropTypes.bool,
	movie_id: PropTypes.number,
	overview: PropTypes.string,
	poster_path: PropTypes.string,
	release_date: PropTypes.string,
	title: PropTypes.string,
	vote_average: PropTypes.number
}