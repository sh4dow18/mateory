// Redirect Section Test Suite Requirements
// render: Mounts the component in a virtual DOM for testing
// screen: Provides utilities to query elements
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import RedirectSection from "./redirect-section";
// Redirect Section Test Suite Mocks
function MockIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg data-testid="mock-icon" {...props} />;
}
// Redirect Section Test Suite
describe("RedirectSection", () => {
  // Test 1: Renders Correctly
  it("renders correctly", () => {
    // Redirect Section Main Props Mock
    const MOCK_LINK_SETTINGS = {
      href: "/test",
      newTab: false,
      message: "Ir a prueba",
    };
    // Mounts component in Fake DOM
    render(<RedirectSection Icon={MockIcon} message="Hola Mundo" link={MOCK_LINK_SETTINGS} />);
    // Check message
    expect(screen.getByText("Hola Mundo")).toBeInTheDocument();
    // Check link message
    expect(screen.getByText("Ir a prueba")).toBeInTheDocument();
    // Check link element
    const LINK = screen.getByRole("link");
    expect(LINK).toHaveAttribute("href", "/test");
    // Should NOT have target when newTab = false
    expect(LINK).not.toHaveAttribute("target");
  });
  // Test 2: Renders fallback link message when link.message is missing
  it("uses link href as fallback message when link message is not provided", () => {
    // Redirect Section Main Props Mock
    const MOCK_LINK_SETTINGS = {
      href: "/fallback",
      newTab: false,
    };
    // Mounts component in Fake DOM
    render(<RedirectSection Icon={MockIcon} message="Test" link={MOCK_LINK_SETTINGS} />);
    // Check fallback message
    expect(screen.getByText("/fallback")).toBeInTheDocument();
  });
  // Test 3: Opens in new tab when newTab is true
  it("adds target _blank when newTab is true", () => {
    // Redirect Section Main Props Mock
    const MOCK_LINK_SETTINGS = {
      href: "/external",
      newTab: true,
      message: "Externo",
    };
    // Mounts component in Fake DOM
    render(<RedirectSection Icon={MockIcon} message="Mensaje" link={MOCK_LINK_SETTINGS} />);
    // Check link target
    const LINK = screen.getByRole("link");
    expect(LINK).toHaveAttribute("target", "_blank");
  });
});
