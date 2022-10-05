import { describe, expect, it } from "vitest"
import App from "./App";
import { render, screen, userEvent, waitFor } from "../utils/test-utils";

describe("Simple working test", () => {

  it("the title is visible", async () => {
    await render(<App />);
    const welcomeText = screen.getByText(/Vite \+ React/i);
    expect(welcomeText).toBeInTheDocument();
  });

  it("should increment count on click", async () => {
    await render(<App />);
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
  });

  it("should have cat fact", async () => {
    await render(<App />);
    waitFor(() => expect(screen.getByText(/this is a cat fact/i)).toBeInTheDocument());
  });

  it("should route to other page", async () => {
    await render(<App />), '/newRoute';
    waitFor(() => expect(screen.getByText(/This is a different page/i)).toBeInTheDocument());
  });
});