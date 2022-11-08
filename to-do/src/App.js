import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList'


function App() {
  const [todo, setTodo] = useState({
    todo: " ",
    completed: false
  });
  const [todos, setTodos] = useState([])

  return (
    <div>
      <ToDoForm todo={todo} todos={todos} setTodos={setTodos} setTodo={setTodo}/>
      <ToDoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
