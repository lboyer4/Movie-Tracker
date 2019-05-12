import { fetchMovie } from './fetchMovie';

describe('fetchMovie', () => {
	let mockMovieResponse;
	let mockUrl;

	beforeEach(() => {
		mockUrl="https://image.tmdb.org/t/p/w300_and_h450_bestv2//bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg";
		mockMovieResponse = {
			favorited: false,
			movie_id: 456740,
			overview: "words",
			poster_path: mockUrl,
			release_date: "2019-04-10",
			title: "Hellboy",
			vote_average: 5.1	
	}

		window.fetch=jest.fn().mockImplementation(() => {
			return Promise.resolve({
				ok:true,
				json: () => Promise.resolve(
					mockMovieResponse)
			})
		})
	});

	it('should be called with the correct params', () => {
		const expected = "https://api.themoviedb.org/3/movie/upcoming?api_key";
		fetchMovie("https://api.themoviedb.org/3/movie/upcoming?api_key");
		expect(window.fetch).toHaveBeenCalledWith(expected)
	});

	it('should return a response if the status is ok', async () => {
		const result = await fetchMovie()
		expect(result).toEqual(mockMovieResponse)
	});

	it('should return an error if status is not ok', async () => {
		window.fetch=jest.fn().mockImplementation(() => {
			return Promise.resolve({
				ok: false
			})
		})
		await expect(fetchMovie()).rejects.toEqual(Error('Error fetching movie'))
	});
})