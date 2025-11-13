// Get PN Customer Have To Wait Dispatcher Test Suite Requirements
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MODELS_IDS } from "@/features/queues/config";
import { GetPNCustomerHaveToWait as MMS_FIFO_INF_INF } from "../mms-fifo-inf-inf";
import { FormVariables } from "@/widgets/forms/config/form";
import { GetPNCustomerHaveToWait } from "./get-p-n-customers-to-wait";
// Get PN Customer Have To Wait Dispatcher Test Suite Mocks
vi.mock("../mms-fifo-inf-inf", () => ({
  GetPNCustomerHaveToWait: vi.fn().mockReturnValue(1),
}));
// Get PN Customer Have To Wait Dispatcher Test Suite
describe("GetPNCustomerHaveToWait dispatcher", () => {
  // Get PN Customer Have To Wait Dispatcher Test Suite Constants
  const MOCK_PARAMS = { averageServiceRate: 10 } as FormVariables;
  const MOCK_SETTINGS = { decimals: 2 } as FormVariables;
  const MOCK_SYSTEM_UTIL_FACTOR = 0.75;
  const MOCK_P0 = 0.3;
  // Before Each Test, clear all mocks
  beforeEach(() => {
    vi.clearAllMocks();
  });
  // Test 1: Call MMS_FIFO_INF_INF with right props
  it("call mms fifo inf inf with right props", () => {
    const RESULT = GetPNCustomerHaveToWait(
      MODELS_IDS.mms_fifo_inf_inf,
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_PARAMS,
      MOCK_SETTINGS,
      MOCK_P0,
    );
    expect(MMS_FIFO_INF_INF).toHaveBeenCalledWith(
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_P0,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    expect(RESULT).toBe(1);
  });
  // Test 2: Return undefined when model does not match
  it("return undefined when model does not match", () => {
    const RESULT = GetPNCustomerHaveToWait(
      "not-exists-model",
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_PARAMS,
      MOCK_SETTINGS,
      MOCK_P0,
    );
    expect(RESULT).toBeUndefined();
  });
});
