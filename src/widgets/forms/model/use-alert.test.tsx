// Use Alert Hook Test Suite Requirements
import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useAlert from "./use-alert";
import { DEFAULT_ALERT_SETTINGS, type AlertSettings } from "../config/alert";
// Use Alert Hook Test Suite
describe("useAlert", () => {
  // Test 1: Initial settings match DEFAULT_ALERT_SETTINGS
  it("init correctly", () => {
    // Render Hook in Fake DOM
    const { result } = renderHook(() => useAlert());
    // Check if the return values are the right ones
    expect(result.current.isOpen).toBe(DEFAULT_ALERT_SETTINGS.isOpen);
    expect(result.current.title).toBe(DEFAULT_ALERT_SETTINGS.title);
    expect(result.current.message).toBe(DEFAULT_ALERT_SETTINGS.message);
    expect(result.current.type).toBe(DEFAULT_ALERT_SETTINGS.type);
  });
  // Test 2: UpdateSettings replaces alert state
  it("updates alert settings correctly using UpdateSettings", () => {
    // Render Hook in Fake DOM
    const { result } = renderHook(() => useAlert());
    // Mock Settings
    const MOCK_SETTINGS: AlertSettings = {
      isOpen: true,
      title: "Nuevo título",
      message: "Nuevo mensaje",
      type: "success",
    };
    // Use Hook values that has to wait to check
    act(() => {
      result.current.UpdateSettings(MOCK_SETTINGS);
    });
    // Check if the alert settings are updated
    expect(result.current.isOpen).toBe(MOCK_SETTINGS.isOpen);
    expect(result.current.title).toBe(MOCK_SETTINGS.title);
    expect(result.current.message).toBe(MOCK_SETTINGS.message);
    expect(result.current.type).toBe(MOCK_SETTINGS.type);
  });
  // Test 3: onClick closes the alert
  it("closes the alert when on click is called", () => {
    // Mock Settings
    const MOCK_SETTINGS: AlertSettings = {
      ...DEFAULT_ALERT_SETTINGS,
      isOpen: true,
    };
    // Render Hook in Fake DOM
    const { result } = renderHook(() => useAlert());
    // Check if the alert is closed
    expect(result.current.isOpen).toBe(false);
    // Use Hook values that has to wait to check
    act(() => {
      result.current.UpdateSettings(MOCK_SETTINGS);
    });
    // Check if the alert is opened
    expect(result.current.isOpen).toBe(true);
    // Use Hook values that has to wait to check
    act(() => {
      result.current.onClick();
    });
    // Check if the alert is closed
    expect(result.current.isOpen).toBe(false);
  });
});
