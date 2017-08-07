import { connect } from 'react-redux';
import { toggleTodo } from '../../actions/actionsCreators';
import TodoList from '../../components/TodoList/TodoList';

const getVisibleTodos = (todos, filter) => {
	switch(filter) {
		case 'SHOW_ALL':
			return todos;
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed);
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed);
	}
}

const mapStateToProps = state => {
	return {
		todos: getVisibleTodos(state.todos, state.filter)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onTodoClick: id => {
			alert(id)
			dispatch(toggleTodo(id))
		}
	}
}

const VisibleTodoList = connect(
	mapStateToProps, 
	mapDispatchToProps
)(TodoList);

export default VisibleTodoList;