import React from 'react';
import './_MovieDetails.scss';

const MovieDetails = ({ movie_id, title, poster_path, release_date, vote_average, overview }) => {
	console.log(title)
	return (
		<article>
			<div className="left">
				<img src={poster_path} alt='movie poster'/>
			</div>
			<div className="right">
				<h1>{title}</h1>
				<h5>Release Date: {release_date}</h5>
				<p> {overview} </p>
				<h6> Vote Average: {vote_average}</h6>
			</div>
		</article>

	)
}



export default MovieDetails;