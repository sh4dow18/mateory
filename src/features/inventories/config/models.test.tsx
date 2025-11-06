// Models Config Test Suite Requirements
import { describe, expect, it } from "vitest";
import { GetDisabledInventoryModels, MODELS_IDS } from "./models";
// Models Config Test Suite
describe("Models Config", () => {
  // Test 1: Get Disabled Models Different than "EPQ Without Deficit"
  it("get disabled models different than epq without deficit", () => {
    // Result Models
    const MODELS = [
      MODELS_IDS.epqWithDeficit,
      MODELS_IDS.eoqWithoutDeficit,
      MODELS_IDS.eoqWithDeficit,
    ];
    // Get Disabled Models
    const RESULT = GetDisabledInventoryModels(MODELS_IDS.epqWithoutDeficit, "different");
    // Check if all models are the same
    expect(RESULT).toHaveLength(MODELS.length);
    MODELS.forEach((item) => expect(RESULT).toContain(item));
  });
  // Test 1: Get Disabled Models than include "With Deficit" string
  it("get disabled models that include 'with deficit'", () => {
    // Result Models
    const MODELS = [MODELS_IDS.epqWithDeficit, MODELS_IDS.eoqWithDeficit];
    // Get Disabled Models
    const RESULT = GetDisabledInventoryModels("with-deficit", "include");
    // Check if all models are the same
    expect(RESULT).toHaveLength(MODELS.length);
    MODELS.forEach((item) => expect(RESULT).toContain(item));
  });
});
