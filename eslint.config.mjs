// ESLint Requirements
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import storybook from "eslint-plugin-storybook";
// Get the current file URL as a normal system path
const FILEPATH = fileURLToPath(import.meta.url);
// Get the Directory's name from the File Path
const DIRECTORY_NAME = dirname(FILEPATH);
// Allows to use old ESLint rules in the new Flat Settings from base repository
const COMPAT = new FlatCompat({
  baseDirectory: DIRECTORY_NAME,
});
// ESLint Main Config
const ESLINT_CONFIG = [// Import NextJS and Typescript default rules
...COMPAT.extends("next/core-web-vitals", "next/typescript"), // Ignore this file in check
{
  ignores: [
    "node_modules/**",
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ],
}, ...storybook.configs["flat/recommended"]];

export default ESLINT_CONFIG;
