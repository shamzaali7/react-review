import React from 'react';

function ToDoItem({todo, setTodo}){
    function handleClick(){
        setTodo({
            completed: true
        })
    }

    return(
        <div>
            <span onClick={handleClick}>{todo.todo}</span>
        </div>
    )
}

export default ToDoItem;