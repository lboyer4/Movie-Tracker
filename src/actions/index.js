export const addMovies = (movies) => ({
	type: 'ADD_MOVIES',
	movies
})

export const updateLogin = (user) => ({
	type: 'LOGGED_IN',
	user
})

export const logOut = (user) => ({
	type: 'LOGGED_OUT',
	user
})
