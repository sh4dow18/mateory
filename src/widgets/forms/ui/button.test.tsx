// Form Button Test Suite Requirements
// render: Mounts the component in a virtual DOM for testing
// screen: Provides utilities to query elements
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Button from "./button";
import { useButton } from "../model";
// Form Button Test Suite Mocks
const MOCK_USE_BUTTON_RESULT = {
  disabled: false,
  statusClasses: "bg-blue-500 hover:bg-blue-600",
  isSubmitting: false,
};
vi.mock("../model", () => ({
  useButton: vi.fn(() => MOCK_USE_BUTTON_RESULT),
}));
// Form Button Test Suite
describe("Form Button", () => {
  // Test 1: Renders correctly with default props
  it("renders correctly with given display text", () => {
    // Mounts component in Fake DOM
    render(<Button form="test-form" display="Enviar" />);
    // Get Button
    const BUTTON = screen.getByText("Enviar");
    // Check display text
    expect(BUTTON).toBeInTheDocument();
    // Check button form attribute
    expect(BUTTON).toHaveAttribute("form", "test-form");
    // Check if disabled is false
    expect(BUTTON).not.toBeDisabled();
  });
  // Test 2: Applies full width class when full is true
  it("applies width full class when full is true", () => {
    // Mounts component in Fake DOM
    render(<Button form="test-form" display="Enviar" full />);
    // Get Button
    const BUTTON = screen.getByRole("button");
    // Check button classes
    expect(BUTTON).toHaveClass("w-full");
  });
  // Test 3: Uses isSubmitting message when submitting
  it("shows proccesing message when is submitting is true", () => {
    // Update mock for this test
    vi.mocked(useButton).mockReturnValueOnce({
      ...MOCK_USE_BUTTON_RESULT,
      isSubmitting: true,
    });
    // Mounts component in Fake DOM
    render(<Button form="test" display="Enviar" />);
    // Check message
    expect(screen.getByText("Procesando...")).toBeInTheDocument();
  });
  // Test 4: Applies status classes from hook
  it("applies status classes returned from the hook", () => {
    // Mounts component in Fake DOM
    render(<Button form="test-form" display="Enviar" />);
    // Get Button
    const BUTTON = screen.getByText("Enviar");
    // Check classes returned by hook
    expect(BUTTON).toHaveClass("bg-blue-500");
    expect(BUTTON).toHaveClass("hover:bg-blue-600");
  });
  // Test 5: Disables button when hook returns disabled = true
  it("disables button when disabled is true", () => {
    // Update mock for this test
    vi.mocked(useButton).mockReturnValueOnce({
      ...MOCK_USE_BUTTON_RESULT,
      disabled: true,
    });
    // Mounts component in Fake DOM
    render(<Button form="test" display="Enviar" />);
    // Check disabled attribute
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
