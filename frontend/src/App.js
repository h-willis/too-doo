import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewTodo from './NewTodo';
import TodoItem from './TodoItem';
import './styles.css'
import SideBar from './SideBar';

const DEBUG = true;
const API = 'http://localhost:5000/api/'

function App() {
  // TODO implement all todo logic inside useReducer...
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    try {
      const response = await axios.get(`${API}todos`);

      if (DEBUG) {
        console.log(`getTodos(): ${JSON.stringify(response, null, 2)}`);
      }

      // TODO order by date, completed, 

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
      const response = await axios.post(`${API}todos`, todo);

      if (DEBUG) {
        console.log(`createNewTodo(): ${JSON.stringify(response, null, 2)}`);
      }
    } catch (e) {
      console.log('Create new todo got an issue');
      console.dir(e);
    }

    getTodos();
  }

  const [idToUpdate, setIdToUpdate] = useState(null);
  async function updateTodo(id) {
    const updatedTodo = todos.find((todo) => todo._id === id);
    try {
      const response = await axios.put(`${API}todos`, updatedTodo);

    } catch (e) {
      console.log(`Problem udpating resource`);
      console.dir(e);
    }
  }

  useEffect(() => {
    if (idToUpdate) {
      updateTodo(idToUpdate);
    }
    setIdToUpdate(null);
  }, [idToUpdate]);

  async function toggleComplete(id) {
    console.log(`id: ${id}`);

    setTodos(todos.map(todo =>
      todo._id === id ? { ...todo, completed: !todo.completed } : todo
    ));

    setIdToUpdate(id);
  }

  const [idToDelete, setIdToDelete] = useState(null);
  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo._id !== id));
    setIdToDelete(id);
  }

  // TODO this wont work as delete requests typically dont use bodys
  async function deleteTodo(id) {
    console.log(`deleting todo: ${id}`);
    try {
      const response = await axios.delete(`${API}todos/${id}`);

    } catch (e) {
      console.log(`Problem deleting resource`);
      console.dir(e);
    }
  }

  useEffect(() => {
    if (idToDelete) {
      deleteTodo(idToDelete);
    }
    setIdToDelete(null);
  }, [idToDelete]);

  const [outlines, setOutlines] = useState(false);
  function toggleOutlines() {
    const debugStyle = document.getElementById('DEBUG_STYLE');

    if (outlines) {
      debugStyle.textContent = `
    * {
      outline: 1px solid red;
    }`;
    } else {
      debugStyle.textContent = '';
    }


    setOutlines(!outlines);
  }

  return (
    <div>
      <SideBar />
      <div className="mainContent">
        <h1>Do it</h1>
        <NewTodo createNewTodo={createNewTodo} />
        {/* TODO fix if no todos vs todos haaven't loaded */}
        {todos.length === 0 ? <h1>Loading...</h1> : todos.map((todo, idx) => {
          return (<TodoItem todo={todo} key={idx} onClick={toggleComplete} handleDelete={handleDelete} />);
        })}
      </div>
      <div className='DEBUG'>
        <button onClick={toggleOutlines}>DEBUG</button>
      </div>
    </div>
  );
}

export default App;
