import React from 'react';
import PropTypes from 'prop-types';

import { TodoItem } from './TodoItem';

export const TodoList = ({ items, deleteItem, setStatus }) => {
  const sortedTodosList = items.sort((previous, current) => current.id - previous.id);

  return (
    <ul className="todo-list">
      {sortedTodosList.map(todo => (
       <TodoItem 
        key={todo.id}
        todo={todo} 
        deleteItem={deleteItem} 
        setStatus={setStatus}
      />
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
