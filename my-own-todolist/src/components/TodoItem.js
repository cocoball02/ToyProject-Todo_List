import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { data, todoRemove } = this.props;
    return (
      <div className="todoItem">
        <p>{data.text}</p>
        <button
          name="remove"
          onClick={() => {
            todoRemove(data.id);
          }}
        >
          삭제
        </button>
      </div>
    );
  }
}

export default TodoItem;
