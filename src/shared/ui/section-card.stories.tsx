// Section Card Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SectionCard from "./section-card";
// Section Card Storybook Types
type Story = StoryObj<typeof SectionCard>;
// Section Card Storybook Meta
const meta: Meta<typeof SectionCard> = {
  title: "Shared/SectionCard",
  component: SectionCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: { type: "text" },
      description: "Title displayed at the top of the section card",
    },
    className: {
      control: { type: "text" },
      description: "Optional class names applied to the content wrapper (Tailwind 4)",
    },
    children: {
      control: false,
      description: "Content rendered inside the section card",
    },
    nodeWithTitle: {
      control: false,
      description: "Optional node rendered next to the title",
    },
  },
};
export default meta;
// Section Card Stories
export const Default: Story = {
  args: {
    title: "Section Title",
    children: "Section content goes here",
  },
};
export const WithCustomContent: Story = {
  args: {
    title: "Custom Content",
    className: "text-sm shadow-md italic",
    children: "This section card contains custom styled content",
  },
};
export const WithNodeWithTitle: Story = {
  args: {
    title: "Section With Action",
    nodeWithTitle: (
      <button type="button" className="text-sm text-primary hover:underline hover:cursor-pointer">
        Action
      </button>
    ),
    children: "This section includes an action node next to the title",
  },
};
