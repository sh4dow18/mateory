// Use Input Hook Test Suite Requirements
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import useInput from "./use-input";
// Use Input Hook Test Suite Mocks
vi.mock("@/shared/config/variables", () => ({
  VARIABLE_VALIDATION_REGEX: {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    number: /^[0-9]+$/,
  },
}));
// Use Input Hook Test Suite
describe("useInput", () => {
  // Test 1: Init Correctly with Neutral Status
  it("init correctly", () => {
    // Render hook in fake DOM
    const { result } = renderHook(() => useInput("email"));
    /// Check if status is Neutral
    expect(result.current.status).toBe("Neutral");
  });
  // Test 2: Keep Neutral Value in Status when Value is Blank
  it("keep neutral value in status when value is blank", () => {
    // Render hook in fake DOM
    const { result } = renderHook(() => useInput("email"));
    // Use Hook values that has to wait to check
    act(() => {
      // Execute the on Change with Blank Value
      result.current.onChange({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    // Check if Status is still Neutral
    expect(result.current.status).toBe("Neutral");
  });
  // Test 3: Set valid when value is valid
  it("set valid when value is valid", () => {
    // Render hook in fake DOM
    const { result } = renderHook(() => useInput("email"));
    // Use Hook values that has to wait to check
    act(() => {
      // Execute the on Change with a valid email
      result.current.onChange({
        target: { value: "test@example.com" },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    // Check if Status is now Valid
    expect(result.current.status).toBe("Valid");
  });
  // Test 4: Set invalid when value is invalid
  it("set invalid when value is invalid", () => {
    // Render hook in fake DOM
    const { result } = renderHook(() => useInput("email"));
    // Use Hook values that has to wait to check
    act(() => {
      // Execute the on Change with a invalid email
      result.current.onChange({
        target: { value: "invalid email" },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    // Check if Status is now Valid
    expect(result.current.status).toBe("Invalid");
  });
  // Test 5: Use the right validation according the specified type
  it("use the right validation according the specified type", () => {
    // Render hook in fake DOM
    const { result } = renderHook(() => useInput("number"));
    // Check if the Status is Neutral
    expect(result.current.status).toBe("Neutral");
    // Use Hook values that has to wait to check
    act(() => {
      // Execute the on Change with a valid number
      result.current.onChange({
        target: { value: "12345" },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    // Check if the Status is now Valid
    expect(result.current.status).toBe("Valid");
    // Use Hook values that has to wait to check
    act(() => {
      // Execute the on Change with a invalid number
      result.current.onChange({
        target: { value: "abc" },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    // Check if the Status is now inValid
    expect(result.current.status).toBe("Invalid");
  });
});
