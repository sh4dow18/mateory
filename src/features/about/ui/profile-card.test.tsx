// Profile Card Test Suite Requirements
// render: Mounts the component in a virtual DOM for testing
// screen: Provides utilities to query elements
import React, { JSX } from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProfileCard from "./profile-card";
import type { IconType } from "react-icons";
import type { IconBaseProps } from "react-icons/lib";
// Profile Card Test Suite Mocks
const MOCK_ICON: IconType = (props: IconBaseProps): JSX.Element => {
  return <svg aria-label="social-icon" {...props} />;
};
const MOCK_SOCIALS_LIST = [
  {
    id: 1,
    alt: "GitHub",
    icon: MOCK_ICON,
    link: { href: "https://github.com/test", newTab: true },
  },
  {
    id: 2,
    alt: "Twitter",
    icon: MOCK_ICON,
    link: { href: "https://twitter.com/test", newTab: false },
  },
];
// Profile Card Test Suite
describe("Profile Card", () => {
  // Test 1: Render Correctly
  it("render correctly", () => {
    // Mounts component in Fake DOM
    render(
      <ProfileCard
        photo="ramses-solano"
        name="Ramsés Solano"
        role="Desarrollador"
        summary="Texto descriptivo"
        socials={MOCK_SOCIALS_LIST}
      />,
    );
    // Check if Profile Card has the right name
    expect(screen.getByText("Ramsés Solano")).toBeInTheDocument();
    // Check if Profile Card has the right role
    expect(screen.getByText("Desarrollador")).toBeInTheDocument();
    // Check if Profile Card has the right summary
    expect(screen.getByText("Texto descriptivo")).toBeInTheDocument();
    // Check if Profile Card has the right photo
    expect(screen.getByAltText("Ramsés Solano Foto")).toBeInTheDocument();
  });
  // Test 2: Renders social icons Correctly
  it("renders social icons and links with correct attributes", () => {
    // Mounts component in Fake DOM
    render(
      <ProfileCard
        photo="user"
        name="Test"
        role="Tester"
        summary="Summary"
        socials={MOCK_SOCIALS_LIST}
      />,
    );
    // Get all icons in a list
    const ICONS_LIST = screen.getAllByLabelText("social-icon");
    expect(ICONS_LIST.length).toBe(2);
    // Get Github Icon and check if have the right attributtes
    const GITHUB_ICON = screen.getByTitle("GitHub");
    expect(GITHUB_ICON).toHaveAttribute("href", "https://github.com/test");
    expect(GITHUB_ICON).toHaveAttribute("target", "_blank");
    // Get Twitter Icon and check if have the right attributtes
    const TWITTER = screen.getByTitle("Twitter");
    expect(TWITTER).toHaveAttribute("href", "https://twitter.com/test");
    expect(TWITTER).not.toHaveAttribute("target");
  });
});
