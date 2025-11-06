// Input Icon Tests Suite Requirements
// render: Mounts the component in a virtual DOM for testing
// screen: Provides utilities to query elements
import React from "react";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import InputIcon from "./input-icon";
// Input Icon Tests Suite
describe("InputIcon", () => {
  // Test 1: Render Correctly with Neutral Status
  it("render correctly with neutral status", () => {
    // Render the component with example props
    const { container } = render(<InputIcon status="Neutral" />);
    // Check if a Div is with Neutral Status
    expect(container.querySelector("div")).toBeInTheDocument();
  });
  // Test 2: Render Correctly with Valid Status
  it("render correctly with valid status", () => {
    // Render the component with example props
    const { container } = render(<InputIcon status="Valid" />);
    // Check if a SVG is with Valid Status
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
  // Test 3: Render Correctly with Invalid Status
  it("render correctly with invalid status", () => {
    // Render the component with example props
    const { container } = render(<InputIcon status="Valid" />);
    // Check if a SVG is with Invalid Status
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
  // Test 4: Change Style when is Disabled
  it("change style when is disabled", () => {
    // Render the component with example props
    const { container } = render(<InputIcon status="Valid" disabled />);
    // Get SVG
    const SVG = container.querySelector("svg");
    // Check if a SVG does not appear when disabled
    expect(SVG).toHaveClass("aria-disabled:opacity-0");
    expect(SVG).toHaveAttribute("aria-disabled", "true");
  });
});
