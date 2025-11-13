// Get Clients in Queue Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it, MockedFunction, vi } from "vitest";
import { GetClientsInQueue } from "./get-clients-in-queue";
import { GetClientsInSystem } from "./get-clients-in-system";
// Get Clients in Queue Test Suite Mocks
vi.mock("./get-clients-in-system", () => ({
  GetClientsInSystem: vi.fn(),
}));
// Get Clients in Queue Test Suite
describe("GetClientsInQueue", () => {
  // Get Clients in Queue Test Suite Constants
  const MOCK_PARAMS = {
    arrivalDistributionRate: 3,
    averageServiceRate: 5,
  };
  const MOCK_SETTINGS = {
    decimals: 3,
  };
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    const MOCK_SYSTEM_UTIL_FACTOR = 0.7;
    const MOCK_P0_CLIENTS_IN_SYSTEM = 0.3;
    const MOCK_RETURN_SYSTEM = 2.5;
    const { decimals } = MOCK_SETTINGS;
    (GetClientsInSystem as MockedFunction<typeof GetClientsInSystem>).mockReturnValue(
      MOCK_RETURN_SYSTEM,
    );
    const EXPECTED = MOCK_RETURN_SYSTEM - (1 - MOCK_P0_CLIENTS_IN_SYSTEM);
    const RESULT = GetClientsInQueue(
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_P0_CLIENTS_IN_SYSTEM,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
