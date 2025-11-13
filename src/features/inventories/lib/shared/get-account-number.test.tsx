// Get Account Number Test Suite Requirements
import { describe, it, expect, vi, beforeEach, MockedFunction } from "vitest";
import { GetAccountNumber } from "./get-account-number";
import { GetCheckedValue } from "@/shared/lib";
// Get Account Number Test Suite Mocks
vi.mock("@/shared/lib", () => ({
  GetCheckedValue: vi.fn(),
}));
vi.mock("../../config", () => ({
  CURRENCY_SYMBOL: { 1: "$", 2: "₡", 3: "€" },
}));
// Get Account Number Test Suite
describe("GetAccountNumber", () => {
  // Before Each Test, clear all mocks
  beforeEach(() => {
    vi.clearAllMocks();
  });
  // Test 1: Return formatted account number with symbol
  it("return formatted account number with symbol", () => {
    (GetCheckedValue as MockedFunction<typeof GetCheckedValue>).mockReturnValue(1);
    const RESULT = GetAccountNumber(1, 1234.56);
    expect(RESULT).toBe("$1,234.56");
  });
  // Test 2: Return undefined when number is undefined
  it("return undefined when number is undefined", () => {
    const RESULT = GetAccountNumber(1, undefined);
    expect(RESULT).toBeUndefined();
  });
  // Test 3: Return number when GetCheckedValue returns string
  it("return number when GetCheckedValue returns string", () => {
    (GetCheckedValue as MockedFunction<typeof GetCheckedValue>).mockReturnValue("∞");
    const RESULT = GetAccountNumber(1, 300);
    expect(RESULT).toBe(300);
  });
});
