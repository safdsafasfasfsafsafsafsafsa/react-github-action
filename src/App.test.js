import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("The counter starts at 0", () => {
  render(<App />);

  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
});

test("Minus button has correct text", () => {
  render(<App />);

  const buttonElement = screen.getByTestId("minus-btn");
  expect(buttonElement).toHaveTextContent("-");
});

test("Plus button has correct text", () => {
  render(<App />);

  const buttonElement = screen.getByTestId("plus-btn");
  expect(buttonElement).toHaveTextContent("+");
});

// 버튼 동작 확인
test("When the + btn is pressed, the counter changes to 1", () => {
  render(<App />);

  const buttonElement = screen.getByTestId("plus-btn");
  fireEvent.click(buttonElement);

  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

test("on/off btn has blue color", () => {
  render(<App />);

  const buttonElement = screen.getByTestId("on/off-btn");
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});

// 플/마 버튼 disabled
test("Prevent the +/- btn from being pressed when the on/off btn is clicked ", () => {
  render(<App />);

  const onOffButtonElement = screen.getByTestId("on/off-btn");
  fireEvent.click(onOffButtonElement);

  const plusButtonElement = screen.getByTestId("plus-btn");
  expect(plusButtonElement).toBeDisabled();
});
