import React from "react"

function TodoItem(prop) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={prop.todo.completed}/>
            <p>{prop.todo.text}</p>
        </div>
    )
}

export default TodoItem