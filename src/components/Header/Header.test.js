import React from 'react';
import { Header } from './Header';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps } from './Header';
import { logOut } from '../../actions';

const mockLoggedIn = {
  id: 2,
  name: "Ryan",
  password: "puppies",
  email: "puppies@gmail.com"
}

const mockLogOut= jest.fn()


describe('Header', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(
      <Header
        loggedIn={mockLoggedIn}
        logOut={mockLogOut} 
      />
    )
    expect(wrapper).toMatchSnapshot()
  });

  describe('mapStateToProps', () => {
    it ('should return a props object with loggedIn', () => {
      const mockState = {
        loggedIn: 'loggedIn'
      }
        const expected = {
          loggedIn: 'loggedIn'
        }

        const mappedProps = mapStateToProps(mockState);

        expect(mappedProps).toEqual(expected);
      });
    });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using a function from mapStateToDispatch', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = logOut();

      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.logOut();

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});