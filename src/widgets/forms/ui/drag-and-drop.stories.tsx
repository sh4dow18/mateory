// Drag And Drop Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import DragAndDrop from "./drag-and-drop";
// Drag And Drop Storybook Types
type Story = StoryObj<typeof DragAndDrop>;
// Drag And Drop Storybook Meta
const meta: Meta<typeof DragAndDrop> = {
  title: "Widgets/Forms/DragAndDrop",
  component: DragAndDrop,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label displayed above the drag and drop area",
    },
    name: {
      control: "text",
      description: "Input name attribute used for form submission",
    },
    allowedExtensions: {
      control: "object",
      description: "List of allowed file extensions",
    },
    maxMegaBytes: {
      control: "number",
      description: "Maximum allowed file size in megabytes",
    },
  },
};
export default meta;
// Drag And Drop Stories
export const Default: Story = {
  args: {
    label: "Upload file",
    name: "file",
    allowedExtensions: [".pdf", ".png", ".jpg"],
    maxMegaBytes: 5,
  },
};
export const SingleExtension: Story = {
  args: {
    label: "Upload PDF",
    name: "document",
    allowedExtensions: [".pdf"],
    maxMegaBytes: 2,
  },
};
export const LargeFiles: Story = {
  args: {
    label: "Upload large files",
    name: "assets",
    allowedExtensions: [".zip", ".rar", ".mp4"],
    maxMegaBytes: 50,
  },
};
