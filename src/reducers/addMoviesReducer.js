const initialState = []

export const addMovies = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_MOVIES':
			return action.movies
		case 'TOGGLE_FAVORITE':
		return state.map(movie => {
			if(movie.movie_id === action.id) {
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

