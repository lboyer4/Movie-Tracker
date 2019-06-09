import React from 'react';
import { Movie, mapStateToProps,mapDispatchToProps,  } from './Movie';
import { shallow } from 'enzyme';
import { toggleFavorite } from '../../actions';
import { fetchUsers } from '../../utils/fetchUsers';
import { apikey } from '../../apikey';

jest.mock('../../utils/fetchUsers')
fetchUsers.mockImplementation(() =>
	Promise.resolve( {ok: true}) )

describe('Movie', () => {
	let wrapper;

	const mockId = 9;

	const mockMovie = {
		favorited: false,
		movie_id: 514439,
		overview: "When he was 14, Smith drowned in Lake St. Louis and was dead for nearly an hour. According to reports at the time, CPR was performed 27 minutes to no avail. Then the youth's mother, Joyce Smith, entered the room, praying loudly. Suddenly, there was a pulse, and Smith came around.",
		poster_path: "https://image.tmdb.org/t/p/w300_and_h450_bestv2//t58dx7JIgchr9If5uxn3NmHaHoS.jpg",
		release_date: "2019-04-11",
		title: "Breakthrough",
		vote_average: 6.6
	}

	beforeEach(() => {
		wrapper = shallow(
				<Movie 
				{...mockMovie}
					/>
		)
	});

	it('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	describe('handleClick', () => {
		it('should set state with create account messafge if theres no loggedIn id', () => {
			wrapper = shallow(
				<Movie
					loggedIn={{id: null}}
				/>
			)

			wrapper.instance().handleClick()
			expect(wrapper.instance().state.createAccountMsg).toEqual('* Please create an account')
		});

		it('should change favorited to true if favorited is false', () => {
			wrapper = shallow(
				<Movie
					{...mockMovie}
					loggedIn={{id: 1}}
					favorited= {false}
					toggleFavorite={jest.fn()}
				/>
			)

			wrapper.instance().handleClick()
			expect(wrapper.instance().props.toggleFavorite).toHaveBeenCalledWith(mockMovie.movie_id)
		});

		it('should change favorited to false if favorite is true', () => {
			wrapper = shallow(
				<Movie
					{...mockMovie}
					loggedIn={{id: 1}}
					favorited={true}
					toggleFavorite={jest.fn()}
					deleteFavoriteMovie={jest.fn()}
				/>
			)

			wrapper.instance().handleClick()
			expect(wrapper.instance().props.toggleFavorite).toHaveBeenCalledWith(mockMovie.movie_id)
		});
	});

	describe('deleteFavoriteMovie', () => {
		it('should call fetchUsers', () => {
			const wrapper = shallow(
				<Movie 
					{...mockMovie}
					loggedIn={{id: 1}}
					favorited={true}
					toggleFavorite={jest.fn()}
					deleteFavoriteMovie={jest.fn()}
				/>)
			wrapper.instance().deleteFavoriteMovie(mockId)
			expect(fetchUsers).toHaveBeenCalled();
		});
	});

	describe('postFavoriteMovie', () => {
		it('should call fetch users', () => {
			const wrapper = shallow(
				<Movie 
					{...mockMovie}
					loggedIn={{id: 1}}
					favorited={true}
					toggleFavorite={jest.fn()}
				/>
			)

			wrapper.instance().postFavoriteMovie()
			expect(fetchUsers).toHaveBeenCalled()
		})
	})

	describe('mapStateToProps', () => {

		it('should return a user object and a favorites array', () => {

			const mockState = {
				loggedIn: {user: 'name'},
				favorites: ['favorites']
			}

			const expected = {
				loggedIn: mockState.loggedIn,
				favorites: mockState.favorites 
			}

			const mappedProps = mapStateToProps(mockState);

			expect(mappedProps).toEqual(expected);
		});
	});

	describe('mapDispatchToProps', () => {

		it('should call dispatch when using a function from MDTP', () => {

			const mockDispatch = jest.fn();

			const actionToDispatch = toggleFavorite(9);

			const mappedProps= mapDispatchToProps(mockDispatch);

			mappedProps.toggleFavorite(9);

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});
	});
});