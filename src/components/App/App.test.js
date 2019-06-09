import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { mockUncleanMovie } from '../../utils/mockdata';
import {cleanMovies} from '../../utils/cleaners';
import { addMovies } from '../../actions';
import { fetchMovie } from '../../utils/fetchMovie.js';
import { apikey } from '../../apikey';

jest.mock('../../utils/cleaners');

jest.mock('../../utils/fetchMovie.js')
fetchMovie.mockImplementation(() => 
	Promise.resolve( {ok: true}))

const mockCleanMovies = jest.fn();
const mockMakeMovies = jest.fn();

describe('App', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(
				<App 
				addMovies= {jest.fn()} 
				/>
		);
	});

	it('should match the snapshot with all data passed in', () => {
		expect(wrapper).toMatchSnapshot();
	});

	describe('componentDidMount', () => {

		it('should call fetch movie when mounted', () => {
			const wrapper = shallow(<App />)

			const mockUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`
			
			wrapper.instance().componentDidMount();

			expect(fetchMovie).toHaveBeenCalledWith(mockUrl)
		});
	});

	describe('makeMovies', () => {

		it('should call clean movies', () => {
			wrapper.instance().makeMovies([mockUncleanMovie])
			expect(cleanMovies).toHaveBeenCalled();
		});
	});

	describe('mapStateToProps', () => {

		it('should return an object with movies array', () => {

			const mockState = {
				movies: ['movies']
			}

			const expected = {
				movies: mockState.movies 
			}

			const mappedProps = mapStateToProps(mockState)
			expect(mappedProps).toEqual(expected)
		})
	})

	describe('mapDispatchToProps', () => {

		it('should call dispatch when using a function from MDTP', () => {

			const mockDispatch = jest.fn();
			const actionToDispatch = addMovies(['movies']);
			const mappedProps= mapDispatchToProps(mockDispatch)

			mappedProps.addMovies(['movies'])

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
		})
	})
})

