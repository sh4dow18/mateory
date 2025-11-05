// Model Types
export type Model = {
  id: string;
  name: string;
};
export type ModelFilterMode = "include" | "different";
// Function that allows to get a list of disabled models filtered by an element
export const GetDisabledModels = (modelsList: Model[], filter: string, mode: ModelFilterMode) => {
  // Returns a list filtered by include or different mode
  return modelsList
    .filter((model) => (mode === "include" ? model.id.includes(filter) : model.id !== filter))
    .map((model) => model.id);
};
