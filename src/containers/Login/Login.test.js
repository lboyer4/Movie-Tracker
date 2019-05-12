import React from 'react';
import Login from './Login.js'
import { shallow } from 'enzyme';

describe('Login', () => {
	let wrapper;

	const mockPreventDefault = jest.fn();

	beforeEach(() => {
		wrapper = shallow(
			<Login />
				)
	});

	it.skip('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	
})