import {
    SET_VISIBILITY_FILTER,
    ADD_TODO,
    TOGGLE_TODO
} from '../actions/actionTypes';

const todo = function(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
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

const todos = function(state=[], action){
	switch(action.type){
		case ADD_TODO:
			return [
				...state,
				todo(undefined, action)
			];
		case TOGGLE_TODO:
			return state.map(function(t){
				todo(t, action);
			});
		default:
			return state;
	}
}

export default todos;