import { render, screen } from "@testing-library/react";
import { Loading } from "./loading";
import "@testing-library/jest-dom";

describe("Loading Component", () => {
  it("renders the loading component with the correct elements", () => {
    render(<Loading />);

    const firstChild = screen.getByRole("main").firstChild;
    expect(firstChild).toBeInTheDocument();
    expect(firstChild).toHaveClass("looping");

    const loadingText = screen.getByRole("heading", { level: 1 });
    expect(loadingText).toBeInTheDocument();
    expect(loadingText).toHaveTextContent("Carregando...");
  });
});
