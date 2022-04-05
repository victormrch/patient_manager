import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";
import "@testing-library/jest-dom/extend-expect";

describe("Header component specs", () => {
  it("should render correctly using snapshot testing", () => {
    const { asFragment } = render(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should display the header", () => {
    render(<Header />);

    const element = screen.getByRole("heading", {
      name: "Advance Veterinary Care",
    });

    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe("H1");
    expect(element.textContent).toBe("Advance Veterinary Care");
  });
});
