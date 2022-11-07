import logo from './logo.svg';
import './App.css';
import React from 'react';
import Hello from './Hello'

function App() {
  const name = "hello";
  return (
    <div>
      <Hello name={name}/>
    </div>
  );
}

export default App;
