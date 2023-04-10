import React ,{useState}from 'react';
import AddTodo from './addTodo';
import Todo from './todoList';
const todoList=[
    {id:1,title: 'Learn React', done:true},
    {id:2,title: 'Create a todo Application', done:false}
]
const TodoContainer = () => {
    const [todos,setTodos]=useState(todoList)
    const handleAddTodo=(newTodo)=>{
        const newTodoList=[...todos,newTodo]
        setTodos(newTodoList)
    }
    const handleRemoveTodo=(id)=>{
        const newTodoList=todos.filter(todo=>todo.id!==id)
        setTodos(newTodoList)
    }
    const handleCheckboxChange=(changedItem)=>{
        const newTodoList = todos.map(todo=>{
            if(todo.id === changedItem.id)
         return changedItem
        return todo;
        })
        setTodos(newTodoList)
    }
  
    
    return (<div style={{ margin: 20 }}>
        <h1 className="todolist-title">Todo Application</h1>
        <AddTodo addTodo={handleAddTodo}/>
        <div className='todolist-contents'>
            {todos.length>0?todos.map((todo)=><Todo todo={todo} removeTodo={handleRemoveTodo}
            handleChange={handleCheckboxChange} />)
            :<p align ="center">no todo left</p>}
      </div>
    </div>)
}

export default TodoContainer
