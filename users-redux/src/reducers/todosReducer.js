import {
    SET_VISIBILITY_FILTER,
    ADD_TODO,
    TOGGLE_TODO
} from '../actions/actionTypes';
const initialState = [{
    id: 1,
    completed: false,
    text: 'Algo'
}]
const todo = function(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                completed: false,
                text: action.text,
            };
        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return false;
            };
            return Object.assign({}, state, {
                completed: !state.completed
            });
        default:
            return state;
    }
}

const todos = function(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ];
        case TOGGLE_TODO:
            return state.map(function(t) {
                todo(t, action);
            });
        default:
            return state;
    }
}

export default todos;