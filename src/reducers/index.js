import { combineReducers } from 'redux';
import { addMovies } from './addMoviesReducer';
import { updateLogin } from './updateLoginReducer';
import { setFavorites } from './setFavoritesReducer';

export const rootReducer = combineReducers ({
		movies: addMovies, 
		loggedIn: updateLogin, 
		favorites: setFavorites
})

