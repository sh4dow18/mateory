// Input Icon Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import InputIcon from "./input-icon";
// Input Icon Storybook Types
type Story = StoryObj<typeof InputIcon>;
// Input Icon Storybook Meta
const meta: Meta<typeof InputIcon> = {
  title: "Widgets/Forms/InputIcon",
  component: InputIcon,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    status: {
      options: ["Neutral", "Valid", "Invalid"],
      control: { type: "radio" },
      description: "Visual status of the input validation state",
    },
    disabled: {
      control: "boolean",
      description: "Disables the icon visibility when set to true",
    },
  },
};
export default meta;
// Input Icon Stories
export const Neutral: Story = {
  args: {
    status: "Neutral",
  },
};
export const Valid: Story = {
  args: {
    status: "Valid",
  },
};
export const Invalid: Story = {
  args: {
    status: "Invalid",
  },
};
export const Disabled: Story = {
  args: {
    status: "Valid",
    disabled: true,
  },
};
