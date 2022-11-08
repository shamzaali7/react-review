import React from 'react';

function ToDoItem({todo, todos, id, setTodos}){

    function handleClick(){
        console.log(todos)
        todos[id]={todo: todo.todo, completed: !todo.completed}
        setTodos([...todos]);
    }

    return(
        <div >
            <span>{todo.todo}</span>
            <span onClick={handleClick} className={todo.completed ? "boxMark complete" : "boxMark"}>Mark as Complete</span>
        </div>
    )
}

export default ToDoItem;