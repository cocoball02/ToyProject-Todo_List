import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  index = 0;
  state = {
    todoText: '',
    todoList: [],
    categoryName: '',
    categoryList: [],
  };

  //입력창이 바뀔때마다 동작하는 함수.
  handleChange = () => {};

  //state - todoText 바꾸는 함수.
  todoChange = () => {};

  //state - todo 삭제하는 함수
  todoRemove = () => {};

  render() {
    const { todoText, categoryName } = this.state;
    const { handleChange, todoChange, todoRemove } = this;
    return (
      <div>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
