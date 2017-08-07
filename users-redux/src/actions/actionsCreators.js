import {
    ADD_USER,
    DELETE_USER,
    SET_VISIBILITY_FILTER,
    ADD_TODO,
    TOGGLE_TODO
} from './actionTypes';

let id = 0;

export function addUser(user) {
    return {
        type: ADD_USER,
        data: {
            id: id++,
            name: user
        }
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

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}