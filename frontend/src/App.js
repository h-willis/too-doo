import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewTodo from './NewTodo';
import TodoItem from './TodoItem';
import './styles.css'

const DEBUG = true;

function App() {
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    try {
      const response = await axios.get('http://localhost:5000/api/todos');

      if (DEBUG) {
        console.log(`getTodos(): ${JSON.stringify(response, null, 2)}`);
      }

      setTodos(response.data);

    } catch (e) {
      console.log('We got an issue...');
      console.dir(e);
    }

  }

  useEffect(() => {
    getTodos();
  }, []);

  async function createNewTodo(todo) {
    try {
      const response = await axios.post('http://localhost:5000/api/todos', todo);

      if (DEBUG) {
        console.log(`createNewTodo(): ${JSON.stringify(response, null, 2)}`);
      }
    } catch (e) {
      console.log('Create new todo got an issue');
      console.dir(e);
    }

    getTodos();
  }

  function toggleComplete(id) {
    console.log(`id: ${id}`);
    setTodos(todos.map(todo =>
      todo._id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }

  console.dir(todos);

  return (
    <div>
      <NewTodo createNewTodo={createNewTodo} />
      {todos.length === 0 ? <h1>Loading...</h1> : todos.map((todo, idx) => {
        return (<TodoItem todo={todo} key={idx} onClick={toggleComplete} />);
      })}
    </div>
  );
}

export default App;
