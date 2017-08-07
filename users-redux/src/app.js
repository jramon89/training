import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { addUser, deleteUser, ok } from './actions/actionsCreators';
import reducer from './reducers';
import Test from './components/Test/Test';
import UsersView from './views/UsersView/UsersView';
import TodoListView from './components/TodoList/app';
import './style/styles.scss';

const store = createStore(reducer);
store.dispatch(addUser('Jose'));
store.dispatch(addUser('Ramon'));
store.dispatch(addUser('G'));
store.dispatch(deleteUser(1));
//store.dispatch(ok());
console.log('store', store.getState());
render(
	<Provider store={store}>
		<div>
			<UsersView />
			{/*<TodoListView />*/}
		</div>
	</Provider>,
	document.getElementById('app')
	
);
