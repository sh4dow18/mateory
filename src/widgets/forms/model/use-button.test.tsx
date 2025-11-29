// Use Form Button Tests Suite Requirements
// renderHook: Allows to run a React hook in a test environment without building a full component
// act: Ensures all React state updates are processed correctly before making assertions
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useButton } from ".";
// Use Form Button Tests Suite
describe("useFormButton", () => {
  // Test 1: Use Form Button has to init disabled as true
  it("init correctly", () => {
    // Render hook in fake DOM
    const { result } = renderHook(() => useButton("form1"));
    // Check if the form button is disabled
    expect(result.current.disabled).toBe(true);
    // Check if the Status Clases has the disabled background color
    expect(result.current.statusClasses).toContain("bg-gray-300");
  });
  // Test 2: Enable when the Event indicates that the form is valid
  it("enable when the event indicates that the form is valid", () => {
    // Render hook in fake DOM
    const { result } = renderHook(() => useButton("form1"));
    // Use Hook values that has to wait to check
    act(() => {
      // Dispatch Custom Event with mock values that Use Form Button Check
      document.dispatchEvent(
        new CustomEvent("formValidityChange", {
          detail: { formId: "form1", isValid: true },
        }),
      );
    });
    // Check if disabled is now false
    expect(result.current.disabled).toBe(false);
    // Check if the Status Clases has the enabled background color
    expect(result.current.statusClasses).toContain("bg-primary");
  });
  // Test 3: Should not react if the event is of a different form
  it("should not react if the event is of a different form", () => {
    // Render hook in fake DOM
    const { result } = renderHook(() => useButton("form1"));
    // Use Hook values that has to wait to check
    act(() => {
      // Dispatch Custom Event with mock values that Use Form Button Check
      document.dispatchEvent(
        new CustomEvent("formValidityChange", {
          detail: { formId: "form2", isValid: true },
        }),
      );
    });
    // Check that the use form button still disabled
    expect(result.current.disabled).toBe(true);
  });
  // Test 4: Disable the button again when the form is invalid
  it("disable the button again when the form is invalid", () => {
    const { result } = renderHook(() => useButton("form1"));
    // Use Hook values that has to wait to check
    act(() => {
      // Dispatch Custom Event with mock values that Use Form Button Check
      document.dispatchEvent(
        new CustomEvent("formValidityChange", {
          detail: { formId: "form1", isValid: true },
        }),
      );
    });
    // Check if disabled is now false
    expect(result.current.disabled).toBe(false);
    // Use Hook values that has to wait to check
    act(() => {
      // Dispatch Custom Event with mock values that Use Form Button Check
      document.dispatchEvent(
        new CustomEvent("formValidityChange", {
          detail: { formId: "form1", isValid: false },
        }),
      );
    });
    // Check if disabled is now true
    expect(result.current.disabled).toBe(true);
  });
  // Test 5: Disable the button again when the form is submitting
  it("disable the button again when the form is submitting", () => {
    const { result } = renderHook(() => useButton("form1"));
    // Use Hook values that has to wait to check
    act(() => {
      // Dispatch Custom Event with mock values that Use Form Button Check
      document.dispatchEvent(
        new CustomEvent("formSubmittingChange", {
          detail: { formId: "form1", isSubmitting: true },
        }),
      );
    });
    // Check if disabled is now false
    expect(result.current.disabled).toBe(true);
    // Use Hook values that has to wait to check
    act(() => {
      // Dispatch Custom Event with mock values that Use Form Button Check
      document.dispatchEvent(
        new CustomEvent("formSubmittingChange", {
          detail: { formId: "form1", isSubmitting: false },
        }),
      );
    });
    // Check if disabled is now true
    expect(result.current.disabled).toBe(false);
  });
});
