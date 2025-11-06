// Input Config Requirements
import { VariableValidation } from "@/shared/config/variables";
// Input Types
export type InputStatus = "Valid" | "Neutral" | "Invalid";
export type InputSettings = {
  example: string;
  validation: VariableValidation;
  maxLength: number;
};
// Input Help Messages to use in Inputs
export const HELP_MESSAGE: Record<string, string> = {
  // Only Positive Numbers
  // Example: 8000 or 9502.43
  number: "Solamente Números Positivos",
  // Only Integer Numbers from 1 to 9
  // Example: 1 or 9
  "1-to-9": "Solamente Números del 1 al 9",
};
