import React, { useState } from 'react'

function NewTodo({ createNewTodo }) {
  const [todoTitle, setTodoTitle] = useState('');
  function handleTitleChange({ target }) {
    setTodoTitle(target.value);
  }

  // handles decription box disappearing if 'New todo' is typed after 
  // can also do some fancy styling if its been clicked
  // TODO actually make this work
  const [inputClicked, setInputClicked] = useState(false);
  function handleInputClick() {
    if (todoTitle === 'New todo') {
      setTodoTitle('');
    }
    setInputClicked(true);
  }

  const [todoDescription, setTodoDescription] = useState("");
  function handleDescChange({ target }) {
    setTodoDescription(target.value);
  }

  function handleCreateNewTodo() {
    const todo = {
      title: `${todoTitle}`,
      description: `${todoDescription}`,
      completed: false,
      dateCreated: new Date().toISOString(),
    }

    createNewTodo(todo);
    setTodoTitle('');
    setTodoDescription('');
  }


  return (
    <div className="newTodo">
      <div>
        <input type="text" value={todoTitle} onChange={handleTitleChange} onClick={handleInputClick} placeholder={'New todo'} />
        <button onClick={handleCreateNewTodo}>Add</button>
      </div>
      {(todoTitle.length > 0) && <textarea rows="10" cols="50" onChange={handleDescChange} value={todoDescription}>Enter a description...</textarea>}
    </div>
  )
}

export default NewTodo