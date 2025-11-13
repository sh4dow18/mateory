// Get Probability Value Test Suite Requirements
import { describe, it, expect, vi, beforeEach } from "vitest";
import { GetProbabilityValue } from "./get-probability-value";
import { PROBABILITY_FORMATS_IDS } from "../../config";
// Get Probability Value Test Suite Mocks
vi.mock("./get-percentage", () => ({
  GetPercentage: vi.fn().mockReturnValue("50%"),
}));
// Get Probability Value Test Suite
describe("GetProbabilityValue", () => {
  // Before Each Test, clear all mocks
  beforeEach(() => {
    vi.clearAllMocks();
  });
  // Test 1: Return undefined string when probability is NaN
  it("return undefined string when probability is NaN", () => {
    const RESULT = GetProbabilityValue(NaN, PROBABILITY_FORMATS_IDS.percentage);
    expect(RESULT).toBe("Sin Definir");
  });
  // Test 2: Call GetPercentage when format is percentage
  it("call get percentage when format is percentage", () => {
    const RESULT = GetProbabilityValue(0.5, PROBABILITY_FORMATS_IDS.percentage);
    expect(RESULT).toBe("50%");
  });
  // Test 3: Return probability value by default
  it("return probability value by default", () => {
    const RESULT = GetProbabilityValue(0.8, 999);
    expect(RESULT).toBe(0.8);
  });
});
