import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamleWithSpace } from "./App";

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
    name: "change to Midnight Blue",
  });

  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  expect(colorButton.textContent).toBe("change to Medium Violet Red");
});

test("initial conditions", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "change to Midnight Blue",
  });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("CheckedBox disables button on first click and enables on second click", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("Diasbled button has grey background and reverts to red", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: gray");

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: MediumVioletRed");
});

test("Clicked disabled button has grey background and reverts to blue", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(colorButton);
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: gray");

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: MidnightBlue ");
});

describe("space before camel-case capital letter", () => {
  test("work for no inner capital letter", () => {
    expect(replaceCamleWithSpace("Red")).toBe("Red");
  });
  test("works for one inner capital letter", () => {
    expect(replaceCamleWithSpace("MidnightBlue")).toBe("Midnight Blue");
  });
  test("work for multiple inner capital letters", () => {
    expect(replaceCamleWithSpace("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
