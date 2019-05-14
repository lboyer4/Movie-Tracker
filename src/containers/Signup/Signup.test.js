import React from 'react';
import Signup from './Signup';
import { shallow } from 'enzyme';
import { fetchUsers } from '../../utils/fetchUsers';
import { mockUser, mockUrl, mockOptions } from '../../utils/mockData';

jest.mock('../../utils/fetchUsers')

describe('Signup', () => {
	it('should match snapshot', () => {
		const wrapper = shallow(
			<Signup />
		)
		expect(wrapper).toMatchSnapshot()
	})


	describe('handleChange', () => {
		it.skip('should set state with name and value on change', () => {

		})


		it.skip('should post a user to the database', async () => {

		})
		
		it.skip('should set state with an error message if there is an error', () => {

		})
	})
})
