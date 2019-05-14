import { mockSelectedMovie, mockUncleanMovie } from './mockData';
import { cleanMovies } from './cleaners';

describe('cleanMovies', () => {
	it('should return movies with correct props', () => {
		const result = cleanMovies([mockUncleanMovie]);
		expect(result).toEqual([mockSelectedMovie])
	})
})