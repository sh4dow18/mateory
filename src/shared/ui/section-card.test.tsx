// Section Card Test Suite Requirements
// render: Mounts the component in a virtual DOM for testing
// screen: Provides utilities to query elements
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SectionCard from "./section-card";
// Section Card Test Suite
describe("Section Card", () => {
  // Test 1: Renders Correctly
  it("renders correctly", () => {
    // Mounts component in Fake DOM
    render(<SectionCard title="Título">Contenido</SectionCard>);
    // Check if the component was rendered
    expect(screen.getByText("Título")).toBeInTheDocument();
  });
  // Test 2: Renders Correctly with a React node in Title
  it("renders with a node in title", () => {
    // Mounts component in Fake DOM
    render(
      <SectionCard title="Título" nodeWithTitle={<span>Nodo</span>}>
        Contenido
      </SectionCard>,
    );
    // Check if the component was rendered with node in document
    expect(screen.getByText("Nodo")).toBeInTheDocument();
  });
});
