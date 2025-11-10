// Use Queues Hook Test Suite Requirements
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, MockedFunction, vi } from "vitest";
import useQueues from "./use-queues";
import { GetEnabledQueueResults, MODELS_IDS, MODELS_LIST } from "../config";
// Use Queues Hook Test Suite Mocks
vi.mock("../config", () => {
  const MODELS_IDS = { mm1_fifo_inf_inf: "mm1_fifo_inf_inf", mms_fifo_inf_inf: "mms_fifo_inf_inf" };
  return {
    MODELS_LIST: [{ id: MODELS_IDS.mm1_fifo_inf_inf }],
    MODELS_IDS: MODELS_IDS,
    GetEnabledQueueResults: vi.fn(() => ({ systemUtilizationFactor: 0 })),
  };
});
vi.mock("./calculate-results", () => ({
  CalculateResults: vi.fn(() => ({ systemUtilizationFactor: 123 })),
}));
// Use Queues Hook Test Suite
describe("useQueues", () => {
  // Test 1: Init Correctly
  it("init correctly", () => {
    // Render Hook in Fake DOM
    const { result } = renderHook(() => useQueues());
    // Check if the Selected Model is the First Model in Models List
    expect(result.current.selectedModel).toBe(MODELS_LIST[0].id);
    // CHeck if the Results init in 0
    expect(result.current.results).toEqual({ systemUtilizationFactor: 0 });
  });
  // Test 2: Update Selected Model when change to another model
  it("update selected model correctly", () => {
    // Render Hook in Fake DOM
    const { result } = renderHook(() => useQueues());
    // Use Hook values that has to wait to check
    act(() => {
      // Update Selected Model to M/M/s : FIFO/∞/∞
      result.current.UpdateSelectedModel(MODELS_IDS.mms_fifo_inf_inf);
    });
    // Check if the new Selected Model is M/M/s : FIFO/∞/∞
    expect(result.current.selectedModel).toBe(MODELS_IDS.mms_fifo_inf_inf);
  });
  // Test 3: Update Results Correctly when Selected Model Change
  it("update results correctly when selected model change", () => {
    // Render Hook in Fake DOM
    const { result } = renderHook(() => useQueues());
    // Mock Return Value in Get Enabled Results
    (GetEnabledQueueResults as MockedFunction<typeof GetEnabledQueueResults>)
      .mockImplementationOnce(() => ({ systemUtilizationFactor: 0 }))
      .mockImplementationOnce(() => ({ expectedNumberOfCustomersInSystem: 0 }));
    // Use Hook values that has to wait to check
    act(() => {
      // Update Selected Model to M/M/s : FIFO/∞/∞
      result.current.UpdateSelectedModel(MODELS_IDS.mms_fifo_inf_inf);
    });
    // Check if the new Selected Model is M/M/s : FIFO/∞/∞
    expect(result.current.results).toEqual({ expectedNumberOfCustomersInSystem: 0 });
  });
  // Test 4: Call on Submit to Check if it call Calculate Results functions correctly
  it("call on submit", () => {
    // Render Hook in Fake DOM
    const { result } = renderHook(() => useQueues());
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
    expect(result.current.results).toEqual({ systemUtilizationFactor: 123 });
  });
});
