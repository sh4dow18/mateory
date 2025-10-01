// Use Sidebar Nav Test suite Requirements
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import useSidebarNav from "./use-sidebar-nav";
// Test suite for Use Sidebar Nav hook
describe("useSidebarNav", () => {
  // Test 1: Use Sidebar nav has to init open as true
  it("init with open as false", () => {
    // Render hook in fake DOM
    const { result } = renderHook(() => useSidebarNav());
    // Check if sidebar is opened
    expect(result.current.open).toBe(true);
  });
  // Test 2: Toggle state correctly
  it("toggle state correctly", () => {
    // Render hook in fake DOM
    const { result } = renderHook(() => useSidebarNav());
    // Use Hook values that has to wait to check
    act(() => {
      // Tries to close sidebar
      result.current.toggle();
    });
    // Check if sidebar is closed
    expect(result.current.open).toBe(false);
    // Use Hook values that has to wait to check
    act(() => {
      // Tries to open sidebar
      result.current.toggle();
    });
    // Check if sidebar is opened
    expect(result.current.open).toBe(true);
  });
});
