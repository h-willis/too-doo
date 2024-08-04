import React from 'react'

function TodoItem({ todo, onClick, handleDelete }) {
  function _handleDelete(e) {
    e.stopPropagation();
    handleDelete(todo._id);
  }

  return (<>
    <div className={`todoItem ${todo.completed ? 'complete' : ''}`} onClick={() => onClick(todo._id)}>
      <div className='todoHeader'>
        <h1>{todo.title}</h1>
        <button onClick={(e) => _handleDelete(e)}>X</button>
      </div>
      <h4>{todo.description}</h4>
      <p>{todo.completed ? "Done" : ""}</p>
    </div>
  </>);
}

export default TodoItem;