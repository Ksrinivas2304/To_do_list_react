import React, { useState } from "react";

const initialTodos = [
  { text: "Complete the React refactor", completed: false },
  { text: "Review the updated layout", completed: true }
];

const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "24px",
  background:
    "linear-gradient(135deg, rgb(255, 247, 237) 0%, rgb(255, 255, 255) 45%, rgb(239, 246, 255) 100%)",
  boxSizing: "border-box"
};

const cardStyle = {
  width: "100%",
  maxWidth: "720px",
  backgroundColor: "#ffffff",
  borderRadius: "24px",
  padding: "32px",
  boxShadow: "0 20px 45px rgba(15, 23, 42, 0.12)",
  border: "1px solid rgba(226, 232, 240, 0.9)",
  boxSizing: "border-box"
};

const headerRowStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "8px",
  flexWrap: "wrap"
};

const titleStyle = {
  margin: 0,
  fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
  color: "#0f172a"
};

const subtitleStyle = {
  margin: "0 0 24px",
  color: "#475569",
  lineHeight: 1.6
};

const controlsStyle = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  marginBottom: "24px"
};

const inputStyle = {
  flex: "1 1 280px",
  minWidth: 0,
  padding: "14px 16px",
  borderRadius: "14px",
  border: "1px solid #cbd5e1",
  fontSize: "1rem",
  boxSizing: "border-box"
};

const addButtonStyle = {
  border: "none",
  borderRadius: "14px",
  padding: "14px 20px",
  backgroundColor: "#f97316",
  color: "#ffffff",
  fontWeight: 700,
  cursor: "pointer",
  whiteSpace: "nowrap"
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "12px"
};

const itemStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  padding: "14px 16px",
  borderRadius: "16px",
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  flexWrap: "wrap"
};

const taskButtonStyle = {
  border: "none",
  background: "transparent",
  padding: 0,
  fontSize: "1rem",
  color: "#0f172a",
  cursor: "pointer",
  textAlign: "left",
  flex: "1 1 220px"
};

const deleteButtonStyle = {
  border: "none",
  borderRadius: "10px",
  padding: "10px 14px",
  backgroundColor: "#fee2e2",
  color: "#b91c1c",
  fontWeight: 600,
  cursor: "pointer"
};

const emptyStateStyle = {
  margin: 0,
  padding: "18px 16px",
  borderRadius: "16px",
  backgroundColor: "#f8fafc",
  color: "#64748b",
  border: "1px dashed #cbd5e1"
};

const Todo = () => {
  const [todos, setTodos] = useState(initialTodos);
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
    <main style={containerStyle}>
      <section style={cardStyle} aria-label="Todo application">
        <header style={{ marginBottom: "12px" }}>
          <div style={headerRowStyle}>
            <span
              className="todo-icon"
              aria-hidden="true"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                backgroundColor: "#f97316",
                color: "#ffffff",
                fontSize: "22px",
                fontWeight: "700"
              }}
            >
              ✓
            </span>
            <h1 style={titleStyle}>To-Do List</h1>
          </div>
          <p style={subtitleStyle}>
            Capture tasks, stay focused, and clear items with a simple daily workflow.
          </p>
        </header>

        <div style={controlsStyle}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTodo();
            }}
            placeholder="Add your task"
            aria-label="Add your task"
            style={inputStyle}
          />
          <button type="button" onClick={addTodo} style={addButtonStyle}>
            ADD +
          </button>
        </div>

        {todos.length === 0 ? (
          <p style={emptyStateStyle}>No tasks yet. Add your first task to get started.</p>
        ) : (
          <ul style={listStyle}>
            {todos.map((todo, index) => (
              <li key={`${todo.text}-${index}`} style={itemStyle}>
                <button
                  type="button"
                  onClick={() => toggleTodo(index)}
                  style={{
                    ...taskButtonStyle,
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: todo.completed ? "#64748b" : "#0f172a"
                  }}
                  aria-label={`Mark ${todo.text} as ${todo.completed ? "incomplete" : "complete"}`}
                >
                  {todo.text}
                </button>
                <button
                  type="button"
                  onClick={() => deleteTodo(index)}
                  style={deleteButtonStyle}
                  aria-label={`Delete ${todo.text}`}
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
