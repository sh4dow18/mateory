// Use Drawer Tests Suite Requirements
// renderHook: Allows to run a React hook in a test environment without building a full component
// act: Ensures all React state updates are processed correctly before making assertions
import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { act, ReactElement } from "react";
import useDrawer from "./use-drawer";
import Link, { LinkProps } from "next/link";
import React from "react";
// Test suite for Use Drawer hook
describe("useDrawer", () => {
  // Test 1: Use Drawer has to init open as false
  it("init with open as false", () => {
    // Render hook in fake DOM
    const { result } = renderHook(() => useDrawer(<div>child</div>));
    // Check if drawer is closed
    expect(result.current.open).toBe(false);
  });
  // Test 2: Toggle have to open drawer
  it("open drawer", async () => {
    // Render hook in fake DOM
    const { result } = renderHook(() => useDrawer(<div>child</div>));
    // Use Hook values that has to wait to check
    act(() => {
      // Tries to open drawer
      result.current.toggle();
    });
    // Check if Drawer is Open
    expect(result.current.open).toBe(true);
  });
  // Test 3: Close have to close drawer
  it("close drawer", () => {
    // Render hook in fake DOM
    const { result } = renderHook(() => useDrawer(<div>child</div>));
    // Use Hook values that has to wait to check
    act(() => {
      // Tries to open drawer
      result.current.toggle();
      // Tries to close drawer
      result.current.close();
    });
    // Check if Drawer is closed
    expect(result.current.open).toBe(false);
  });
  // Test 4: Links have to close drawer
  it("link close drawer", () => {
    // Render hook in fake DOM
    const { result } = renderHook(() => useDrawer(<Link href="/profile">Profile</Link>));
    // Check if drawer is closed
    expect(result.current.open).toBe(false);
    // Use Hook values that has to wait to check
    act(() => {
      // Tries to open drawer
      result.current.toggle();
    });
    // Check if drawer is opened
    expect(result.current.open).toBe(true);
    // Use Hook values that has to wait to check
    act(() => {
      // Get Children as an Array
      const CHILDREN = result.current.enhancedChildren as ReactElement<LinkProps>[];
      // Get Link from Children Array
      const LINK = CHILDREN[0];
      // Tries to Execute on Click
      LINK.props.onClick?.({} as React.MouseEvent<HTMLAnchorElement>);
    });
    // Check if drawer is closed
    expect(result.current.open).toBe(false);
  });
});
