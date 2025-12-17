// Alert Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Alert from "./alert";
// Alert Storybook Types
type Story = StoryObj<typeof Alert>;
// Alert Storybook Meta
const meta: Meta<typeof Alert> = {
  title: "Widgets/Forms/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div className="p-8">
        <div className="relative">
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["success", "loading", "error"],
      description: "Defines the visual style and icon of the alert",
    },
    title: {
      control: { type: "text" },
      description: "Alert title displayed in bold",
    },
    message: {
      control: { type: "text" },
      description: "Detailed message displayed below the title",
    },
    onClick: {
      action: "onClick",
      description: "Triggered when the alert is clicked (usually to dismiss it)",
    },
  },
};
export default meta;
// Alert Stories
export const SuccessAlert: Story = {
  args: {
    type: "success",
    title: "Success",
    message: "Your action was completed successfully.",
    onClick: () => {},
  },
};
export const LoadingAlert: Story = {
  args: {
    type: "loading",
    title: "Loading",
    message: "Getting Data...",
    onClick: () => {},
  },
};
export const ErrorAlert: Story = {
  args: {
    type: "error",
    title: "Error",
    message: "Something went wrong. Please try again.",
    onClick: () => {},
  },
};
