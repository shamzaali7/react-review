import React from 'react';
import ToDoItem from './ToDoItem'

function ToDoForm({todo, setTodo, todos, setTodos}){
    function handleChange(e){
        setTodo({
            todo: e.target.value,
            completed: false
        })
    }

    function handleSave(e){
        e.preventDefault()
        setTodos([...todos, todo])
    }

    return(
        <div className="head1"><span className="hello">To Do: </span>
            <input type="text" value={todo.todo} className="bod" onChange={handleChange}></input>
            <button className="save" onClick={handleSave}>Save</button>
        </div>
    )
}

export default ToDoForm;