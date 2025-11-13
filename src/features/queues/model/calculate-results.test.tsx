// Calculate Results Test Suite Requirements
import { describe, it, expect, vi, beforeEach, type MockedFunction } from "vitest";
import { CalculateResults } from "./calculate-results";
import { MODELS_IDS } from "../config";
import { GetP0ClientsinSystem } from "../lib/formulas/dispatchers";
// Calculate Results Test Suite Mocks
vi.mock("@/widgets/forms/config/form", () => ({
  GetFormVariablesParams: vi.fn(() => ({ decimals: 2, probabilityFormat: 2 })),
}));
vi.mock("../config", () => ({
  VARIABLES_LIST: [],
  MODELS_IDS: { mm1_fifo_inf_inf: "mm1_fifo_inf_inf" },
  RESULTS_CONFIG_LIST: [],
  PROBABILITY_FORMATS_IDS: { float: 2 },
}));
vi.mock("../lib/formulas/shared", () => ({
  GetPNQueueOfMoreThanCustomers: vi.fn(() => 1),
}));
vi.mock("../lib/formulas/dispatchers", () => ({
  GetClientsInQueue: vi.fn(() => 1),
  GetClientsInSystem: vi.fn(() => 1),
  GetIdleServers: vi.fn(() => 1),
  GetP0ClientsinSystem: vi.fn(() => 1),
  GetPNClientsInSystem: vi.fn(() => 1),
  GetPNCustomerHaveToWait: vi.fn(() => 1),
  GetPNMoreThanTimeInQueue: vi.fn(() => 1),
  GetPNMoreThanTimeInSystem: vi.fn(() => 1),
  GetSystemUtilizationFactor: vi.fn(() => 1),
  GetTimeOfCustomersInQueue: vi.fn(() => 1),
  GetTimeOfCustomersInSystem: vi.fn(() => 1),
}));
vi.mock("../lib/formulas/dispatchers/get-p-n-queue-full", () => ({
  GetPNQueueFull: vi.fn(() => 1),
}));
// Calculate Results Test Suite
describe("CalculateResults", () => {
  const MOCK_FORM = document.createElement("form");
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it("call all functions correctly and get the results", () => {
    const RESULT = CalculateResults(MODELS_IDS.mm1_fifo_inf_inf, MOCK_FORM);
    expect(RESULT).toEqual({
      systemUtilizationFactor: 1,
      customersInSystem: 1,
      customersInQueue: 1,
      timeOfCustomersInSystem: 1,
      timeOfCustomersInQueue: 1,
      pNCustomersInSystem: 1,
      pNQueueOfMoreThanNCustomers: 1,
      pNMoreThanNTimeInSystem: 1,
      pNMoreThanNTimeInQueue: 1,
      pNCustomerHaveToWait: 1,
      idleServers: 1,
      pNQueueFull: 1,
    });
  });
  it("return undefined when GetP0ClientsinSystem returns undefined", () => {
    (GetP0ClientsinSystem as MockedFunction<typeof GetP0ClientsinSystem>).mockReturnValueOnce(
      undefined,
    );
    const RESULT = CalculateResults(MODELS_IDS.mm1_fifo_inf_inf, MOCK_FORM);
    expect(RESULT.systemUtilizationFactor).toBe(1);
    expect(RESULT.pNQueueFull).toBe(1);
  });
});
