/* eslint-disable no-undef */
/* jest-environment-jsdom */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddTodoButton from "./AddTodoButton";

test("Should render add todo button seperate from the todo list", () => {
  render(<AddTodoButton />);
  expect(screen.getByTestId("add-todo-btn")).toBeInTheDocument();
});
