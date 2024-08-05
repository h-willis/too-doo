import React from 'react'

function TodoItem({ todo, onClick, handleDelete }) {
  function _handleDelete(e) {
    e.stopPropagation();
    handleDelete(todo._id);
  }

  return (<>
    <div className={`todoItem ${todo.completed ? 'complete' : ''}`} onClick={() => onClick(todo._id)}>
      <div className='todoHeader'>
        <h2>{todo.title}</h2>
        {todo.dueDate === null ? null : <p>{todo.dueDate.toDateString()}</p>}
        <button onClick={(e) => _handleDelete(e)}>X</button>
      </div>
      <p>{todo.description}</p>
      <p>{todo.completed ? "Done" : ""}</p>
    </div>
  </>);
}

export default TodoItem;