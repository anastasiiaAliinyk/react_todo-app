import React, { useState } from 'react';
import { saveTodo, BASE_USERID } from './api/api';

export const TodoApp = ({ addTodo }) => {
  const [query, setQuery] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    saveTodo({
      "userId": BASE_USERID,
      "title": query,
      "completed": false,
    })
    .then(addTodo);

    setQuery('');
  }

  const onChangeHandler = (event) => {
    setQuery(event.target.value);
  }

  return (
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          className="new-todo"
          value={query}
          placeholder="What needs to be done?"
          onChange={onChangeHandler}
          required
        />
      </form>
    )
};
