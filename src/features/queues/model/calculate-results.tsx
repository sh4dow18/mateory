// Calculate Results Requrements
import { GetEnabledQueueResults } from "../config";
// Calculate Results Main Function
export function CalculateResults(selectedModel: string) {
  // Return all Results
  return GetEnabledQueueResults(selectedModel, "100");
}
