import React from 'react';
import { FavoriteContainer } from './FavoriteContainer';
import { shallow } from 'enzyme';
import { mapStateToProps } from './FavoriteContainer';
import { mockSelectedMovie } from '../../utils/mockData';

describe('FavoriteContainer', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <FavoriteContainer
        movies={ [mockSelectedMovie] }/>
    )
    expect(wrapper).toMatchSnapshot();
  });
  describe('mapStateToProps', () => {
    it('should return a props object with movies', () => {

      const mockState= {
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