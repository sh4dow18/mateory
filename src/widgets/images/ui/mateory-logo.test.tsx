// Mateory Logo Tests Suite Requirements
// render: Mounts the component in a virtual DOM for testing
// screen: Provides utilities to query elements
import { render, screen } from "@testing-library/react";
import MateoryLogo from "../ui/mateory-logo";
import { describe, expect, it, vi } from "vitest";
import React from "react";
// Mock the useThemeLogo hook to control its return value
// Replaces the real useThemeLogo with a mock function.
// Always returns "/logos/dark.svg".
vi.mock("../model", () => ({
  useThemeLogo: vi.fn(() => "/logos/dark.svg"),
}));
// Test suite for the Mateory Logo component
describe("MateoryLogo component", () => {
  // Test 1: Render the component and check if the image is displayed correctly
  it("renders without crashing and displays the logo", () => {
    // Render the component with example props
    render(<MateoryLogo width={100} height={50} className="test-logo" />);
    // Find the image element by its alt text
    const LOGO = screen.getByAltText("Mateory Logo") as HTMLImageElement;
    // Assert that the image exists in the document
    expect(LOGO).toBeInTheDocument();
    // Assert that the src of the image matches the mocked hook return value
    expect(LOGO.src).toContain("/logos/dark.svg");
    // Assert that the className prop is applied correctly
    expect(LOGO).toHaveClass("test-logo");
    // Assert that width and height props are applied
    expect(LOGO.width).toBe(100);
    expect(LOGO.height).toBe(50);
  });
});
