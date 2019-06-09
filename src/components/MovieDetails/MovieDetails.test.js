import React from 'react';
import { shallow } from 'enzyme';
import MovieDetails from './MovieDetails';
import { mockSelectedMovie } from '../../utils/mockData';

describe('MovieDetails', () => {
	it('should match snapshot without a selected movie', () => {
		const wrapper = shallow(
			<MovieDetails />
		)
		expect(wrapper).toMatchSnapshot()
	});

	it('should match snapshot with a selected move', () => {
		const wrapper = shallow(
			<MovieDetails
				selectedMovie={ mockSelectedMovie }
			/>
		);
	});
});