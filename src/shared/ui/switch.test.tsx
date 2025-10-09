// Switch Test Suite Requirements
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Switch from "./switch";
import React from "react";
// Test Suite for Switch Component
describe("Switch", () => {
  // Test 1: Render Switch Disabled
  it("render switch disabled", () => {
    // Mount Switch in Fake DOM
    render(<Switch enabled={false} onClick={() => {}} />);
    // Get Switch Button by Role
    const SWITCH_BUTTON = screen.getByRole("switch");
    // Check if switch button is disabled
    expect(SWITCH_BUTTON).toHaveAttribute("aria-checked", "false");
    // CHeck if Switch button has the disabled theme
    expect(SWITCH_BUTTON.className).toMatch(/bg-gray-300/);
  });
  // Test 2: Render Switch Enabled
  it("render switch enabled", () => {
    // Mount Switch in Fake DOM
    render(<Switch enabled={true} onClick={() => {}} />);
    // Get Switch Button by Role
    const SWITCH_BUTTON = screen.getByRole("switch");
    // Check if switch button is enabled
    expect(SWITCH_BUTTON).toHaveAttribute("aria-checked", "true");
    // CHeck if Switch button has the enabled theme
    expect(SWITCH_BUTTON.className).toMatch(/bg-primary/);
  });
  // Test 3: Toggle switch from disabled to enabled
  it("toggle switch state", async () => {
    // Creates an instance that simulates user interactions
    const USER = userEvent.setup();
    // Creates an On Click Mock Function
    const onClick = vi.fn();
    // Mount Switch in Fake DOM
    render(<Switch enabled={false} onClick={onClick} />);
    // Get Switch Button by Role
    const SWITCH_BUTTON = screen.getByRole("switch");
    // Simulate a user click in Switch Button
    await USER.click(SWITCH_BUTTON);
    // Check if on Click was called when the mock user clicked
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
