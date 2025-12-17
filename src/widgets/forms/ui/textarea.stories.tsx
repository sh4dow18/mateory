// Textarea Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Textarea from "./textarea";
// Textarea Storybook Types
type Story = StoryObj<typeof Textarea>;
// Textarea Storybook Meta
const meta: Meta<typeof Textarea> = {
  title: "Widgets/Forms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label displayed above the textarea",
    },
    name: {
      control: "text",
      description: "Textarea name and id attribute",
    },
    example: {
      control: "text",
      description: "Example placeholder shown inside the textarea",
    },
    maxLength: {
      control: { type: "number", min: 10 },
      description: "Maximum number of allowed characters",
    },
    rows: {
      control: { type: "number", min: 2 },
      description: "Visible number of textarea rows",
    },
  },
};
export default meta;
// Textarea Stories
export const Default: Story = {
  args: {
    label: "Description",
    name: "description",
    example: "Write a short description",
  },
};
export const WithMaxLength: Story = {
  args: {
    label: "Comment",
    name: "comment",
    example: "Write your comment here",
    maxLength: 120,
  },
};
export const WithCustomRows: Story = {
  args: {
    label: "Message",
    name: "message",
    example: "Write a detailed message",
    rows: 10,
  },
};
