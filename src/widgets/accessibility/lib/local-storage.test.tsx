// Accessibility Local Storage Test Suite Requirements
import { beforeEach, describe, expect, it } from "vitest";
import { GetAccessibilityPreferences, SetAccessibilityPreferences } from "./local-storage";
// Accessibility Local Storage Test Suite 
describe("accessibility local storage", () => {
  // Before Each test, clear local storage
  beforeEach(() => localStorage.clear());
  // Test 1: Save User Preferences Correctly
  it("save accessibility preferences", () => {
    // Mock User Preferences
    const USER_PREFERENCES = {
      theme: { darkMode: true, highContrast: false, grayscale: false },
      font: { small: false, large: true, extraLarge: false },
      mode: { dyslexia: true },
    };
    // Set User Preferences in Fake DOM
    SetAccessibilityPreferences(USER_PREFERENCES);
    // Get User Preferences from local storage
    const RESULT = GetAccessibilityPreferences();
    // Check if the user preferences saved are the same as the mock user preferences
    expect(RESULT).toStrictEqual(USER_PREFERENCES);
  });
  // Test 2: Get null if User Preferences is Empty
  it("null when accessibility preferences is empty", () => {
    // Get User Preferences from local storage
    const RESULT = GetAccessibilityPreferences();
    // Check if the user preferences is null to be the first time
    expect(RESULT).toBeNull();
  });
});
