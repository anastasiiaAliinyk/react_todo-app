import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <li
        key={todo.id}
        className={classNames(
          { completed: todo.completed },
        )}
      >
        <div className="view">
          <input type="checkbox" className="toggle" />
          <label>{todo.title}</label>
          <button type="button" className="destroy" />
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
);

TodoList.defaultProp = {
  completed: false,
  title: 'No title',
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool,
      title: PropTypes.string,
    }),
  ).isRequired,
};
