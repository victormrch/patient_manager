import React from "react";
import { render, screen } from "@testing-library/react";
import Error from "../../components/Error";
import "@testing-library/jest-dom/extend-expect";

describe("Error component specs", () => {
  it("should render correctly using snapshot testing", () => {
    const message = "Test error";

    const { asFragment } = render(<Error message={message} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should display the message if exist message", () => {
    const message = "Test Message";

    render(<Error message={message} />);

    const element = screen.getByText(message);

    expect(element).not.toBeNull();
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("P");
    expect(element.textContent).toBe("Test Message");
  });
});
