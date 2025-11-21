// Summary Card Test Suite Requirements
// render: Mounts the component in a virtual DOM for testing
// screen: Provides utilities to query elements
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FaInfoCircle } from "react-icons/fa";
import SummaryCard from "./summary-card";
// Summary Card Test Suite
describe("Summary Card", () => {
  // Test 1: Render Correctly
  it("renders title, summary and icon correctly", () => {
    // Mounts component in Fake DOM
    render(
      <SummaryCard Icon={FaInfoCircle} title="Título de prueba" summary="Resumen de prueba" />,
    );
    // Check if display title
    expect(screen.getByText("Título de prueba")).toBeInTheDocument();
    // Check if display summary
    expect(screen.getByText("Resumen de prueba")).toBeInTheDocument();
    // Check if display icon
    expect(screen.getByLabelText("icon")).toBeInTheDocument();
  });
  // Test 2: Render wrapped title
  it("renders wrapped title when wrapTitle is true", () => {
    render(
      <SummaryCard
        Icon={FaInfoCircle}
        title="Título envuelto"
        summary="Resumen envuelto"
        wrapTitle
      />,
    );
    // Check if title section thas flex-wrap class
    expect(screen.getByText("Título envuelto").closest("section")).toHaveClass("flex-wrap");
  });
});
