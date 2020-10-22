import React, { Component } from 'react';

class TodoForm extends Component {
  render() {
    const { text, handleChange, todoCreate, todoRemove } = this.props;
    return (
      <div>
        <input
          name="todoText"
          value={text}
          onChange={e => {
            handleChange(e);
          }}
        />
        <button
          type="submit"
          onClick={() => {
            todoCreate();
          }}
        ></button>
      </div>
    );
  }
}

export default TodoForm;
