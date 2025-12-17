// Summary Card Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FaChartPie } from "react-icons/fa";
import SummaryCard from "./summary-card";
// Summary Card Storybook Types
type Story = StoryObj<typeof SummaryCard>;
// Summary Card Storybook Meta
const meta: Meta<typeof SummaryCard> = {
  title: "Shared/SummaryCard",
  component: SummaryCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: { type: "text" },
      description: "Title displayed at the top of the summary card",
    },
    summary: {
      control: { type: "text" },
      description: "Short descriptive text displayed below the title",
    },
    Icon: {
      control: false,
      description: "Optional icon displayed before the title",
    },
    colored: {
      control: { type: "boolean" },
      description: "Applies the colored card background style",
    },
    wrapTitle: {
      control: { type: "boolean" },
      description: "Allows the title section to wrap when content overflows",
    },
    link: {
      options: ["None", "External", "Internal"],
      control: { type: "radio" },
      description: "Optional link applied to the card",
      mapping: {
        None: null,
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
// Summary Card Stories
export const Default: Story = {
  args: {
    title: "Summary Title",
    summary: "This is a short summary describing the content of the card.",
  },
};
export const WithIcon: Story = {
  args: {
    title: "With Icon",
    summary: "This summary card includes an icon next to the title.",
    Icon: FaChartPie,
  },
};
export const Colored: Story = {
  args: {
    title: "Colored Summary",
    summary: "This variant uses the colored background style.",
    colored: true,
  },
};
export const WithLink: Story = {
  args: {
    title: "Linked Summary",
    summary: "Clicking this card will redirect the user.",
    link: {
      href: "https://example.com",
      message: "example.com",
      newTab: true,
    },
  },
};
export const WrappedTitle: Story = {
  args: {
    title: "This is a very long title that demonstrates wrapping behavior",
    summary: "The title section is allowed to wrap into multiple lines.",
    wrapTitle: true,
    Icon: FaChartPie,
  },
};
