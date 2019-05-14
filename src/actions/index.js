export const addMovies = (movies) => ({
	type: 'ADD_MOVIES',
	movies
})

export const updateLogin = (user) => ({
	type: 'LOGGED_IN',
	user
})

export const logOut = () => ({
	type: 'LOGGED_OUT'
})

export const setFavorites = (favorites) => ({
	type: 'SET_FAVORITES',
	favorites
})

export const toggleFavorite = (id) => ({
	type: 'TOGGLE_FAVORITE',
	id
})
