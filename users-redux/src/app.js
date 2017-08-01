import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { addUser, ok } from './actions/actionsCreators';
import reducer from './reducers/usersReducer';
import Test from './components/Test/Test';
import UsersView from './views/UsersView/UsersView';
import './style/styles.scss';

const store = createStore(reducer);
store.dispatch(addUser({name:'JoserDev'}));
//store.dispatch(ok());
console.log('store', store.getState());
render(
	<Provider store={store}>
		<UsersView />
	</Provider>,
	document.getElementById('app')
	
);
