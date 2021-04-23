import React, { useState, useRef } from 'react';
import classNames from 'classnames';

import { deleteTodo, updateCompletedStatus } from './api/api';

export const TodoItem = ({ todo, deleteItem, setStatus }) => {
  const [checked, setChecked] = useState(todo.completed);

  //const inputEl = useRef(null);

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
    setStatus(id, event.target.checked)
  }

  return (
    <li
      className={classNames(
        //"editing",
        { completed: todo.completed },
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
        onClick={() => console.log('fdsdfsd')}
      /> 
    </div>
    <input type="text" className="edit" placeholder="fdsfdf"/>
  </li>
  )
}

// function TextInputWithFocusButton() {
//   const inputEl = useRef(null);
//   const onButtonClick = () => {
//     // `current` указывает на смонтированный элемент `input`
//     inputEl.current.focus();
//   };
//   return (
//     <>
//       <input ref={inputEl} type="text" />
//       <button onClick={onButtonClick}>Установить фокус на поле ввода</button>
//     </>
//   );
// }
