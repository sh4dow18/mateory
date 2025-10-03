// Use Accessibility Test Suite Requirements
import { renderHook, act } from "@testing-library/react";
import useAccessibility from "./use-accessibility";
import { beforeEach, describe, expect, it } from "vitest";
// Test Suite for Use Accessibility Hookk
describe("useAccessibility", () => {
  // Before Each Test, clean body class name
  beforeEach(() => {
    document.body.className = "";
  });
  // Test 1: Return all sections as disabled
  it("return sections as disabled", () => {
    // Render hook in fake DOM
    const { result } = renderHook(() => useAccessibility());
    // Check in each section if it enabled state is false
    result.current.forEach((section) => {
      expect(section.enabled).toBe(false);
    });
  });
  // Test 2: Set Dark Mode as Enabled
  it("set dark mode as enabled", () => {
    // Render hook in fake DOM
    const { result } = renderHook(() => useAccessibility());
    // Tries to get Dark Section
    const DARK_SECTION = result.current.find((section) => section.label === "Modo Oscuro")!;
    // Use Hook values that has to wait to check
    act(() => {
      // Tries to active dark mode
      DARK_SECTION.toggle();
    });
    // Check if Dark Mode is Enabled
    expect(result.current.find((section) => section.label === "Modo Oscuro")?.enabled).toBe(true);
    // Check if dark class is in body classes
    expect(document.body.classList.contains("dark")).toBe(true);
  });
  // Test 3: Change dark mode to gray scale
  it("change dark mode to gray scale", () => {
    // Render hook in fake DOM
    const { result } = renderHook(() => useAccessibility());
    // Tries to get Dark Section
    const DARK_SECTION = result.current.find((s) => s.label === "Modo Oscuro")!;
    // Tries to get Gray Scale Section
    const GRAY_SCALE_SECTION = result.current.find((s) => s.label === "Escala de Grises")!;
    // Use Hook values that has to wait to check
    act(() => {
      DARK_SECTION.toggle();
    });
    // Check if Dark Mode is Enabled
    expect(result.current.find((s) => s.label === "Modo Oscuro")!.enabled).toBe(true);
    // Check if dark class is in body classes
    expect(document.body.classList.contains("dark")).toBe(true);
    // Use Hook values that has to wait to check
    act(() => {
      GRAY_SCALE_SECTION.toggle();
    });
    // Check if Gray Scale is Enabled
    expect(result.current.find((s) => s.label === "Escala de Grises")!.enabled).toBe(true);
    // Check if Dark Mode is Disabled
    expect(result.current.find((s) => s.label === "Modo Oscuro")!.enabled).toBe(false);
    // Check if gray scale class is in body classes
    expect(document.body.classList.contains("grayscale")).toBe(true);
    // Check if dark class is not in body classes
    expect(document.body.classList.contains("dark")).toBe(false);
  });
});
