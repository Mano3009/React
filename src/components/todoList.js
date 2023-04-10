import React, { useState } from 'react'

function Todo({todo, removeTodo, handleChange}) {
    console.log(todo)

    const [isEditing, setIsEditing] = useState(false);

    function handleCheckboxChange() {
        if (todo.done)
            return null;
        const newTodo = {...todo, done: !todo.done}
        handleChange(newTodo)
    }

    function handleTitleChange(e) {
        console.log(e)
        const newTodo = {...todo, title: e.target.value}
        handleChange(newTodo)
    }

    function handleEditClick(e) {
        setIsEditing(true);
    }

    function handleDoneClick(e) {
        setIsEditing(false);
    }
    

    return(<div className="todo-item">
        <input type="checkbox"
            className="todo-item-checkbox"
            checked={todo.done}
            onChange={handleCheckboxChange}/>
        {isEditing ?
            <input className="todo-item-title-field" type="text" value={todo.title} onChange={handleTitleChange} /> : 
            <span className="todo-item-title" style={todo.done?{textDecoration:"line-through"}:null}>{todo.title}</span>
        }
        {isEditing ? <button onClick={handleDoneClick}>done</button>
        : <button onClick={handleEditClick}>edit</button>}
        <button className="todo-item-delete" 
            onClick={()=>{removeTodo(todo.id)}}>
            X</button>           
    </div>)
}

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    setTodos([...todos, { text: inputValue, priority: new Date() }]);
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text} - {todo.priority.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo
