import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Patient from "../../components/Patient";
import "@testing-library/jest-dom/extend-expect";

const mockPatient = {
  dischargeDate: "2019-01-01",
  email: "test@test.com",
  id: "1234",
  name: "Test Name",
  owner: "Test Owner",
  reason: "Test Reason",
};

describe("Form component specs", () => {
  it("should render correctly using snapshot testing", () => {
    const { asFragment } = render(<Patient patient={mockPatient} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should display the Patient Component", () => {
    render(<Patient patient={mockPatient} />);

    const elementDischargeDate = screen.getByText("2019-01-01");
    const elementEmail = screen.getByText("test@test.com");
    const elementName = screen.getByText("Test Name");
    const elementOwner = screen.getByText("Test Owner");
    const elementReason = screen.getByText("Test Reason");
    const elementEditButton = screen.getByRole("button", { name: "Edit" });
    const elementDeleteButton = screen.getByRole("button", { name: "Delete" });

    expect(elementDischargeDate).not.toBeNull();
    expect(elementDischargeDate).toBeInTheDocument();
    expect(elementDischargeDate.tagName).toEqual("SPAN");
    expect(elementDischargeDate.textContent).toEqual("2019-01-01");

    expect(elementEmail).not.toBeNull();
    expect(elementEmail).toBeInTheDocument();
    expect(elementEmail.tagName).toEqual("SPAN");
    expect(elementEmail.textContent).toEqual("test@test.com");

    expect(elementName).not.toBeNull();
    expect(elementName).toBeInTheDocument();
    expect(elementName.tagName).toEqual("SPAN");
    expect(elementName.textContent).toEqual("Test Name");

    expect(elementOwner).not.toBeNull();
    expect(elementOwner).toBeInTheDocument();
    expect(elementOwner.tagName).toEqual("SPAN");
    expect(elementOwner.textContent).toEqual("Test Owner");

    expect(elementReason).not.toBeNull();
    expect(elementReason).toBeInTheDocument();
    expect(elementReason.tagName).toEqual("SPAN");
    expect(elementReason.textContent).toEqual("Test Reason");

    expect(elementEditButton).not.toBeNull();
    expect(elementEditButton).toBeInTheDocument();
    expect(elementEditButton.tagName).toEqual("BUTTON");
    expect(elementEditButton.textContent).toEqual("Edit");

    expect(elementDeleteButton).not.toBeNull();
    expect(elementDeleteButton).toBeInTheDocument();
    expect(elementDeleteButton.tagName).toEqual("BUTTON");
    expect(elementDeleteButton.textContent).toEqual("Delete");
  });

  it("when EditButton is clicked, setPatient should be called one time per click", () => {
    const props = {
      patient: mockPatient,
      setPatient: jest.fn(),
      deletePatient: jest.fn(),
    };

    render(<Patient {...props} />);

    const elementEditButton = screen.getByRole("button", { name: "Edit" });

    expect(props.setPatient).toHaveBeenCalledTimes(0);

    userEvent.click(elementEditButton);

    expect(props.setPatient).toHaveBeenCalled();
    expect(props.setPatient).toHaveBeenCalledTimes(1);
  });

  it("when DeleteButton is clicked, deletePatient should be called one time per click and when confirm the delete", () => {
    const props = {
      patient: mockPatient,
      setPatient: jest.fn(),
      deletePatient: jest.fn(),
    };
    window.confirm = jest.fn(() => true);

    render(<Patient {...props} />);

    const elementDeleteButton = screen.getByRole("button", { name: "Delete" });

    expect(props.deletePatient).toHaveBeenCalledTimes(0);

    userEvent.click(elementDeleteButton);

    expect(props.deletePatient).toHaveBeenCalled();
    expect(props.deletePatient).toHaveBeenCalledTimes(1);
  });

  it("when DeleteButton is clicked, handleDelete should be called one time per click and shouldn't called deletePatient", () => {
    const props = {
      patient: mockPatient,
      setPatient: jest.fn(),
      deletePatient: jest.fn(),
    };
    window.confirm = jest.fn(() => false);

    const wrapper = render(<Patient {...props} />);

    const elementDeleteButton = screen.getByRole("button", { name: "Delete" });

    expect(props.deletePatient).toHaveBeenCalledTimes(0);

    userEvent.click(elementDeleteButton);

    expect(props.deletePatient).not.toHaveBeenCalled();
    expect(props.deletePatient).toHaveBeenCalledTimes(0);
  });
});
