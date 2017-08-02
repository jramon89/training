import {
    ADD_USER,
    DELETE_USER,
    SET_VISIBILITY_FILTER,
    ADD_TODO,
    TOGGLE_TODO
} from './actionTypes';

export function addUser(user) {
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

/**
	TodoList actions
**/

let nextTodoId = 0;

export function addTodo(text) {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text
    }
}

export function setVisibilityFilter(filter) {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}

export function toggleTode(id) {
	return {
		type: TOGGLE_TODO,
		id
	}
}