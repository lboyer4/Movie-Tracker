import { combineReducers } from 'redux';
import { addMovies } from './addMoviesReducer';

export const rootReducer = combineReducers ({
		movies: addMovies
})