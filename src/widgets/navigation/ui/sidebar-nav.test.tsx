// Use Sidebar Nav Test suite Requirements
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import SidebarNav from "./sidebar-nav";
import userEvent from "@testing-library/user-event";
import { beforeEach } from "node:test";
import React from "react";
// Mock Values to use in Vi.Mock
const { useSidebarNavMock, toggleMock, useRoutesMock } = vi.hoisted(() => {
  return {
    toggleMock: vi.fn(),
    useSidebarNavMock: vi.fn(),
    useRoutesMock: vi.fn(() => [
      {
        path: "",
        label: "Inicio",
        Icon: () => <div data-testid="icon-home" />,
        isActive: true,
      },
    ]),
  };
});
// Mock useSidebarNav and useRoutes hooks to control these return value
// Replaces the real results with a mock function.
// Always returns Mock Values.
vi.mock("../model", () => ({
  useSidebarNav: useSidebarNavMock,
  useRoutes: useRoutesMock,
}));
// Test suite for Use Sidebar Nav Component
describe("SidebarNav", () => {
  // Clean All Mocks before each test call
  beforeEach(() => {
    vi.clearAllMocks();
  });
  // Test 1: Check if Sidebar is visible
  it("render sidebar", () => {
    // Mock useSideBar Hook Return Value
    useSidebarNavMock.mockReturnValue({ open: true });
    // Mounts component
    render(<SidebarNav />);
    // Check if Toggle button is in the document
    expect(screen.getByText("Mostrar menos")).toBeInTheDocument();
    // Check if Link is in the document
    expect(screen.getByText("Inicio")).toBeInTheDocument();
    // Check if Icon Link is in the document
    expect(screen.getByTestId("icon-home")).toBeInTheDocument();
  });
  // Test 2: Hide labels when sidebar is closed
  it("hide labels when sidebar is closed", () => {
    // Mock useSideBar Hook Return Value
    useSidebarNavMock.mockReturnValue({ open: false });
    // Mounts component
    render(<SidebarNav />);
    // Check if Toggle button is not in the document
    expect(screen.queryByText("Mostrar menos")).not.toBeInTheDocument();
    // Check if Link is not in the document
    expect(screen.queryByText("Inicio")).not.toBeInTheDocument();
    // Check if Icon Link is in the document
    expect(screen.getByTestId("icon-home")).toBeInTheDocument();
  });
  // Test 3: Hide labels when used click toggle button
  it("hide lables when user click in toggle button", async () => {
    // Creates an instance that simulates user interactions
    const USER = userEvent.setup();
    // Mock useSideBar Hook Return Value
    useSidebarNavMock.mockReturnValue({ open: true, toggle: toggleMock });
    // Mounts component
    render(<SidebarNav />);
    // Simulate a user click in Toggle Button
    await USER.click(screen.getByText("Mostrar menos"));
    // Check if toggle was called when the mock user clicked
    expect(toggleMock).toHaveBeenCalledTimes(1);
  });
});
