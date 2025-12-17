// Mateory Logo Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import MateoryLogo from "./mateory-logo";
// Mateory Logo Storybook Types
type Story = StoryObj<typeof MateoryLogo>;
// Mateory Logo Storybook Meta
const meta: Meta<typeof MateoryLogo> = {
  title: "Widgets/Images/MateoryLogo",
  component: MateoryLogo,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    width: {
      control: { type: "number", min: 40 },
      description: "Rendered logo width in pixels",
    },
    height: {
      control: { type: "number", min: 20 },
      description: "Rendered logo height in pixels",
    },
    className: {
      control: "text",
      description: "Optional CSS class names applied to the image",
    },
  },
};
export default meta;
// Mateory Logo Stories
export const Default: Story = {
  args: {
    width: 160,
    height: 28,
  },
};
export const Large: Story = {
  args: {
    width: 288,
    height: 48,
  },
};
export const WithCustomClass: Story = {
  args: {
    width: 160,
    height: 28,
    className: "shadow-md p-2",
  },
};
