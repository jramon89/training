import { ADD_USER, DELETE_USER } from '../actions/actionTypes';

export default function(state=[], action) {
	switch(action.type){
		case ADD_USER:
			return [
				action.user,
			];
		case DELETE_USER:
			return [

			];
		case 'ok':
			return [
				...state
			];
		default: 
			return state;
	}
}