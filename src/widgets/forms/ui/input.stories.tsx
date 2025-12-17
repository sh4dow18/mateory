// Input Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Input from "./input";
// Input Storybook Types
type Story = StoryObj<typeof Input>;
// Input Storybook Meta
const meta: Meta<typeof Input> = {
  title: "Widgets/Forms/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label displayed above the input field",
    },
    example: {
      control: "text",
      description: "Example value shown inside the placeholder",
    },
    name: {
      control: "text",
      description: "Input name and id attribute",
    },
    validation: {
      options: ["name", "email", "number", "1-to-9"],
      control: { type: "radio" },
      description: "Validation rule applied to the input value",
    },
    disabled: {
      control: "boolean",
      description: "Disables the input and validation feedback",
    },
    autoComplete: {
      control: "text",
      description: "Autocomplete attribute for the input",
    },
    maxLength: {
      control: "number",
      description: "Maximum number of characters allowed",
    },
  },
};
export default meta;
// Input Stories
export const Default: Story = {
  args: {
    label: "Username",
    example: "john_doe",
    name: "username",
    validation: "name",
  },
};
export const WithMaxLengthInput: Story = {
  args: {
    label: "Username",
    example: "john_doe",
    name: "username",
    validation: "name",
    maxLength: 20,
  },
};
export const DisabledInput: Story = {
  args: {
    label: "Username",
    example: "john_doe",
    name: "username",
    validation: "name",
    disabled: true,
  },
};
export const EmailInput: Story = {
  args: {
    label: "Email",
    example: "user@email.com",
    name: "email",
    validation: "email",
    autoComplete: "email",
  },
};
export const NumberInput: Story = {
  args: {
    label: "Number",
    example: "123456",
    name: "number",
    validation: "number",
  },
};
export const OneToNineInput: Story = {
  args: {
    label: "One to Nine",
    example: "1",
    name: "oneToNine",
    validation: "1-to-9",
  },
};
