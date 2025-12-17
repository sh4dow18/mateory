// Card Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LinkType } from "../config/links";
import Card from "./card";
// Card Storybook Types
type Story = StoryObj<typeof Card>;
// Card Storybook Meta
const meta: Meta<typeof Card> = {
  title: "Shared/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    link: {
      options: ["None", "External", "Internal"],
      control: { type: "radio" },
      mapping: {
        None: null,
        External: {
          href: "https://example.com",
          newTab: true,
        },
        Internal: {
          href: "/about",
          newTab: false,
        },
      },
    },
  },
};
export default meta;
// Card Stories
export const Default: Story = {
  args: {
    children: <></>,
  },
};
export const Colored: Story = {
  args: {
    colored: true,
    children: <></>,
  },
};
export const WithLink: Story = {
  args: {
    link: {
      href: "https://github.com/sh4dow18",
      message: "GitHub",
      newTab: true,
    } as LinkType,
    children: <></>,
  },
};
export const InternalLink: Story = {
  args: {
    link: {
      href: "about",
      message: "Internal Page",
      newTab: false,
    } as LinkType,
    children: <></>,
  },
};
