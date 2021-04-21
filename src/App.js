import React, { useCallback, useEffect, useState } from 'react';
import { TodoApp } from './TodoApp';
import { TodoList } from './TodoList';
import { getTodos } from './api/api';
import { Link } from './Link';

function App() {
  const [todos, setTodos] = useState(null);
  const [filteredTodos, setFilteredTodos] = useState(null);
  const [notCompletedTodosCount, setCount] =  useState('');
  const [filteredBy, setFilteredBy] =  useState('all');

  useEffect(() => {
    getTodos()
      .then(setTodos);
  }, []);

  useEffect(() => {
    if (todos === null) {
      return;
    }
    setFilteredTodos(todos);

    const count = todos.filter(todo => !todo.completed).length;
    setCount(count);
  }, [todos])

  const addTodo = useCallback((todo) => {
    setTodos(todos => [...todos, todo]);
  }, []);

  const deleteTodo = useCallback((todoId) => {
    setTodos(todos => todos.filter(todo => todo.id !== todoId));
  }, []);

  const filterTodosList = (filterBy) => {
    setFilteredBy(filterBy);

    switch(filterBy) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed));
        break;
      case 'active':
        setFilteredTodos(todos.filter(todo => !todo.completed));
        break;
      default:
        setFilteredTodos(todos);
        return;
    }
  }

  if (filteredTodos === null) {
    return (
      <div className="loading">Loading...</div>
    )
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodoApp addTodo={addTodo} />
      </header>

      <section className="main">
        <input type="checkbox" id="toggle-all" className="toggle-all" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList items={filteredTodos} deleteItem={deleteTodo} />
      </section>

      <footer className="footer">
        <span className="todo-count">
          {notCompletedTodosCount} items left
        </span>

        <ul className="filters">
          <li>
            <Link 
              selectedFilter={filteredBy} 
              filterBy='all' 
              text='All' 
              filterTodos={filterTodosList}
            />
          </li>
          <li>
          <Link 
              selectedFilter={filteredBy} 
              filterBy='active' 
              text='Active' 
              filterTodos={filterTodosList}
            />
          </li>
          <li>
            <Link 
              selectedFilter={filteredBy} 
              filterBy='completed' 
              text='Completed' 
              filterTodos={filterTodosList}
            />
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


/* <a 
    href="#/" 
    className={classNames(
      {selected: filteredBy === 'all'}
    )}
    onClick={() => filterTodosList('all')}
  >
    All
  </a> */

/* <a 
    href="#/active" 
    onClick={() => filterTodosList('active')}
    className={classNames(
      {selected: filteredBy === 'active'}
    )}
  >
    Active
  </a> */

/* <a 
    href="#/completed" 
    onClick={() => filterTodosList('completed')}
    className={classNames(
      {selected: filteredBy === 'completed'}
    )}
  >
    Completed
  </a> */
