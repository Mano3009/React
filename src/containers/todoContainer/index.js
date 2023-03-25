import React ,{useState}from 'react';
import AddTodo from '../../components/addTodo';
import Todo from '../../components/todoList';
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
    const handleCheckboxChange=(id)=>{
        const newTodoList=todos.map(todo=>{
            if(todo.id===id)
         return {...todo,done:!todo.done}
        return todo;
        })
        setTodos(newTodoList)
    }
  
    
    return (<div style={{ margin: 20 }}>
        <h4 align="center"> Todo Application</h4>
        {todos.length>0?todos.map((todo)=><Todo todo={todo} removeTodo={handleRemoveTodo}
        handleChange={handleCheckboxChange} />)
        :<p align ="center">no todo left</p>}
      <AddTodo addTodo={handleAddTodo}/>  
    </div>)
}

export default TodoContainer