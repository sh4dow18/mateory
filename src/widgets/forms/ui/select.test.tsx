// Select Tests Suite Requirements
// render: Mounts the component in a virtual DOM for testing
// screen: Provides utilities to query elements
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Select from "./select";
import { SelectOption } from "@/widgets/forms/config/form";
// Select Tests Suite
describe("Select", () => {
  // Set Select Test Suite Constants
  const OPTIONS_LIST: SelectOption[] = [
    { value: 1, display: "Opción 1" },
    { value: 2, display: "Opción 2" },
    { value: 3, display: "Opción 3" },
  ];
  // Test 1: Render Correctly with label, select and help message
  it("render correctly", () => {
    // Render the component with example props
    render(<Select label="Selecciona una opción" name="mySelect" optionsList={OPTIONS_LIST} />);
    // Check if the Select label was rendered
    expect(screen.getByText("Selecciona una opción")).toBeInTheDocument();
    // Check if the Select was rendered
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    // Check if the Select Help Message was rendered
    expect(screen.getByText("Se debe Seleccionar una Opción")).toBeInTheDocument();
    // Check if the Select Options was rendered
    OPTIONS_LIST.forEach((option) => {
      // Get the Option
      const OPTION = screen.getByRole("option", { name: option.display });
      // Check if Option is in the Document
      expect(OPTION).toBeInTheDocument();
      // Check if Option has Value
      expect(OPTION).toHaveValue(`${option.value}`);
    });
  });
  // Test 2: Allows to Select an Option by User
  it("allows to select an option", async () => {
    // Creates an instance that simulates user interactions
    const USER = userEvent.setup();
    // Render the component with example props
    render(<Select label="Selecciona una opción" name="mySelect" optionsList={OPTIONS_LIST} />);
    // Get the Select
    const SELECT = screen.getByRole("combobox");
    // User Select the Option with the Value "1"
    await USER.selectOptions(SELECT, "1");
    // Check if the Select as a Value and it is "1"
    expect((SELECT as HTMLSelectElement).value).toBe("1");
  });
});
