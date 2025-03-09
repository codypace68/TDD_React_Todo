/* eslint-disable no-undef */
/* jest-environment-jsdom */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "./todoList";

test("Should show 'no todos' message when there are no todos", () => {
  render(<TodoList />);
  expect(screen.getByText("No todos")).toBeInTheDocument();
});

test("Should render a list of todos", () => {
  render(<TodoList todos={[{ name: "todo1" }, { name: "todo2" }]} />);
  expect(screen.getByText("todo1")).toBeInTheDocument();
});

test("Should have a name displayed for each todo", () => {
  render(<TodoList todos={[{ name: "todo1" }, { name: "todo2" }]} />);

  expect(screen.getByText("todo1")).toBeInTheDocument();
  expect(screen.getByText("todo2")).toBeInTheDocument();
});

test("Should have a description displayed for each todo", () => {
  render(
    <TodoList
      todos={[
        { name: "todo1", description: "todo 1 description" },
        { name: "todo2", description: "todo 2 description" },
      ]}
    />
  );

  expect(screen.getByText("todo 1 description")).toBeInTheDocument();
  expect(screen.getByText("todo 2 description")).toBeInTheDocument();
});

test("Should have a due date displayed for each todo", () => {
  render(
    <TodoList
      todos={[
        {
          name: "todo1",
          description: "todo 1 description",
          dueDate: "2021-12-31T00:00:00.000Z",
        },
        {
          name: "todo2",
          description: "todo 2 description",
          dueDate: "2021-12-31T00:00:00.000Z",
        },
      ]}
    />
  );

  expect(screen.getAllByText("2021-12-31").length).toBe(2);
});

test("Should have a priority displayed for each todo", () => {
  render(
    <TodoList
      todos={[
        {
          name: "todo1",
          description: "todo 1 description",
          dueDate: "2021-12-31T00:00:00.000Z",
          priority: "high",
        },
        {
          name: "todo2",
          description: "todo 2 description",
          dueDate: "2021-12-31T00:00:00.000Z",
          priority: "low",
        },
      ]}
    />
  );

  expect(screen.getByText("high")).toBeInTheDocument();
  expect(screen.getByText("low")).toBeInTheDocument();
});
