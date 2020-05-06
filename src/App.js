import React from 'react';
import './App.css';
import TodoItem from "./TodoItem"
import todosData from "./todosData"

function App() {

  const todosComponents = todosData.map(todo => <TodoItem key={todo.key} todo={todo} />)

  return (
    <div className="todo-list">
      {todosComponents}
    </div>
  );
}

export default App;
