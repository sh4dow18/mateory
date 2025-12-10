// Storybook Preview Config Requirements
import type { Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css";
// Storybook Preview Config Global Types
export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Cambia el tema",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush",
      items: [
        { value: "light", title: "Light" },
        { value: "dark", title: "Dark" },
        { value: "high-contrast", title: "High Contrast" },
        { value: "font-small", title: "Font Small" },
        { value: "font-large", title: "Font Large" },
        { value: "font-xlarge", title: "Font XLarge" },
      ],
    },
  },
};
// Storybook Preview Config
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [
    (Story, context) => {
      // Get Context Theme
      const THEME = context.globals.theme;
      // Remove other classes from body
      document.body.classList.remove(
        "dark",
        "high-contrast",
        "font-small",
        "font-large",
        "font-xlarge",
      );
      // If theme is not light, add class to body
      if (THEME !== "light") {
        document.body.classList.add(THEME);
      }
      // Return Story
      return Story();
    },
  ],
};

export default preview;
