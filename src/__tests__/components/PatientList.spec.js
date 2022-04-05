import React from "react";
import { render, screen } from "@testing-library/react";
import PatientList from "../../components/PatientList";
import "@testing-library/jest-dom/extend-expect";

describe("PatientList component specs", () => {
  it("should render correctly using snapshot testing with PatientsList empty", () => {
    const { asFragment } = render(<PatientList />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should render correctly using snapshot testing with PatientsList filled", () => {
    const mockPatientList = [
      {
        dischargeDate: "2010-01-01",
        email: "testA@test.com",
        id: "1234",
        name: "Test Name A",
        owner: "Test Owner A",
        reason: "Test Reason A",
      },
      {
        dischargeDate: "2011-01-01",
        email: "testb@test.com",
        id: "12345",
        name: "Test Name B",
        owner: "Test Owner B",
        reason: "Test Reason B",
      },
    ];

    const props = {
      patients: mockPatientList,
      setPatient: jest.fn(),
      deletePatient: jest.fn(),
    };

    const { asFragment } = render(<PatientList {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should render No Patients title when PatientsList is empty", () => {
    render(<PatientList />);
    const elementTitle = screen.getByRole("heading", { name: "No Patients" });
    const elementParagraph = screen.getByText("Start adding patients and");

    expect(elementTitle).not.toBeNull();
    expect(elementTitle).toBeInTheDocument();
    expect(elementTitle.tagName).toEqual("H2");
    expect(elementTitle.textContent).toEqual("No Patients");

    expect(elementParagraph).not.toBeNull();
    expect(elementParagraph).toBeInTheDocument();
    expect(elementParagraph.tagName).toEqual("P");
    expect(elementParagraph.textContent).toEqual(
      "Start adding patients and they will be displayed here"
    );
  });
  it("should render No Patients title when PatientsList is empty", () => {
    const mockPatientList = [
      {
        dischargeDate: "2010-01-01",
        email: "testA@test.com",
        id: "1234",
        name: "Test Name A",
        owner: "Test Owner A",
        reason: "Test Reason A",
      },
      {
        dischargeDate: "2011-01-01",
        email: "testb@test.com",
        id: "12345",
        name: "Test Name B",
        owner: "Test Owner B",
        reason: "Test Reason B",
      },
    ];

    const props = {
      patients: mockPatientList,
      setPatient: jest.fn(),
      deletePatient: jest.fn(),
    };

    render(<PatientList {...props} />);
    const elementTitle = screen.getByRole("heading", { name: "Patients List" });
    const elementParagraph = screen.getByText("Admin your");

    expect(elementTitle).not.toBeNull();
    expect(elementTitle).toBeInTheDocument();
    expect(elementTitle.tagName).toEqual("H2");
    expect(elementTitle.textContent).toEqual("Patients List");

    expect(elementParagraph).not.toBeNull();
    expect(elementParagraph).toBeInTheDocument();
    expect(elementParagraph.tagName).toEqual("P");
    expect(elementParagraph.textContent).toEqual(
      "Admin your Patients & Appointments"
    );
  });
});
