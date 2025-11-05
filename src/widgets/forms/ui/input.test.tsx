// Input Tests Suite Requirements
// render: Mounts the component in a virtual DOM for testing
// screen: Provides utilities to query elements
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "../ui/input";
import { describe, it, expect } from "vitest";
// Input Tests Suite
describe("Input", () => {
  // Test 1: Render Correctly
  it("render correctly", () => {
    // Render the component with example props
    render(<Input label="Cantidad" example="500" name="quantity" validation="number" />);
    // Check if the Input Label is in Document
    expect(screen.getByText("Cantidad")).toBeInTheDocument();
    // Check if the Input Container is in Document
    expect(screen.getByPlaceholderText("Ejemplo: 500")).toBeInTheDocument();
    // Check if the Input Help is in Document
    expect(screen.getByText("Solamente Números Positivos")).toBeInTheDocument();
  });
  // Test 2: Set Invalid Status when value is invalid
  it("set invalid status when value is invalid", async () => {
    // Creates an instance that simulates user interactions
    const USER = userEvent.setup();
    // Render the component with example props
    render(<Input label="Cantidad" example="500" name="quantity" validation="number" />);
    // Get Input
    const INPUT = screen.getByRole("textbox");
    // User Write something not bumerical
    await USER.type(INPUT, "abc");
    // Check if the Input has an Invalid Status
    expect(INPUT).toHaveAttribute("aria-invalid", "true");
    // Check if the Input Help Test is with Invalid Color
    expect(screen.getByText("Solamente Números Positivos")).toHaveClass("text-red-500");
  });
  // Test 3: Do not have an aria invalid prop when input is blank
  it("do not have an aria invalid prop when input is blank", () => {
    // Render the component with example props
    render(<Input label="Cantidad" example="500" name="quantity" validation="number" />);
    // Check if Input has not aria invalid attributte
    expect(screen.getByRole("textbox")).not.toHaveAttribute("aria-invalid");
  });
  // Test 4: Disables input when disable is true
  it("disables input when disable is true", () => {
    // Render the component with example props
    render(<Input label="Rango" example="1-9" name="range" validation="1-to-9" disabled />);
    // Check if Input is Disabled
    expect(screen.getByRole("textbox")).toBeDisabled();
    // Check if Input Label has the Aria Disabled as true
    expect(screen.getByText("Rango")).toHaveAttribute("aria-disabled", "true");
  });
});
