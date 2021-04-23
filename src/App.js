import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { TodoApp } from './TodoApp';
import { TodoList } from './TodoList';
import { getTodos, deleteTodo } from './api/api';
import { Link } from './Link';

function App() {
  const [todos, setTodos] = useState(null);
  const [notCompletedTodosCount, setCount] =  useState('');
  const [filteredBy, setFilteredBy] =  useState('all');
 
  useEffect(() => {
    getTodos()
      .then(setTodos);
  }, []);

  const filterTodosList = useCallback ((filterBy) => {
    switch(filterBy) {
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'active':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }, [todos]);
 
  const filteredTodos = useMemo(() => {
    return filterTodosList(filteredBy)
  }, [filteredBy, filterTodosList])

  useEffect(() => {
    if (todos === null) {
      return;
    }

    const count = todos.filter(todo => !todo.completed).length;
    setCount(count);
  }, [todos])

  const addTodo = useCallback((todo) => {
    setTodos(todos => [...todos, todo]);
  }, []);

  const deleteTodos = useCallback((todoId) => {
    setTodos(todos => todos.filter(todo => todo.id !== todoId));
  }, []);

  if (filteredTodos === null) {
    return (
      <div className="loading">Loading...</div>
    )
  }

  const setStatus = (todoId, completed) => {
    setTodos(todos => todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = completed;
      }
      return todo;
    }))
  }

  const setNewTitle = (todoId, title) => {
    setTodos(todos => todos.map((todo) => {
      if (todo.id === todoId) {
        todo.title = title;
      }
      return todo;
    }))
  }

  const clearCompleted = () => {
    const completedItems = todos.filter(todo => todo.completed);

    for (const completedItem of completedItems) {
      deleteTodo(completedItem.id);
    }

    setTodos(todos => todos.filter(todo => !todo.completed));
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
        <TodoList 
          items={filteredTodos} 
          deleteItem={deleteTodos} 
          setStatus={setStatus}
          setNewTitle={setNewTitle}
        />
      </section>

      {todos.length > 0  &&
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
              filterTodos={setFilteredBy}
            />
          </li>
          <li>
          <Link 
              selectedFilter={filteredBy} 
              filterBy='active' 
              text='Active' 
              filterTodos={setFilteredBy}
            />
          </li>
          <li>
            <Link 
              selectedFilter={filteredBy} 
              filterBy='completed' 
              text='Completed' 
              filterTodos={setFilteredBy}
            />
          </li>
        </ul>

        {todos.some(todo => todo.completed) && 
          <button 
            type="button" 
            className="clear-completed"
            onClick={clearCompleted}
            >
            Clear completed
          </button>
        }
      </footer>
    }
    </section>
  );
}

export default App;
