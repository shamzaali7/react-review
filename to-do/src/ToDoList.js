import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({setTodo, setTodos, todos}){
    return(
                <div >
                    {todos.map((element, id)=> {
                    return (
                        <div className="singles">
                            <span className="boxTodo">
                            <ToDoItem key={id} id={id} todos={todos} setTodos={setTodos} todo={element} setTodo={setTodo}/>
                            </span>
                        </div>
                    )})}
                </div>
    )
}

export default ToDoList;