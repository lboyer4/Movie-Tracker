import { addMovies } from './addMoviesReducer';
import * as actions from '../actions';

describe('addMoviesReducer', () => {
  it ('should return initial state', () => {
    //setup
    const expected = [];

    //execution 
    const result = addMovies (undefined, {})

    //expectation
    expect(result).toEqual(expected);
  });

  it ('should return the state with a new movie', () => {

  });
})