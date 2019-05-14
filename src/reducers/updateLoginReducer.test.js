import { updateLogin } from './updateLoginReducer';
import * as actions from '../actions';
import { mockFavorites, mockUser } from '../utils/mockData';

describe('updateLoginReducer', () => {
  it('should return ititial state', () => {
    //setup

    const expected = {};

    //exectuion

    const result = updateLogin(undefined, {})

    //expectation

    expect(result).toEqual(expected)

  });

  it('should return the state with the updated user', () => {

    //setup

    const expected= mockUser;

    //execution

    const result = updateLogin(undefined, actions.updateLogin(mockUser))

    //expectation

    expect(result).toEqual(expected)

  });
})