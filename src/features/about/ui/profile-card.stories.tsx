// Profile Card Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ProfileCard from "./profile-card";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// Profile Card Storybook Types
type Story = StoryObj<typeof ProfileCard>;
// Profile Card Storybook Meta
const meta: Meta<typeof ProfileCard> = {
  title: "Features/About/ProfileCard",
  component: ProfileCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    photo: {
      control: "text",
      description: "Profile photo filename without extension",
    },
    name: {
      control: "text",
      description: "Person full name",
    },
    role: {
      control: "text",
      description: "Professional role or position",
    },
    summary: {
      control: "text",
      description: "Short profile description or summary",
    },
    socials: {
      control: false,
      description: "List of social network links",
    },
  },
};
export default meta;
// Mock Socials
const SOCIALS = [
  {
    id: 1,
    alt: "GitHub Profile",
    icon: FaGithub,
    link: {
      href: "https://github.com",
      newTab: true,
    },
  },
  {
    id: 2,
    alt: "LinkedIn Profile",
    icon: FaLinkedin,
    link: {
      href: "https://linkedin.com",
      newTab: true,
    },
  },
];
// Profile Card Stories
export const Default: Story = {
  args: {
    photo: "ramses-solano",
    name: "Ramsés Solano",
    role: "Frontend Developer",
    summary:
      "Frontend developer with experience in modern web technologies, focused on building accessible and scalable interfaces.",
    socials: SOCIALS,
  },
};
export const LongSummary: Story = {
  args: {
    photo: "ramses-solano",
    name: "Ramsés Solano",
    role: "UI/UX Designer",
    summary:
      "UI/UX designer specialized in design systems, usability and accessibility. Passionate about creating consistent user experiences across platforms and devices.",
    socials: SOCIALS,
  },
};
export const WithoutSocials: Story = {
  args: {
    photo: "ramses-solano",
    name: "Ramsés Solano",
    role: "Frontend Developer",
    summary:
      "Frontend developer with experience in modern web technologies, focused on building accessible and scalable interfaces.",
    socials: [],
  },
};
