// Models Config Test Suite Requirements
import { describe, expect, it } from "vitest";
import { GetDisabledQueueModels, MODELS_IDS } from "./models";
// Models Config Test Suite
describe("Models Config", () => {
  // Test 1: Get Disabled Models Different than "M/M/1 : FIFO/∞/∞"
  it("get disabled models different than mm1 fifo inf inf", () => {
    // Result Models
    const MODELS = [MODELS_IDS.mms_fifo_inf_inf, MODELS_IDS.mm1_fifo_k_inf];
    // Get Disabled Models
    const RESULT = GetDisabledQueueModels(MODELS_IDS.mm1_fifo_inf_inf, "different");
    // Check if all models are the same
    expect(RESULT).toHaveLength(MODELS.length);
    MODELS.forEach((item) => expect(RESULT).toContain(item));
  });
  // Test 1: Get Disabled Models than include "inf_inf" string
  it("get disabled models that include 'inf_inf'", () => {
    // Result Models
    const MODELS = [MODELS_IDS.mm1_fifo_inf_inf, MODELS_IDS.mms_fifo_inf_inf];
    // Get Disabled Models
    const RESULT = GetDisabledQueueModels("inf_inf", "include");
    // Check if all models are the same
    expect(RESULT).toHaveLength(MODELS.length);
    MODELS.forEach((item) => expect(RESULT).toContain(item));
  });
});
