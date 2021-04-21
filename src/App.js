import React, { useEffect, useState } from 'react';
import { TodoApp } from './TodoApp';
import { TodoList } from './TodoList';
import { getTodos } from './api/api';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos()
      .then(setTodos);
  }, []);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodoApp />
      </header>

      <section className="main">
        <input type="checkbox" id="toggle-all" className="toggle-all" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList todos={todos} />
      </section>

      <footer className="footer">
        <span className="todo-count">
          3 items left
        </span>

        <ul className="filters">
          <li>
            <a href="#/" className="selected">All</a>
          </li>

          <li>
            <a href="#/active">Active</a>
          </li>

          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>

        <button type="button" className="clear-completed">
          Clear completed
        </button>
      </footer>
    </section>
  );
}

export default App;
