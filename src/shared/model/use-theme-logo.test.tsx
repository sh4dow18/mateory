// Use Theme Logo Tests Suite Requirements
// renderHook: Allows to run a React hook in a test environment without building a full component
// act: Ensures all React state updates are processed correctly before making assertions
import { renderHook, act, waitFor } from "@testing-library/react";
import useThemeLogo from "../model/use-theme-logo";
import { beforeEach, describe, expect, it } from "vitest";
// Test suite for Use Theme Logo hook
describe("useThemeLogo hook", () => {
  // Use Theme Logo Test constants
  const DARK_LOGO_PATH = "/logos/dark.svg";
  const LIGHT_LOGO_PATH = "/logos/light.svg";
  // Reset the document's classes before each test to use just the dark class
  beforeEach(() => {
    document.documentElement.className = "";
  });
  // Test 1: By default, in light mode, the hook should return the dark logo
  it("returns dark logo by default (light mode)", () => {
    const { result } = renderHook(() => useThemeLogo());
    expect(result.current).toBe(DARK_LOGO_PATH);
  });
  // Test 2: When the document has "dark" class, the hook should return the white logo
  it("returns white logo when dark mode is active", () => {
    // Simulate dark mode
    document.documentElement.classList.add("dark");
    const { result } = renderHook(() => useThemeLogo());
    expect(result.current).toBe(LIGHT_LOGO_PATH);
  });
  // Test 3: The hook should update the logo dynamically when the theme changes
  it("updates logo when theme changes dynamically", async () => {
    const { result, rerender } = renderHook(() => useThemeLogo());
    // Initially, the logo should be dark
    expect(result.current).toBe(DARK_LOGO_PATH);
    // Simulate switching to dark mode
    act(() => {
      document.documentElement.classList.add("dark");
      // Trigger a re-render to simulate MutationObserver effect
      rerender();
    });
    // Wait for observer to update state
    await waitFor(() => {
      expect(result.current).toBe(LIGHT_LOGO_PATH);
    });
    // Simulate switching back to light mode
    act(() => {
      document.documentElement.classList.remove("dark");
      rerender();
    });
    // Wait for observer to update state
    await waitFor(() => {
      expect(result.current).toBe(DARK_LOGO_PATH);
    });
  });
});
