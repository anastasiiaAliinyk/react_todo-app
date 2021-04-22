import React, { useState } from 'react';
import classNames from 'classnames';

import { deleteTodo, updateCompletedStatus } from './api/api';

export const TodoItem = ({ todo, deleteItem, setStatus }) => {
  const [checked, setChecked] = useState(todo.completed);
   const onDeleteHandler = (todoId) => {
    deleteTodo(todoId)
      .then(todo => deleteItem(todo.id));
  }

  const setStatusOk = (id, event) => {
    setChecked(event.target.checked);
    updateCompletedStatus(id, event.target.checked)
      .catch(() => {
        setChecked(!event.target.checked);
      });
    setStatus(id, event.target.checked)
  }

  return (
    <li
      className={classNames(
        { completed: todo.completed },
      )}
    >
    <div className="view">
      <input 
        type="checkbox" 
        className="toggle" 
        checked={checked}
        onChange={(event) => setStatusOk(todo.id, event)}
      />
      <label>{todo.title}</label>
      <button 
        type="button" 
        className="destroy" 
        onClick={() => onDeleteHandler(todo.id)}
      />
    </div>
    <input type="text" className="edit" />
  </li>
  )
}
