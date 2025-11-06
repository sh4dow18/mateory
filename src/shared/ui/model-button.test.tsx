// Model Button Test Suite Requirements
// render: Mounts the component in a virtual DOM for testing
// screen: Provides utilities to query elements
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ModelButton from "./model-button";
// Model Button Test Suite
describe("Model Button", () => {
  // Test 1: Try to render Model Button Correctly
  it("renders correctly", () => {
    // Mounts component in Fake DOM
    render(<ModelButton label="Modelo 1" selected={false} onClick={() => {}} />);
    // Try to get the button from fake screen
    const BUTTON = screen.getByText("Modelo 1");
    // Check if the model button was rendered
    expect(BUTTON).toBeInTheDocument();
    // Check if it is unselected
    expect(BUTTON).toHaveClass("bg-gray-200");
  });
  // Test 2: Try to render Model Button as Selected Model
  it("renders correctly with selected model", () => {
    // Mounts component in Fake DOM
    render(<ModelButton label="Modelo 1" selected={true} onClick={() => {}} />);
    // Try to get the button from fake screen
    const BUTTON = screen.getByText("Modelo 1");
    // Check if the model button was rendered
    expect(BUTTON).toBeInTheDocument();
    // Check if it is unselected
    expect(BUTTON).toHaveClass("bg-primary");
  });
});
