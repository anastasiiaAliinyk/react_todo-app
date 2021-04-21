import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { deleteTodo } from './api/api';

export const TodoList = ({ items, deleteItem }) => {
  const onDeleteHandler = (todoId) => {
    deleteTodo(todoId)
      .then(todo => deleteItem(todo.id));
  }

  const sortedTodosList = items.sort((previous, current) => current.id - previous.id);

  return (
    <ul className="todo-list">
      {sortedTodosList.map(todo => (
        <li
          key={todo.id}
          className={classNames(
            { completed: todo.completed },
          )}
        >
          <div className="view">
            <input type="checkbox" className="toggle" />
            <label>{todo.title}</label>
            <button 
              type="button" 
              className="destroy" 
              onClick={() => onDeleteHandler(todo.id)}
            />
          </div>
          <input type="text" className="edit" />
        </li>
      ))}

      {/*

      <li className="editing">
        <div className="view">
          <input type="checkbox" className="toggle" />
          <label>zxcvbnm</label>
          <button type="button" className="destroy" />
        </div>
        <input type="text" className="edit" />
      </li>

    */}
    </ul>
  )
};

TodoList.defaultProp = {
  completed: false,
  title: 'No title',
};

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool,
      title: PropTypes.string,
    }),
  ).isRequired,
  deleteItem: PropTypes.func.isRequired,
};
