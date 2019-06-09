import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapStateToProps, mapDispatchToProps } from './Login';
import { setFavorites, updateLogin } from '../../actions'


describe('Login', () => {
	it('should match snapshot', () => {
		const wrapper = shallow(
			<Login />
		)
		expect(wrapper).toMatchSnapshot();
	});

	describe('handleChange', () => {
		it('should set state when handle change is called', () => {
			const mockUserEvent = {
				target: {
					name: 'email',
					value: 'puppies@gmail'
				}
			}

			const wrapper = shallow(
			<Login />
			)
			wrapper.instance().handleChange(mockUserEvent)
			expect(wrapper.state().email).toEqual('puppies@gmail')
		});
	});

	
	describe('mapStateToProps', () => {

		it('should return a user object and a favorites array', () => {

			const mockState = {
				loggedIn: {user: 'name'},
			}

			const expected = {
				loggedIn: mockState.loggedIn,
			}

			const mappedProps = mapStateToProps(mockState)

			expect(mappedProps).toEqual(expected)
		})
	})

	describe('mapDispatchToProps', () => {

		it('should call dispatch when using a function from MDTP', () => {

			const mockDispatch = jest.fn();

			const actionToDispatch = updateLogin({name: 'joe'})

			const mappedProps= mapDispatchToProps(mockDispatch)

			mappedProps.updateLogin({name: 'joe'})

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
		})

	it('should call dispatch when using a function from MDTP', () => {
					const mockDispatch = jest.fn();

			const actionToDispatch = setFavorites(['favorite'])

			const mappedProps= mapDispatchToProps(mockDispatch)

			mappedProps.setFavorites(['favorite'])

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
	})
	})
})