import React from 'react';
import { initializeApp } from 'firebase/app'
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <TodoList />
    </div>
  );
}

export default App;
