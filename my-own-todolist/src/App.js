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
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //state - todoText 바꾸는 함수.
  todoCreate = () => {
    this.setState({
      todoList: this.state.todoList.concat({
        text: this.state.todoText,
        id: this.index++,
      }),
    });
    this.setState({
      todoText: '',
    });
  };

  //state - todo 삭제하는 함수
  todoRemove = id => {
    this.setState({
      todoList: this.state.todoList.filter(el => el.id !== id),
    });
  };

  render() {
    const { todoText, todoList, categoryName } = this.state;
    const { handleChange, todoCreate, todoRemove } = this;
    return (
      <div>
        <TodoForm
          text={todoText}
          handleChange={handleChange}
          todoCreate={todoCreate}
        />
        <TodoList todoList={todoList} todoRemove={todoRemove} />
      </div>
    );
  }
}

export default App;
