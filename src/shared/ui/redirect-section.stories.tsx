// Redirect Section Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FaExternalLinkAlt } from "react-icons/fa";
import RedirectSection from "./redirect-section";
// Redirect Section Storybook Types
type Story = StoryObj<typeof RedirectSection>;
// Redirect Section Storybook Meta
const meta: Meta<typeof RedirectSection> = {
  title: "Shared/RedirectSection",
  component: RedirectSection,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    Icon: {
      control: false,
      description: "Icon component displayed at the beginning of the section",
    },
    message: {
      control: { type: "text" },
      description: "Message displayed before the link",
    },
    link: {
      options: ["External", "Internal"],
      control: { type: "radio" },
      description: "Link configuration for the redirect action",
      mapping: {
        External: {
          href: "https://example.com",
          message: "Go to example.com",
          newTab: true,
        },
        Internal: {
          href: "/about",
          message: "Go to About page",
          newTab: false,
        },
      },
    },
  },
};
export default meta;
// Redirect Section Stories
export const Default: Story = {
  args: {
    Icon: FaExternalLinkAlt,
    message: "You will be redirected to:",
    link: {
      href: "https://github.com/sh4dow18",
      message: "Go to Sh4dow18 Github",
      newTab: true,
    },
  },
};
export const InternalRedirect: Story = {
  args: {
    Icon: FaExternalLinkAlt,
    message: "Read more about us at:",
    link: {
      href: "/about",
      message: "Go to About page",
      newTab: false,
    },
  },
};
