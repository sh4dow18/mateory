// Result Card Test Suite Requirements
// render: Mounts the component in a virtual DOM for testing
// screen: Provides utilities to query elements
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ResultCard from "./result-card";
// Result Card Test Suite
describe("Result Card", () => {
  // Test 1: Renders Correctly with a string value
  it("renders correctly", () => {
    // Mounts component in Fake DOM
    render(<ResultCard label="Resultado" value="0" />);
    // Check if the component was rendered
    expect(screen.getByText("Resultado")).toBeInTheDocument();
    // Check if the value exists and its 0
    expect(screen.getByText("0")).toBeInTheDocument();
  });
  // Test 1: Renders Correctly with a number value
  it("renders with a number value", () => {
    // Mounts component in Fake DOM
    render(<ResultCard label="Resultado" value={0} />);
    // Check if the value exists and its 0
    expect(screen.getByText("0")).toBeInTheDocument();
  });
  // Test 3: Renders Correctly without value
  it("renders without value", () => {
    // Mounts component in Fake DOM
    render(<ResultCard label="Resultado" />);
    // Check if the value does not exists
    expect(screen.getByText("No Aplica")).toBeInTheDocument();
  });
});
