import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Form from "../../components/Form";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

const mockEmptyPatient = {
  dischargeDate: "",
  email: "",
  id: "",
  name: "",
  owner: "",
  reason: "",
};

const mockPatient = {
  dischargeDate: "2019-01-01",
  email: "test@test.com",
  id: "1234",
  name: "Test Name",
  owner: "Test Owner",
  reason: "Test Reason",
};

describe("Form component specs", () => {
  it("should render correctly using snapshot testing and botton text should put Add Patient when patient is empty", () => {
    const { asFragment } = render(<Form patient={mockEmptyPatient} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should render correctly using snapshot testing and botton text should put Edit Patient when patient is filled", () => {
    const { asFragment } = render(<Form patient={mockPatient} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should display Form component", () => {
    render(<Form patient={mockEmptyPatient} />);

    const elementTitle = screen.getByRole("heading", {
      name: "Patient Follow-Up",
    });
    const elementSubtitle = screen.getByText("Add Patient and");

    expect(elementTitle).toBeInTheDocument();
    expect(elementTitle.tagName).toBe("H2");
    expect(elementTitle.textContent).toBe("Patient Follow-Up");

    expect(elementSubtitle).toBeInTheDocument();
    expect(elementSubtitle.tagName).toBe("P");
    expect(elementSubtitle.textContent).toBe("Add Patient and Manage Them");
  });
  it("when Add Patient button is clicked handleSubmit should be called one time and appear an error is form is empty", () => {
    render(<Form patient={mockEmptyPatient} />);

    const elementAddPatientButton = screen.getByDisplayValue("Add Patient");

    userEvent.click(elementAddPatientButton);

    const elementError = screen.getByText("All fields are required");

    expect(elementError).not.toBeNull();
    expect(elementError).toBeInTheDocument();
    expect(elementError.tagName).toEqual("P");
    expect(elementError.textContent).toBe("All fields are required");
  });
  it("when Add Patient button is clicked handleSubmit should be called one time and send Patient when form is filled", () => {
    const props = {
      patient: mockEmptyPatient,
      setPatient: jest.fn(),
      patients: [],
      setPatients: jest.fn(),
    };

    render(<Form {...props} />);

    userEvent.type(screen.getByLabelText("Pet Name"), "Test Pet Name");
    userEvent.type(screen.getByLabelText("Owner Name"), "Test Owner Name");
    userEvent.type(screen.getByLabelText("Email Address"), "test@email.com");
    userEvent.type(screen.getByLabelText("discharge date"), "2019-01-01");
    userEvent.type(
      screen.getByLabelText("Reason for visit"),
      "Test Reason for visit"
    );

    const elementAddPatientButton = screen.getByDisplayValue("Add Patient");

    userEvent.click(elementAddPatientButton);

    const elementError = screen.queryByText("All fields are required");

    expect(elementError).toBeNull();
    expect(elementError).not.toBeInTheDocument();
  });

  it("when Edit Patient button is clicked handleSubmit should be called one time and send Patient when form is filled", () => {
    const props = {
      patient: mockPatient,
      setPatient: jest.fn(),
      patients: [],
      setPatients: jest.fn(),
    };

    render(<Form {...props} />);

    userEvent.type(screen.getByLabelText("Pet Name"), "Test Pet Name");
    userEvent.type(screen.getByLabelText("Owner Name"), "Test Owner Name");
    userEvent.type(screen.getByLabelText("Email Address"), "test@email.com");
    userEvent.type(screen.getByLabelText("discharge date"), "2019-01-01");
    userEvent.type(
      screen.getByLabelText("Reason for visit"),
      "Test Reason for visit"
    );

    const elementAddPatientButton = screen.getByDisplayValue("Edit Patient");

    userEvent.click(elementAddPatientButton);

    const elementError = screen.queryByText("All fields are required");

    expect(elementError).toBeNull();
    expect(elementError).not.toBeInTheDocument();
  });
});
