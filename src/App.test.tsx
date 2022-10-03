import { describe, expect, it } from "vitest"
import App from "./App";
import { render, screen, userEvent } from "./test-utils";

describe("Simple working test", () => {

  it("the title is visible", () => {
    render(<App />);
    const welcomeText = screen.getByText(/Vite \+ React/i);
    expect(welcomeText).toBeInTheDocument();
  });

  it("should increment count on click", async () => {
    render(<App />);
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
  });
});