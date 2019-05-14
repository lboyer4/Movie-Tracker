import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { mockUncleanMovie } from '../../utils/mockdata';
import {cleanMovies} from '../../utils/cleaners';
import { addMovies } from '../../actions'

jest.mock('../../utils/cleaners');

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

		it.skip('should call fetch movie when mounted', () => {
			const wrapper = shallow(<App />)
			const instance= wrapper.instance();
			jest.spyOn(instance, 'fetchMovie');
			instance.componentDidMount();

			expect(instance.fetchMovie).toHaveBeenCalled()
		})
	})

	describe('makeMovies', () => {

		it('should call clean movies', () => {
			wrapper.instance().makeMovies([mockUncleanMovie])
			expect(cleanMovies).toHaveBeenCalled();

		})
	})

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

