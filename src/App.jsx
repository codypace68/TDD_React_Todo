/* eslint-disable react/prop-types */

import TodoListContainer from "./components/todoListContainer";

function App() {
  return (
    <>
      <h1>TDD React Todo</h1>
      <div data-testid="todo-container">
        <TodoListContainer />
        <TodoListContainer />
      </div>
    </>
  );
}

export default App;
