import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-app">
      <div className="todo-header">
        <div
          className="todo-icon"
          aria-hidden="true"
          style={{
            width: "40px",
            height: "40px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            background: "#f97316",
            color: "#fff",
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          ✓
        </div>
        <h1>To-Do List</h1>
      </div>

      <div className="todo-input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add your task"
        />
        <button onClick={addTodo}>ADD +</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span
              onClick={() => toggleTodo(index)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
