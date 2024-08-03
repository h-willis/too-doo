import React from 'react'

function TodoItem({ todo, onClick }) {
  return (<>
    <div className={todo.completed ? 'complete' : ''} onClick={() => onClick(todo._id)}>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
      <span>
        <p>{todo.completed ? "Done" : ""}</p>
      </span>
    </div>
  </>);
}

export default TodoItem;