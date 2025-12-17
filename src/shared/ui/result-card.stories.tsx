// Result Card Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ResultCard from "./result-card";
// Result Card Storybook Types
type Story = StoryObj<typeof ResultCard>;
// Result Card Storybook Meta
const meta: Meta<typeof ResultCard> = {
  title: "Shared/ResultCard",
  component: ResultCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Label displayed at the top of the result card",
    },
    value: {
      control: { type: "text" },
      description: "Value displayed in the card; if undefined, shows 'No Aplica'",
    },
  },
};
export default meta;
// Result Card Stories
export const Default: Story = {
  args: {
    label: "Nivel de Inventario Máximo",
    value: "$1,123.32",
  },
};
export const NumericValue: Story = {
  args: {
    label: "Score",
    value: 98,
  },
};
export const Disabled: Story = {
  args: {
    label: "Not Applicable",
    value: undefined,
  },
};
