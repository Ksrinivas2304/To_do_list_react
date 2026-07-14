# Codebase summary (To-Do List React)

## Overview
This repository is a small Vite + React single-page app that renders a client-side to-do list. The app is mounted from `src/main.jsx` and the top-level component is `src/App.jsx`, which currently renders the to-do UI from `src/components/Todo.jsx`.

## Repository structure
- `index.html` — Vite entry HTML that provides the `#root` mount point and loads `/src/main.jsx`.
- `vite.config.js` — Vite configuration (React plugin, dev server host/port).
- `package.json` — Build/dev scripts and React/Vite dependencies.
- `src/main.jsx` — ReactDOM root creation and rendering of `<App />`.
- `src/App.jsx` — App wrapper component; renders the to-do component.
- `src/components/` — UI components for the to-do list.
  - `src/components/Todo.jsx` — Main to-do list component (add, toggle, delete) using React state.

> Note: This workspace snapshot does not include `src/index.css`, and there are no CSS files present. Styling appears to be mostly inline in `Todo.jsx`.

## Vite/React entry points
### `index.html`
Defines the HTML shell:
- `<div id="root"></div>` for React mounting
- `<script type="module" src="/src/main.jsx"></script>` to start the app

### `src/main.jsx`
- Imports React and ReactDOM
- Creates the root with `ReactDOM.createRoot(document.getElementById("root"))`
- Renders `<App />` inside `React.StrictMode`

### `src/App.jsx`
- Imports `Todo` from `./components/Todo`
- Returns `<Todo />`

## To-do UI component (`src/components/Todo.jsx`)
`Todo` maintains in-memory state and provides the primary interactions:
- State:
  - `todos`: array of `{ text, completed }`
  - `input`: current text input
- Add:
  - `addTodo()` appends a new `{ text: input, completed: false }` after trimming and validating non-empty input
  - clears the input afterward
- Toggle completion:
  - `toggleTodo(index)` flips `completed` for the selected item
  - item text is rendered with a `line-through` style when completed
- Delete:
  - `deleteTodo(index)` removes the selected item

The component renders (via class names):
- `.todo-app` wrapper
- `.todo-header` title row (`To-Do List`) with a decorative checkmark icon
- `.todo-input-section` with an `<input>` and an `ADD +` button
- `.todo-list` with `.todo-item` rows, each having a clickable text span and a `Delete` button

## Styling
- `src/index.css` is referenced in the original documentation request, but it is not present in this repo snapshot.
- Current visual styling is largely done with class names and inline styles inside `Todo.jsx` (notably the header icon styling).

## Key config/docs files in this repo
- `vite.config.js`:
  - uses `@vitejs/plugin-react`
  - dev server binds to `0.0.0.0`, port `5173`, and allows all hosts
- `package.json`:
  - scripts: `dev` (`vite`), `build` (`vite build`), `preview` (`vite preview`)

