// Accessibility Local Storage Test Suite Requirements
import { beforeEach, describe, expect, it } from "vitest";
import { GetSidebarNavPreference, SetSidebarNavPreference } from "./local-storage";
// Accessibility Local Storage Test Suite
describe("sidebar local storage", () => {
  // Before Each test, clear local storage
  beforeEach(() => localStorage.clear());
  // Test 1: Save User Preference Correctly
  it("save sidebar nav preferences", () => {
    // Set User Preference in Fake DOM
    SetSidebarNavPreference(false);
    // Get User Preference from local storage
    const RESULT = GetSidebarNavPreference();
    // Check if the user preference saved are the same as the mock user preference
    expect(RESULT).toBe(false);
  });
  // Test 2: Get null if User Preference is Empty
  it("null when sidebar nav preference is empty", () => {
    // Get User Preferences from local storage
    const RESULT = GetSidebarNavPreference();
    // Check if the user preferences is null to be the first time
    expect(RESULT).toBeNull();
  });
});
