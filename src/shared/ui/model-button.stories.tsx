// Model Button Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ModelButton from "./model-button";
// Model Button Storybook Types
type Story = StoryObj<typeof ModelButton>;
// Model Button Storybook Meta
const meta: Meta<typeof ModelButton> = {
  title: "Shared/ModelButton",
  component: ModelButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: {
      action: "clicked",
      description: "Callback Function on Click",
    },
    selected: {
      control: { type: "boolean" },
      description: "Define if button was clicked",
    },
    label: {
      control: { type: "text" },
      description: "Text displayed",
    },
  },
};
export default meta;
// Model Button Stories
export const Default: Story = {
  args: {
    label: "Model Button",
    selected: false,
  },
};
export const Selected: Story = {
  args: {
    label: "Selected Button",
    selected: true,
  },
};
export const LongLabel: Story = {
  args: {
    label: "Model Button with a very long label",
    selected: false,
  },
};
export const Interactive: Story = {
  args: {
    label: "Click me",
    selected: false,
  },
};
