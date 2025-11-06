// Use Form Hook Test Suite Requirements
import { act, renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import useForm from "./use-form";
// Use Form Hook Test Suite
describe("useForm", () => {
  // Test 1: Init Correctly with Form Reference
  it("init correctly", () => {
    // Render hook in fake DOM
    const { result } = renderHook(() => useForm("form1"));
    // Check if Form Reference is Null as Default
    expect(result.current.reference.current).toBeNull();
  });
  // Test 2: Dispatch a custom event with valid result when all inputs are valid
  it("dispatch a custom event with valid result when all inputs are valid", async () => {
    // Create a new Listener to listen the custom element
    const LISTENER = vi.fn();
    // Add Custom Event to Listener
    document.addEventListener("formValidityChange", LISTENER);
    // Create a new Form with Inputs with aria invalid as false
    const FORM = document.createElement("form");
    FORM.id = "form1";
    const FIRST_INPUT = document.createElement("input");
    FIRST_INPUT.name = "name";
    FIRST_INPUT.setAttribute("aria-invalid", "false");
    const SECOND_INPUT = document.createElement("input");
    SECOND_INPUT.name = "email";
    SECOND_INPUT.setAttribute("aria-invalid", "false");
    FORM.appendChild(FIRST_INPUT);
    FORM.appendChild(SECOND_INPUT);
    document.body.appendChild(FORM);
    // Render hook in fake DOM
    const { result } = renderHook(() => useForm("form1"));
    // Use Hook values that has to wait to check
    act(() => {
      // Set Mock Form in Hook Reference
      result.current.reference.current = FORM;
    });
    // Check if Listener was called
    await waitFor(() => {
      expect(LISTENER).toHaveBeenCalled();
    });
    // Get the Custom Event
    const CUSTOM_EVENT = LISTENER.mock.calls[0][0] as CustomEvent;
    // Check if the Custom Event has the right result
    expect(CUSTOM_EVENT.detail).toEqual({ formId: "form1", isValid: true });
  });
  // Test 3: Dispatch a custom event with invalid result when some input is invalid
  it("dispatch a custom event with invalid result when some input is invalid", async () => {
    // Create a new Listener to listen the custom element
    const LISTENER = vi.fn();
    // Add Custom Event to Listener
    document.addEventListener("formValidityChange", LISTENER);
    // Create a new Form with Inputs with aria invalid as false
    const FORM = document.createElement("form");
    FORM.id = "form1";
    const FIRST_INPUT = document.createElement("input");
    FIRST_INPUT.name = "name";
    FIRST_INPUT.setAttribute("aria-invalid", "true");
    const SECOND_INPUT = document.createElement("input");
    SECOND_INPUT.name = "email";
    SECOND_INPUT.setAttribute("aria-invalid", "false");
    FORM.appendChild(FIRST_INPUT);
    FORM.appendChild(SECOND_INPUT);
    document.body.appendChild(FORM);
    // Render hook in fake DOM
    const { result } = renderHook(() => useForm("form1"));
    // Use Hook values that has to wait to check
    act(() => {
      // Set Mock Form in Hook Reference
      result.current.reference.current = FORM;
    });
    // Check if Listener was called
    await waitFor(() => {
      expect(LISTENER).toHaveBeenCalled();
    });
    // Get the Custom Event
    const CUSTOM_EVENT = LISTENER.mock.calls[0][0] as CustomEvent;
    // Check if the Custom Event has the right result
    expect(CUSTOM_EVENT.detail).toEqual({ formId: "form1", isValid: false });
  });
  // Test 4: Reload custom event when inputs valid change
  it("reload custom event when input valid change", async () => {
    // Create a new Listener to listen the custom element
    const LISTENER = vi.fn();
    // Add Custom Event to Listener
    document.addEventListener("formValidityChange", LISTENER);
    // Create a new Form with Inputs with aria invalid as true
    const FORM = document.createElement("form");
    const INPUT = document.createElement("input");
    INPUT.name = "edad";
    INPUT.setAttribute("aria-invalid", "true");
    FORM.appendChild(INPUT);
    document.body.appendChild(FORM);
    // Render hook in fake DOM
    const { result } = renderHook(() => useForm("form1"));
    // Use Hook values that has to wait to check
    act(() => {
      // Set Mock Form in Hook Reference
      result.current.reference.current = FORM;
    });
    // Check if Listener was called
    await waitFor(() => {
      expect(LISTENER).toHaveBeenCalled();
    });
    // Get the Custom Event
    const CUSTOM_EVENT = LISTENER.mock.calls[0][0] as CustomEvent;
    // Check if the Custom Event has the right result
    expect(CUSTOM_EVENT.detail).toEqual({ formId: "form1", isValid: false });
    // Use Hook values that has to wait to check
    act(() => {
      // Change the Valid Input Prop to False
      INPUT.setAttribute("aria-invalid", "false");
      document.dispatchEvent(
        new CustomEvent("formValidityChange", {
          detail: { formId: "form1", isValid: true },
        }),
      );
    });
    // Check if Listener was called
    await waitFor(() => {
      expect(LISTENER).toHaveBeenCalledTimes(2);
    });
    const SECOND = LISTENER.mock.calls[1][0] as CustomEvent;
    expect(SECOND.detail).toEqual({ formId: "form1", isValid: true });
  });
});
