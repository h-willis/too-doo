import React, { useState } from 'react';
import DatePickerComp from './DatePickerComp';

function NewTodo({ createNewTodo }) {
  const [todoTitle, setTodoTitle] = useState('');
  function handleTitleChange({ target }) {
    if (todoTitle.length > 55) {
      return;
    }
    setTodoTitle(target.value);
  }

  const [todoDescription, setTodoDescription] = useState('');
  function handleDescChange({ target }) {
    setTodoDescription(target.value);
  }

  const [dueDate, setDueDate] = useState(null);
  function handleDatePick(date) {
    if (date) {
      setDueDate(date.toISOString());
    } else {
      setDueDate(date);
    }
  }

  function handleCreateNewTodo() {
    const todo = {
      title: `${todoTitle}`,
      description: `${todoDescription}`,
      completed: false,
      dateCreated: new Date().toISOString(),
      dueDate: `${dueDate}`
    }

    createNewTodo(todo);
    setTodoTitle('');
    setTodoDescription('');
    setDueDate(null);
  }


  return (
    <div className="newTodo">
      <div>
        <input type="text" value={todoTitle} onChange={handleTitleChange} placeholder={'New todo'} />
        <button onClick={handleCreateNewTodo}>Add</button>
      </div>
      {(todoTitle.length > 0) && (
        <>
          <DatePickerComp onChange={handleDatePick} selected={dueDate} />
          <textarea rows="10" cols="50" onChange={handleDescChange} value={todoDescription}>Enter a description...</textarea>
        </>
      )}
    </div>
  )
}

export default NewTodo;