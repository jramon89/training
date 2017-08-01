import { ADD_USER, DELETE_USER } from './actionTypes';

export function addUser(user){
	return {
		type: ADD_USER,
		user
	}
}

export function deleteUser(id) {
	return {
		type: DELETE_USER,
		id
	}
}

export function ok() {
	return {
		type: 'ok',
	}
}