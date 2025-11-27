// Textarea Component Test Suite Requirements
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Textarea from "./textarea";
// Textarea Component Test Suite Mocks
const MockOnChange = vi.fn();
vi.mock("../model", () => ({
  useTextarea: () => ({
    status: "Neutral",
    length: 0,
    onChange: MockOnChange,
  }),
}));
// Textarea Component Test Suite
describe("Textarea Component", () => {
  // Textarea Component Test Suite Main Constants
  const PROPS = {
    label: "Descripción",
    name: "description",
    example: "Ejemplo de texto",
    maxLength: 10,
    rows: 3,
  };
  // Test 1: Renders label, textarea and placeholder correctly
  it("renders correctly", () => {
    // Render Component in Fake DOM
    render(<Textarea {...PROPS} />);
    // Check if label exists
    expect(screen.getByText("Descripción")).toBeInTheDocument();
    // Check if textarea exists with correct placeholder
    expect(screen.getByPlaceholderText("Ejemplo: Ejemplo de texto")).toBeInTheDocument();
    // Check if initial length message exists
    expect(screen.getByText("0 / 10")).toBeInTheDocument();
    // Check if max length help exists
    expect(screen.getByText("Máximo 10 caracteres")).toBeInTheDocument();
  });
  // Test 2: onChange se llama al escribir en la textarea
  it("calls on change when typing in the textarea", async () => {
    // Render Component in Fake DOM
    render(<Textarea {...PROPS} />);
    // Get textarea
    const TEXTAREA = screen.getByPlaceholderText("Ejemplo: Ejemplo de texto");
    // Simulate typing
    await userEvent.type(TEXTAREA, "Hola");
    // Check if onChange was called 4 times ("Hola")
    expect(MockOnChange).toHaveBeenCalledTimes(4);
  });
  // Test 3: aria-invalid es undefined con status Neutral
  it("sets aria-invalid correctly when status is Neutral", () => {
    // Render Component in Fake DOM
    render(<Textarea {...PROPS} />);
    // Get textarea
    const TEXTAREA = screen.getByPlaceholderText("Ejemplo: Ejemplo de texto");
    // Check aria-invalid
    expect(TEXTAREA.getAttribute("aria-invalid")).toBeNull();
  });
});
