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

test("Should render a box to hold the add todo button", () => {
  render(<App />);
  expect(screen.getByTestId("add-todo-container")).toBeInTheDocument();
});

test("Should render a box to show todos", () => {
  render(<App />);
  expect(screen.getByTestId("todo-list")).toBeInTheDocument();
});

test("Should render add todo button seperate from the todo list", () => {
  render(<App />);
  expect(screen.getByTestId("add-todo-btn")).toBeInTheDocument();
});

test("Should show 'no todos' message when there are no todos", () => {
  render(<App />);
  expect(screen.getByText("No todos")).toBeInTheDocument();
});

test("Should render a list of todos", () => {
  render(<App todos={[{ name: "todo1" }, { name: "todo2" }]} />);
  expect(screen.getByText("todo1")).toBeInTheDocument();
});

test("Should have a name displayed for each todo", () => {
  expect(false).toBe(true);
});

test("Should have a description displayed for each todo", () => {
  expect(false).toBe(true);
});

test("Should have a due date displayed for each todo", () => {
  expect(false).toBe(true);
});

test("Should have a priority displayed for each todo", () => {
  expect(false).toBe(true);
});

test("Should render a form to add a todo", () => {
  expect(false).toBe(true);
});

test("Should allow you to set a todo name", () => {
  expect(false).toBe(true);
});

test("Should allow you to set a todo description", () => {
  expect(false).toBe(true);
});

test("Should allow you to set a todo due date", () => {
  expect(false).toBe(true);
});

test("Should allow you to set a todo priority", () => {
  expect(false).toBe(true);
});

test("Should allow you to add a todo", () => {
  expect(false).toBe(true);
});

test("Should validate that todo name is not empty", () => {
  expect(false).toBe(true);
});

test("Should validate that todo description is not empty", () => {
  expect(false).toBe(true);
});

test("Should alert user if the todo fails to empty", () => {
  expect(false).toBe(true);
});

test("Should render edit button in each todo", () => {
  expect(false).toBe(true);
});

test("Should render delete button in each todo", () => {
  expect(false).toBe(true);
});

test("Should display a confirm dialog before deleting a todo", () => {
  expect(false).toBe(true);
});

test("Should get a list of todos from the server when page loads", () => {
  expect(false).toBe(true);
});

test("Should show a loading spinner while fetching todos", () => {
  expect(false).toBe(true);
});

test("Should show an error message if fetching todos fails", () => {
  expect(false).toBe(true);
});
