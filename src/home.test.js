import { render, screen } from "@testing-library/react";
import A from "./App";
import Home from "./containers/home";

test("renders I AM ... text", () => {
  render(<Home />);
  const element = screen.getByText(/I AM .../i);
  expect(element).toBeInTheDocument();
});
