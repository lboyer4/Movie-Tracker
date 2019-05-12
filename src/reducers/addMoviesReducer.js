const initialState = []

export const addMovies = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_MOVIES':
			return action.movies
		case 'TOGGLE_MOVIES':
		return state.map(movie => {
			if(movie.id === action.id) {
				const favorited = !movie.favorited
				return {...movie, favorited}
			} else {
				return movie
			}
		})
		default: 
			return state
	}
}

