import React from 'react';
import { Header } from './Header';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps } from './Header';
import { logOut } from '../../actions';

// jest.mock('../../actions')

describe('Header', () => {

  it.skip('should match the snapshot', () => {
    const wrapper = shallow(
      <Header />
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

        expect(mappedProps).toEqual(expected)
      })
    });

    describe('mapDispatchToProps', () => {
      it('should call dispatch when using a function from mapStateToDispatch', () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = logOut();

        const mappedProps = mapDispatchToProps(mockDispatch)

        mappedProps.logOut()

        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
      })
    })
})