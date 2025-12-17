// Page Title Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import PageTitle from "./page-title";
// Page Title Storybook Types
type Story = StoryObj<typeof PageTitle>;
// Page Title Storybook Meta
const meta: Meta<typeof PageTitle> = {
  title: "Shared/PageTitle",
  component: PageTitle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
      description: "Main Title",
    },
    summary: {
      control: "text",
      description: "Summary or Description after main title",
    },
    useLogo: {
      control: { type: "boolean" },
      description: "Display or Hide the Main logo with the title",
    },
  },
};
export default meta;
// Page Title Stories
export const Default: Story = {
  args: {
    title: "Page Title",
    summary: "This is a short description for the page title component.",
    useLogo: false,
  },
};
export const WithLogo: Story = {
  args: {
    title: "Page Title",
    summary: "This page title includes the Mateory logo.",
    useLogo: true,
  },
};
export const ColoredTitle: Story = {
  args: {
    title: {
      first: "Welcome to",
      colored: "Mateory",
    },
    summary: "The title can highlight part of the text using the primary color.",
    useLogo: false,
  },
};
export const ColoredTitleWithLogo: Story = {
  args: {
    title: {
      first: "Discover",
      colored: "Mateory",
    },
    summary: "This variant shows both a colored title and the logo.",
    useLogo: true,
  },
};
