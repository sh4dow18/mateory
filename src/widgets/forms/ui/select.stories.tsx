// Select Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Select from "./select";
import { SelectOption } from "../config/select";
// Select Storybook Types
type Story = StoryObj<typeof Select>;
// Select Storybook Meta
const meta: Meta<typeof Select> = {
  title: "Widgets/Forms/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label displayed above the select field",
    },
    name: {
      control: "text",
      description: "Select name and id attribute",
    },
    optionsList: {
      control: "object",
      description: "List of selectable options",
    },
  },
};
export default meta;
// Select Stories
export const Default: Story = {
  args: {
    label: "Category",
    name: "category",
    optionsList: [
      { value: 1, display: "Frontend" },
      { value: 2, display: "Backend" },
      { value: 3, display: "Fullstack" },
    ] as SelectOption[],
  },
};
export const WithManyOptions: Story = {
  args: {
    label: "Country",
    name: "country",
    optionsList: [
      { value: 1, display: "Costa Rica" },
      { value: 2, display: "Mexico" },
      { value: 3, display: "Argentina" },
      { value: 4, display: "Spain" },
      { value: 5, display: "United States" },
    ] as SelectOption[],
  },
};
export const SingleOption: Story = {
  args: {
    label: "Role",
    name: "role",
    optionsList: [{ value: 1, display: "Administrator" }] as SelectOption[],
  },
};
