// Drawer Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Drawer from "./drawer";
import { FaBars } from "react-icons/fa";
// Drawer Storybook Types
type Story = StoryObj<typeof Drawer>;
// Drawer Storybook Meta
const meta: Meta<typeof Drawer> = {
  title: "Widgets/Navigation/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    MenuIcon: {
      control: false,
      description: "Menu Icon to display",
    },
    children: {
      control: false,
      description: "Display Content",
    },
    side: {
      options: ["left", "right"],
      control: { type: "radio" },
      description: "Side from which the drawer appears",
    },
    inMobileOnly: {
      control: "boolean",
      description: "Render drawer button only on mobile devices",
    },
    isNav: {
      control: "boolean",
      description: "Render scrollable content as a <nav> element",
    },
  },
};
export default meta;
// Drawer Stories
export const Default: Story = {
  args: {
    MenuIcon: FaBars,
    children: (
      <ul className="space-y-3">
        <li className="hover:underline cursor-pointer">Dashboard</li>
        <li className="hover:underline cursor-pointer">Profile</li>
        <li className="hover:underline cursor-pointer">Settings</li>
      </ul>
    ),
  },
};
export const RightSide: Story = {
  args: {
    MenuIcon: FaBars,
    side: "right",
    children: (
      <ul className="space-y-3">
        <li className="hover:underline cursor-pointer">Notifications</li>
        <li className="hover:underline cursor-pointer">Messages</li>
        <li className="hover:underline cursor-pointer">Logout</li>
      </ul>
    ),
  },
};
export const NavigationDrawer: Story = {
  args: {
    MenuIcon: FaBars,
    isNav: true,
    children: (
      <ul className="space-y-3">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">Projects</li>
        <li className="hover:underline cursor-pointer">Contact</li>
      </ul>
    ),
  },
};
export const MobileOnly: Story = {
  args: {
    MenuIcon: FaBars,
    inMobileOnly: true,
    children: (
      <ul className="space-y-3">
        <li className="hover:underline cursor-pointer">Menu Item 1</li>
        <li className="hover:underline cursor-pointer">Menu Item 2</li>
      </ul>
    ),
  },
};
