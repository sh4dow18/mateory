// Form Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Form from "./form";
// Form Storybook Types
type Story = StoryObj<typeof Form>;
// Form Storybook Meta
const meta: Meta<typeof Form> = {
  title: "Widgets/Forms/Form",
  component: Form,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    id: {
      control: "text",
      description: "Unique form identifier used to bind form state",
    },
    onSubmit: {
      description: "Submit handler executed when the form is submitted",
      control: false,
    },
    successAlertMessage: {
      control: "text",
      description: "Message shown in the success alert after submission",
    },
    className: {
      control: "text",
      description: "Optional CSS classes applied to the form element (Tailwind 4)",
    },
    children: {
      description: "Form content",
      control: false,
    },
  },
};
export default meta;
// Form Stories
export const Default: Story = {
  args: {
    id: "example-form",
    successAlertMessage: "Form submitted successfully",
    onSubmit: async () => {
      return Promise.resolve();
    },
    children: (
      <div className="flex flex-col gap-4">
        <input type="text" placeholder="Name" className="border rounded-md px-3 py-2" />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </div>
    ),
  },
};
export const WithCustomStyles: Story = {
  args: {
    id: "styled-form",
    successAlertMessage: "Saved successfully",
    className: "p-4 border rounded-lg",
    onSubmit: async () => {
      return Promise.resolve();
    },
    children: (
      <div className="flex flex-col gap-3">
        <input type="email" placeholder="Email" className="border rounded-md px-3 py-2" />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md">
          Save
        </button>
      </div>
    ),
  },
};
