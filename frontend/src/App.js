import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DEBUG = true;

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      try {
        const response = await axios.get('http://localhost:5000/api/todos');

        if (DEBUG) {
          console.log(`DATA: ${JSON.stringify(response, null, 2)}`);
        }

        setTodos(response.data);

      } catch (e) {
        console.log('We got an issue...');
        console.dir(e);
      }

    }

    getTodos();
  }, []);

  return (
    <div>
      {todos.length === 0 ? <h1>Loading...</h1> : todos.map((todo) => {
        return (
          <>
            <h1>{todo.title}</h1>
            <span>
              <p>{todo.completed ? "Done" : ""}</p>
            </span>
          </>
        );
      })}
    </div>
  );
}

export default App;
