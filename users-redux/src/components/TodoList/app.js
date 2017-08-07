import React from 'react';
import Footer from './Footer';
import AddTodo from '../../views/TodosView/AddTodo';
import VisibleTodoList from '../../views/TodosView/VisibleTodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App