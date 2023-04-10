import React,{useState} from 'react'

function AddTodo({addTodo}) {
    const [title, setTitle] = useState("Learn React")
    function handleSubmit(e) {
        e.preventDefault()
        const newTodo= {id: Math.random(), title: title, done: false}
        addTodo(newTodo)
        setTitle("")
    }
    return (
        <form onSubmit={handleSubmit} className="add-todo-block">
            <input type="text" 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                placeholder="Enter Something here" 
                required
                className="add-todo-field"/>
            <input type="submit" value="Add task" className="add-todo-button"/>
        </form>
    )
}

export default AddTodo;
