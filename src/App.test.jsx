/* eslint-disable no-undef */
/* jest-environment-jsdom */
import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("Should render a title", () => {
  render(<App />);
  expect(screen.getByText("TDD React Todo")).toBeInTheDocument();
});

test("Should render a box to contain todos and the add todo btn", () => {
  render(<App />);
  expect(screen.getByTestId("todo-container")).toBeInTheDocument();
});

test.skip("Should render a form to add a todo", () => {
  expect(false).toBe(true);
});

test.skip("Should allow you to set a todo name", () => {
  expect(false).toBe(true);
});

test.skip("Should allow you to set a todo description", () => {
  expect(false).toBe(true);
});

test.skip("Should allow you to set a todo due date", () => {
  expect(false).toBe(true);
});

test.skip("Should allow you to set a todo priority", () => {
  expect(false).toBe(true);
});

test.skip("Should allow you to add a todo", () => {
  expect(false).toBe(true);
});

test.skip("Should validate that todo name is not empty", () => {
  expect(false).toBe(true);
});

test.skip("Should validate that todo description is not empty", () => {
  expect(false).toBe(true);
});

test.skip("Should display form when user click on AddTodoButton", () => {
  expect(false).toBe(true);
});

test.skip("Should render edit button in each todo", () => {
  expect(false).toBe(true);
});

test.skip("Should render delete button in each todo", () => {
  expect(false).toBe(true);
});

test.skip("Should display a confirm dialog before deleting a todo", () => {
  expect(false).toBe(true);
});

test.skip("Should get a list of todos from the server when page loads", () => {
  expect(false).toBe(true);
});

test.skip("Should show a loading spinner while fetching todos", () => {
  expect(false).toBe(true);
});

test.skip("Should show an error message if fetching todos fails", () => {
  expect(false).toBe(true);
});
