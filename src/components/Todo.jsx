import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { text: input.trim(), completed: false }]);
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
    <main className="todo-app">
      <section className="todo-card" aria-label="To-do list application">
        <header className="todo-header">
          <span className="todo-icon" aria-hidden="true">
            ✓
          </span>
          <div className="todo-title">
            <h1>To-Do List</h1>
            <p>Keep track of your day with a simple, focused list.</p>
          </div>
        </header>

        <div className="todo-input-section">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTodo();
            }}
            placeholder="Add your task"
            aria-label="Add your task"
          />
          <button onClick={addTodo} disabled={!input.trim()}>
            ADD +
          </button>
        </div>

        {todos.length === 0 ? (
          <p className="todo-empty">No tasks yet. Add your first task above.</p>
        ) : (
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <li key={`${todo.text}-${index}`} className="todo-item">
                <button
                  type="button"
                  className={`todo-task${todo.completed ? " completed" : ""}`}
                  onClick={() => toggleTodo(index)}
                >
                  {todo.text}
                </button>
                <button
                  type="button"
                  className="todo-delete"
                  onClick={() => deleteTodo(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};

export default Todo;
