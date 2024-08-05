import React from 'react'

function TodoItem({ todo, onClick, handleDelete }) {
  function _handleDelete(e) {
    e.stopPropagation();
    handleDelete(todo._id);
  }

  // function handleUpdate() {

  // }

  return (<>
    <div className={`todoItem ${todo.completed ? 'complete' : ''}`} onClick={() => onClick(todo._id)}>
      <div className='todoHeader'>
        <h2>{todo.title}</h2>
        {/* <button id="update" onClick={handleUpdate}>...</button> */}
        <button onClick={(e) => _handleDelete(e)}>X</button>
      </div>
      <p>{todo.description}</p>
      <p>{todo.completed ? "Done" : ""}</p>
    </div>
  </>);
}

export default TodoItem;