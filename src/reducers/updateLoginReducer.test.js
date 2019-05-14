import { updateLogin } from './updateLoginReducer';
import * as actions from '../actions';

describe('updateLoginReducer', () => {
  it('should return ititial state', () => {
    //setup

    const expected = {};

    //exectuion

    const result = updateLogin(undefined, {})

    //expectation

    expect(result).toEqual(expected)

  })
})