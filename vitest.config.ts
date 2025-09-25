// Vitest Config Requirements
import { defineConfig } from "vitest/config";
// Vitest Config Main Function
export default defineConfig({
  test: {
    // Allows to use test functions without using imports
    globals: true,
    // Use "JSDOM" Environment to test React that needs a browser environment
    environment: "jsdom",
    // File that runs before each test suite, for loading global configurations, mocks or extensions
    setupFiles: "./tests/setup.ts",
  },
});
