// Page Title Test Suite Requirements
// render: Mounts the component in a virtual DOM for testing
// screen: Provides utilities to query elements
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PageTitle from "./page-title";
// Page Title Test Suite
describe("Page Title", () => {
  // Test 1: Renders Correctly
  it("renders correctly", () => {
    // Mounts component in Fake DOM
    render(<PageTitle title="Título" summary="Descripción" />);
    // Check if the component was rendered
    expect(screen.getByText("Título")).toBeInTheDocument();
    // Check if was displayed without logo
    expect(screen.queryByAltText("Mateory Logo")).not.toBeInTheDocument();
  });
  // Test 1: Renders Correctly When title is an object that has a text colored
  it("renders correctly when title is an object", () => {
    // Mounts component in Fake DOM
    render(<PageTitle title={{ first: "Título", colored: "Con Color" }} summary="Descripción" />);
    const SPAN = screen.getByText("Con Color");
    // Check if the component was rendered
    expect(SPAN).toBeInTheDocument();
    // Check if the span is colored
    expect(SPAN).toHaveClass("text-primary");
  });
  // Test 3: Renders Correctly when logo is in screen
  it("renders correctly when use logo is true", () => {
    // Mounts component in Fake DOM
    render(<PageTitle title="Título" summary="Descripción" useLogo />);
    // Check if the component was rendered with Main Logo
    expect(screen.getByAltText("Mateory Logo")).toBeInTheDocument();
  });
});
