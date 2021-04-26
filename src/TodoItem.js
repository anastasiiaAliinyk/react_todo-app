import React, { useState, useRef } from 'react';
import classNames from 'classnames';

import { deleteTodo, updateCompletedStatus, updateTitle } from './api/api';

export const TodoItem = ({ todo, deleteItem, setStatus, setNewTitle }) => {
  const [checked, setChecked] = useState(todo.completed);
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(todo.title);

  const inputEl = useRef(null);

  const onDeleteHandler = (todoId) => {
  deleteTodo(todoId)
    .then(todo => deleteItem(todo.id));
  } 

  const setStatusCompleted = (id, event) => {
    setChecked(event.target.checked);
    updateCompletedStatus(id, event.target.checked)
      .catch(() => {
        setChecked(!event.target.checked);
      });
    setStatus(id, event.target.checked);
  }

  const onEdit = () => {
    setEditing(true);

    setTimeout(() => {
      inputEl.current.focus();
    });
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setEditing(false);
    setValue(todo.title);
    updateTitle(todo.id, value);
    setNewTitle(todo.id, value)
  }

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <li
      className={classNames(
        { completed: todo.completed, editing },
      )}
      
    >
    <div className="view">
      <input 
        type="checkbox" 
        className="toggle" 
        checked={checked}
        onChange={(event) => setStatusCompleted(todo.id, event)}
      />
      <label>{todo.title}</label>
      <button 
        type="button" 
        className="destroy" 
        onClick={() => onDeleteHandler(todo.id)}
      />
      <button 
        type="button" 
        className="editInput"
        title="Edit title" 
        onClick={onEdit}
      /> 
    </div>
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        className="edit"
        value={value}
        onChange={onChange}
        ref={inputEl}
        onBlur={() => setEditing(false)}
      />
    </form>
  </li>
  )
}
