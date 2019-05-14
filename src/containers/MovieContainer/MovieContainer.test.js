import React from 'react';
import { MovieContainer } from './MovieContainer';
import { shallow } from 'enzyme';
import { mapStateToProps } from './MovieContainer';

describe('MovieContainer', () => {
  it.skip('should match snapshot', () => {
    const wrapper = shallow(
      <MovieContainer />
    )
    expect(wrapper).toMatchSnapShot();
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