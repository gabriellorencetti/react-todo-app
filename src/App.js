import React from 'react';
import './App.css';
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: todosData
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState((prevState) => {
        const updatedTodos = prevState.todos.map(todo => {
          if(todo.id === id){
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo
        })
        return {
          todos: updatedTodos
        }
    })
  }

  render() {

    const todoItems = this.state.todos.map(todo => <TodoItem key={todo.id} todo={todo} handleChange={this.handleChange}/>)

    return (
      <div className="todo-list">
        <header><h1>To Do List</h1></header>
        {todoItems}
      </div>
    )
  }  
}

export default App;
