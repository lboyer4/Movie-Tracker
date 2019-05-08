const initialState = []

export const addMovies = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_MOVIES':
			return action.movies;	
		default: 
			return state
	}
}
