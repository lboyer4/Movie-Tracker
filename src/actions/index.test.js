import * as actions from './index';
import { mockUser } from '../utils/mockData';

describe('actions', () => {
	it('should return movies with a type of ADD_MOVIES', () => {
		const movies = [ {
			title: "Hellboy"
		}];
		const expected = {
			type: 'ADD_MOVIES',
			movies
		};
		const result = actions.addMovies(movies);

		expect(result).toEqual(expected)
	});

	it('should return user with a type of LOGGED_IN', () => {
		
		const expected = {
			type: 'LOGGED_IN',
			user: mockUser
		};
		const result = actions.updateLogin(mockUser);

		expect(result).toEqual(expected)
	});

	it('should return a type of LOGGED_OUT', () => {
		
		const expected = {
			type: 'LOGGED_OUT'
		};
		const result = actions.logOut();

		expect(result).toEqual(expected)
	});

});

