import React from 'react';
import Login from './Login'
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps } from './Login'

describe('Login', () => {
	it.skip('should match snapshot', () => {
		const wrapper = shallow(
			<Login />
		)
		expect(wrapper).toMatchSnapshot();
	});

	
})