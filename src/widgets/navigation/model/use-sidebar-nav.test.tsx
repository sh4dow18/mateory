// Use Sidebar Nav Test suite Requirements
import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import useSidebarNav from "./use-sidebar-nav";
// Test suite for Use Sidebar Nav hook
describe("useSidebarNav", () => {
  // Before Each test, clear local storage
  beforeEach(() => localStorage.clear());
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
  // Test 4: Load Sidebar Nav Preference when hook is rendered
  it("load sidebar nav preference at first", () => {
    // Set Mock User Preference in Local Storage
    localStorage.setItem("sidebar-nav", "false");
    // Render hook in fake DOM
    const { result } = renderHook(() => useSidebarNav());
    // Check if the Sidebar Nav is Closed
    expect(result.current.open).toBe(false);
  });
  // Test 5: Update Sidebar Nav Preference in Local Storage when toggle
  it("update sidebar nav preference in local storage when toggle", () => {
    // Render hook in fake DOM
    const { result } = renderHook(() => useSidebarNav());
    // Use Hook values that has to wait to check
    act(() => {
      // Tries to toggle and save preference in local storage
      result.current.toggle();
    });
    // Get User Preference from local storage
    const USER_PREFERENCE = JSON.parse(localStorage.getItem("sidebar-nav")!);
    // Check if the Sidebar Nav is Closed
    expect(USER_PREFERENCE).toBe(false);
  });
});
