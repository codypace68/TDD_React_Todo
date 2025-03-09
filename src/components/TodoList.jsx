import PropTypes from "prop-types";

function TodoList({ todos = [] }) {
  return todos.length === 0 ? (
    <p>No todos</p>
  ) : (
    todos.map((todo) => (
      <div key={todo.name}>
        <h2>{todo?.name || "N/A"}</h2>
        <p>{todo?.description || "N/A"}</p>
        <p>{todo?.dueDate?.split("T")?.[0] || "N/A"}</p>
        <p>{todo?.priority || "N/A"}</p>
      </div>
    ))
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      dueDate: PropTypes.string,
      priority: PropTypes.string,
    })
  ).isRequired,
};

export default TodoList;
