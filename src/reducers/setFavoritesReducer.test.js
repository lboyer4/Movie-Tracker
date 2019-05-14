import { setFavorites } from './setFavoritesReducer';
import * as actions from '../actions';
import { mockFavorites } from '../utils/mockData';

describe('setFavoritesReducer', () => {
  it ('should return initial state', () => {

    //setup

    const expected = [];

    //execution

    const result = setFavorites(undefined, {})

    //expectation

    expect(result).toEqual(expected);

  });

  it('should return the state with a new favorite', () => {

    //setup

    const expected = 
    mockFavorites;

    //execution

    const result = setFavorites(undefined, actions.setFavorites(mockFavorites))

    //expectation

    expect(result).toEqual(expected)

  });
})