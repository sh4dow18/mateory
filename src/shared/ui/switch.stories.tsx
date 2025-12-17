// Switch Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Switch from "./switch";
import React from "react";
// Switch Storybook Types
type Story = StoryObj<typeof Switch>;
interface Props {
  enabled: boolean;
  onClick: () => void;
}
// Switch Storybook Meta
const meta: Meta<typeof Switch> = {
  title: "Shared/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    enabled: {
      control: { type: "boolean" },
      description: "Controls whether the switch is enabled or disabled",
    },
    onClick: {
      action: "onClick",
      description: "Triggered when the switch is clicked",
    },
  },
};
export default meta;
// Switch Stories
export const Disabled: Story = {
  args: {
    enabled: false,
  },
};
export const Enabled: Story = {
  args: {
    enabled: true,
  },
};
const InteractiveSwitch = ({ enabled, onClick }: Props) => {
  const [state, setState] = React.useState(enabled);
  return (
    <Switch
      enabled={state}
      onClick={() => {
        setState(!state);
        onClick();
      }}
    />
  );
};
export const Interactive: StoryObj<Props> = {
  render: (args) => <InteractiveSwitch {...args} />,
  args: {
    enabled: false,
    onClick: () => {},
  },
};
