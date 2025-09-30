// Use Routes Tests Suite Requirements
import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import useRoutes from "./use-routes";
// Mock the usePathname hook to control its return value
// Replaces the real usePathname with a mock function.
// Always returns "/" that is home page.
vi.mock("next/navigation", () => ({
  usePathname: vi.fn(() => "/"),
}));
// Test suite for Use Routes hook
describe("useRoutes", () => {
  // Test 1: Have to mark right the current route
  it("mark current route", () => {
    // Render hook in fake DOM
    const { result } = renderHook(() => useRoutes());
    // Find the Active Route
    const ACTIVE_ROUTE = result.current.find((route) => route.isActive);
    // Check if the Active Route is the current one (mock)
    expect(ACTIVE_ROUTE?.path).toBe("");
    // Check if pages that are not home page are inactive
    result.current
      .filter((route) => route.path !== "")
      .forEach((route) => expect(route.isActive).toBe(false));
  });
});
