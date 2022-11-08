import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({todos, setTodo}){
    return(
                <div >
                    {todos.map(element => {
                    return (
                        <div className="singles">
                            <span className="boxTodo">
                            <ToDoItem todo={element} setTodo={setTodo}/>
                            </span>
                            <span className="boxMark">Mark as Complete</span>
                        </div>
                    )})}
                </div>
    )
}

export default ToDoList;