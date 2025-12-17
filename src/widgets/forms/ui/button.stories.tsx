// Form Button Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./button";
// Form Button Storybook Types
type Story = StoryObj<typeof Button>;
// Form Button Storybook Meta
const meta: Meta<typeof Button> = {
  title: "Widgets/Forms/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    form: {
      control: { type: "text" },
      description: "ID of the form this button is associated with",
    },
    display: {
      control: { type: "text" },
      description: "Text displayed inside the button",
    },
    full: {
      control: { type: "boolean" },
      description: "Expands the button to full width",
    },
  },
};
export default meta;
// Form Button Stories
export const Default: Story = {
  args: {
    form: "example-form",
    display: "Submit",
  },
};
export const FullWidth: Story = {
  args: {
    form: "example-form",
    display: "Submit",
    full: true,
  },
};
