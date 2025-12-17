// Sidebar Nav Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SidebarNav from "./sidebar-nav";
// Sidebar Nav Storybook Types
type Story = StoryObj<typeof SidebarNav>;
// Sidebar Nav Storybook Meta
const meta: Meta<typeof SidebarNav> = {
  title: "Widgets/Navigation/SidebarNav",
  component: SidebarNav,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;
// Sidebar Nav Stories
export const Default: Story = {};
