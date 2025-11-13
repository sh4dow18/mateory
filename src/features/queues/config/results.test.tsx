// Results Config Test Suite Requirements
import { describe, expect, it } from "vitest";
import { MODELS_IDS } from "./models";
import { GetEnabledQueueResults } from "./results";
// Results Config Test Suite
describe("Results Config", () => {
  // Test 1: Get Enabled Results in "EPQ Without Deficit" model
  it("get enabled results in mm1 fifo k inf model", () => {
    // Expected Results
    const EXPECTED = {
      systemUtilizationFactor: 0,
      customersInSystem: 0,
      customersInQueue: 0,
      timeOfCustomersInSystem: 0,
      timeOfCustomersInQueue: 0,
      pNCustomersInSystem: 0,
      pNQueueFull: 0,
    };
    // Get Enabled Results
    const RESULT = GetEnabledQueueResults(MODELS_IDS.mm1_fifo_k_inf, 0);
    // Check if the results are the same as expected
    expect(RESULT).toEqual(EXPECTED);
  });
});
