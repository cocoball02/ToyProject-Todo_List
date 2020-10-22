import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const { todoList, todoRemove } = this.props;
    const list = todoList.map(el => {
      return <TodoItem key={el.id} data={el} todoRemove={todoRemove} />;
    });
    return <div>{list}</div>;
  }
}

export default TodoList;
