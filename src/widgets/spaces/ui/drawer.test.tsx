// Drawer Tests Suite Requirements
// render: Mounts the component in a virtual DOM for testing
// screen: Provides utilities to query elements
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Drawer from "./drawer";
import { CiMenuBurger } from "react-icons/ci";
import React from "react";
// Test suite for the Drawer component
describe("Drawer", () => {
  // Test 1: Renders a Nav when isNav is true
  it("when isNav is true", () => {
    // Mounts component
    render(
      <Drawer MenuIcon={CiMenuBurger} isNav>
        <a href="/home">Home</a>
      </Drawer>,
    );
    // Get Nav Element
    const NAV = screen.getByRole("navigation");
    // Check if Nav is there
    expect(NAV).toBeInTheDocument();
  });
  // Test 2: Renders a Div when isNav is false
  it("when isNav is false", () => {
    // Mounts component
    render(
      <Drawer MenuIcon={CiMenuBurger}>
        <span>Test</span>
      </Drawer>,
    );
    // Get Div Element
    const DIV = screen.getByText("Test").closest("div");
    // Check if Nav is there
    expect(DIV).toBeInTheDocument();
  });
  // Test 3: Applies Correct Classes when side is Left
  it("when side is left", () => {
    // Mounts Component in Container
    const { container } = render(
      <Drawer MenuIcon={CiMenuBurger} side="left">
        <span>Left</span>
      </Drawer>,
    );
    // Get Drawer Element
    const DRAWER = container.querySelector("div.fixed");
    // Check if have right classes when side is left
    expect(DRAWER).toHaveClass("left-0");
    expect(DRAWER).toHaveClass("-translate-x-full");
  });
  // Test 4: Applies Correct Classes when side is Right
  it("applies correct classes when side='right'", () => {
    // Mounts Component in Container
    const { container } = render(
      <Drawer MenuIcon={CiMenuBurger} side="right">
        <span>Right</span>
      </Drawer>,
    );
    // Get Drawer Element
    const DRAWER = container.querySelector("div.fixed");
    // Check if have right classes when side is left
    expect(DRAWER).toHaveClass("right-0");
    expect(DRAWER).toHaveClass("translate-x-full");
  });
});
