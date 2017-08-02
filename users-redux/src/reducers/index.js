import { combineReducers } from 'redux';
import users from './usersReducer';
import todos from './todosReducer';
import filter from './filterReducer';

const reducers = combineReducers({
	users,
	todos,
	filter
});

export default reducers;

