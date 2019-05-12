import React from 'react';
import Movie from './Movie.js';
import { shallow } from 'enzyme';
// import configureStore from 'redux-mock-store';

describe('Movie', () => {
	let wrapper;

	const mockMovie = {
		favorited: false,
		movie_id: 514439,
		overview: "When he was 14, Smith drowned in Lake St. Louis and was dead for nearly an hour. According to reports at the time, CPR was performed 27 minutes to no avail. Then the youth's mother, Joyce Smith, entered the room, praying loudly. Suddenly, there was a pulse, and Smith came around.",
		poster_path: "https://image.tmdb.org/t/p/w300_and_h450_bestv2//t58dx7JIgchr9If5uxn3NmHaHoS.jpg",
		release_date: "2019-04-11",
		title: "Breakthrough",
		vote_average: 6.6
	}

	beforeEach(() => {
		wrapper = shallow(
				<Movie 
				{...mockMovie}
					/>
		)
	})

	it.skip('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});