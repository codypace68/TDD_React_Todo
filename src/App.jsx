/* eslint-disable react/prop-types */

function App({ todos = [] }) {
  return (
    <>
      <h1>TDD React Todo</h1>
      <div data-testid="todo-container">
        <div data-testid="add-todo-container">
          <button data-testid="add-todo-btn">Add Todo</button>
        </div>
        <div data-testid="todo-list">
          {todos.length === 0 && <p>No todos</p>}
          {todos.map((todo) => (
            <div key={todo.name}>
              <h2>{todo.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
