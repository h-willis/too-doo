import React from 'react'

function TodoItem({ todo, onClick, handleDelete }) {
  function _handleDelete(e) {
    e.stopPropagation();
    handleDelete(todo._id);
  }

  return (<>
    <div className={todo.completed ? 'complete' : ''} onClick={() => onClick(todo._id)}>
      <h1>{todo.title}</h1>
      <span><button onClick={(e) => _handleDelete(e)}>X</button></span>
      <h4>{todo.description}</h4>
      <span>
        <p>{todo.completed ? "Done" : ""}</p>
      </span>
    </div>
  </>);
}

export default TodoItem;