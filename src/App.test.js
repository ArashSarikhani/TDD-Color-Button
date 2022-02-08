import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByRole("link", {
//     name: /learnig testing library/i,
//   });
//   expect(linkElement).toBeInTheDocument();
// });

test("button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "change to blue",
  });

  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  expect(colorButton.textContent).toBe("change to red");
});

test("initial conditions", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "change to blue" });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("CheckedBox disables button on first click and enables on second click", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "change to blue" });
  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});
