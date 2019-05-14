import React from 'react';
import { MovieContainer } from './MovieContainer';
import { shallow } from 'enzyme';
import { mapStateToProps } from './MovieContainer';
import { mockSelectedMovie } from '../../utils/mockData';

describe('MovieContainer', () => {

  it('should match snapshot', () => {
    const wrapper = shallow(
      <MovieContainer 
      movies={ [mockSelectedMovie]
      
      }/>
    )
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it ('should return a props object with movies', () => {
      const mockState = {
        movies: 'movies'
      }
        const expected = {
          movies: 'movies'
        }

        const mappedProps = mapStateToProps(mockState);

        expect(mappedProps).toEqual(expected)
      })
    })
})