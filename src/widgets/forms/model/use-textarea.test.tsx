// Use Textarea Hook Test Suite Requirements
import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useTextarea from "./use-textarea";
// Use Textarea Hook Test Suite
describe("useTextarea", () => {
  // Test 1: Initial status and length are correct
  it("init correctly", () => {
    // Render Hook in Fake DOM
    const { result } = renderHook(() => useTextarea());
    // Check if the return values are the right ones
    expect(result.current.status).toBe("Neutral");
    expect(result.current.length).toBe(0);
  });
  // Test 2: onChange updates length and status to Valid
  it("updates length and status correctly when typing", () => {
    // Render Hook in Fake DOM
    const { result } = renderHook(() => useTextarea());
    // Mock Event for textarea typing
    const MOCK_EVENT: React.ChangeEvent<HTMLTextAreaElement> = {
      target: { value: "Hola" },
    } as unknown as React.ChangeEvent<HTMLTextAreaElement>;
    // Use Hook values that has to wait to check
    act(() => {
      result.current.onChange(MOCK_EVENT);
    });
    // Check if the length and status were updated
    expect(result.current.length).toBe(4);
    expect(result.current.status).toBe("Valid");
  });
  // Test 3: onChange resets to Neutral when cleared
  it("returns to neutral status when textarea is emptied", () => {
    // Render Hook in Fake DOM
    const { result } = renderHook(() => useTextarea());
    // Mock Event for writing
    const EVENT_TYPED: React.ChangeEvent<HTMLTextAreaElement> = {
      target: { value: "Hola" },
    } as unknown as React.ChangeEvent<HTMLTextAreaElement>;
    // Use Hook values that has to wait to check
    act(() => {
      result.current.onChange(EVENT_TYPED);
    });
    // Check if the textarea is valid
    expect(result.current.status).toBe("Valid");
    // Mock Event for clearing
    const EVENT_EMPTY: React.ChangeEvent<HTMLTextAreaElement> = {
      target: { value: "" },
    } as unknown as React.ChangeEvent<HTMLTextAreaElement>;
    // Use Hook values that has to wait to check
    act(() => {
      result.current.onChange(EVENT_EMPTY);
    });
    // Check if the textarea is neutral again
    expect(result.current.status).toBe("Neutral");
    expect(result.current.length).toBe(0);
  });
});
