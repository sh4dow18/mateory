// Card Test Suite Requirements
// render: Mounts the component in a virtual DOM for testing
// screen: Provides utilities to query elements
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Card from "./card";
// Card Test Suite
describe("Card", () => {
  // Test 1: Renders a Card as Section
  it("renders as a section when no 'link' is provided", () => {
    // Mounts component in Fake DOM
    render(<Card>Contenido de prueba</Card>);
    // Check if the card is a section element
    expect(screen.getByText("Contenido de prueba").closest("section")).toBeInTheDocument();
  });
  // Test 2: Renders a Card as Next.js Link
  it("renders as a Next.js Link when 'link' is provided", () => {
    // Mounts component in Fake DOM
    render(<Card link={{ href: "link" }}>Enlace de prueba</Card>);
    // Get Link
    const LINK = screen.getByText("Enlace de prueba").closest("a");
    // Check if the card is a a element that it is the Next.js Link
    expect(LINK).toBeInTheDocument();
    // Check if has link classes
    expect(LINK).toHaveClass("cursor-pointer");
  });
  // Test 3: Renders a Card Colored
  it("renders as a section colored with primary color", () => {
    // Mounts component in Fake DOM
    render(<Card colored>Contenido de prueba</Card>);
    // Check if the card is a section element
    expect(screen.getByText("Contenido de prueba").closest("section")).toHaveClass("bg-primary/5");
  });
});
