/* eslint-disable no-undef */
/* jest-environment-jsdom */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddTodoContainer from "./AddTodoContainer";

test("Should render a box to hold the add todo button", () => {
  render(<AddTodoContainer />);
  expect(screen.getByTestId("add-todo-container")).toBeInTheDocument();
});
