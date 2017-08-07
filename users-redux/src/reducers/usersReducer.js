import { ADD_USER, DELETE_USER } from '../actions/actionTypes';

export default function(state=[], action) {
	switch(action.type){
		case ADD_USER:
			return [
				...state,
				action.data
			];
		case DELETE_USER:
			console.log('deleting', action)
			const result = state.filter((v, i) => {
				return v.id !== action.id;
			})
			return result;
		case 'ok':
			console.log('state from reducer', state)
			return [
				...state
			];
		default: 
			return state;
	}
}