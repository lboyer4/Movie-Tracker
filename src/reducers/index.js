import { combineReducers } from 'redux';
import { addMovies } from './addMoviesReducer';
import { updateLogin } from './updateLoginReducer';

export const rootReducer = combineReducers ({
		movies: addMovies, loggedIn: updateLogin
})