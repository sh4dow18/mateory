// Results Config Requirements
import { SelectOption } from "@/widgets/forms/config/select";
import { InputSettings } from "./input";
// Results Config Required Types
export type ResultConfig = {
  id: string;
  name: string;
  settings: InputSettings | SelectOption[];
};
