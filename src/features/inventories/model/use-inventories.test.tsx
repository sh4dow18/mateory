// Use Inventories Hook Test Suite Requirements
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, MockedFunction, vi } from "vitest";
import useInventories from "./use-inventories";
import { GetEnabledInventoryResults, MODELS_IDS, MODELS_LIST } from "../config";
// Use Inventories Hook Test Suite Mocks
vi.mock("../config", () => ({
  MODELS_LIST: [{ id: MODELS_IDS.epqWithoutDeficit }],
  MODELS_IDS: { epqWithoutDeficit: "epqWithoutDeficit", epqWithDeficit: "epqWithDeficit" },
  GetEnabledInventoryResults: vi.fn(() => ({ totalCost: 0 })),
}));
vi.mock("./calculate-results", () => ({
  CalculateResults: vi.fn(() => ({ totalCost: 123 })),
}));
// Use Inventories Hook Test Suite
describe("useInventories", () => {
  // Test 1: Init Correctly
  it("init correctly", () => {
    // Render Hook in Fake DOM
    const { result } = renderHook(() => useInventories());
    // Check if the Selected Model is the First Model in Models List
    expect(result.current.selectedModel).toBe(MODELS_LIST[0].id);
    // CHeck if the Results init in 0
    expect(result.current.results).toEqual({ totalCost: 0 });
  });
  // Test 2: Update Selected Model when change to another model
  it("update selected model correctly", () => {
    // Render Hook in Fake DOM
    const { result } = renderHook(() => useInventories());
    // Use Hook values that has to wait to check
    act(() => {
      // Update Selected Model to EPQ With Deficit
      result.current.UpdateSelectedModel(MODELS_IDS.epqWithDeficit);
    });
    // Check if the new Selected Model is EPQ With Deficit
    expect(result.current.selectedModel).toBe(MODELS_IDS.epqWithDeficit);
  });
  // Test 3: Update Results Correctly when Selected Model Change
  it("update results correctly when selected model change", () => {
    // Render Hook in Fake DOM
    const { result } = renderHook(() => useInventories());
    // Mock Return Value in Get Enabled Results
    (GetEnabledInventoryResults as MockedFunction<typeof GetEnabledInventoryResults>)
      .mockImplementationOnce(() => ({ totalCost: 0 }))
      .mockImplementationOnce(() => ({ totalUnitProductionCost: 0 }));

    // Use Hook values that has to wait to check
    act(() => {
      // Update Selected Model to EPQ With Deficit
      result.current.UpdateSelectedModel(MODELS_IDS.epqWithDeficit);
    });
    // Check if the new Selected Model is EPQ With Deficit
    expect(result.current.results).toEqual({ totalUnitProductionCost: 0 });
  });
  // Test 4: Call on Submit to Check if it call Calculate Results functions correctly
  it("call on submit", () => {
    // Render Hook in Fake DOM
    const { result } = renderHook(() => useInventories());
    // Set Form Mock Event
    const FORM_MOCK_EVENT = {
      preventDefault: vi.fn(),
      target: document.createElement("form"),
    } as unknown as React.FormEvent<HTMLFormElement>;
    // Use Hook values that has to wait to check
    act(() => {
      // Execute on Submit with Form Mock Event
      result.current.onSubmitForm(FORM_MOCK_EVENT);
    });
    // Check if the results are the same
    expect(result.current.results).toEqual({ totalCost: 123 });
  });
});
