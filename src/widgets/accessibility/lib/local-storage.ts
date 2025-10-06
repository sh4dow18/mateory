// Accesibility Constants
const ACCESSIBILITY_KEY = "accessibility";
// Accesibility Types
export type AccessibilityState = {
  theme: {
    darkMode: boolean;
    highContrast: boolean;
    grayscale: boolean;
  };
  font: {
    small: boolean;
    large: boolean;
    extraLarge: boolean;
  };
  mode: {
    dyslexia: boolean;
  };
};
// Function that allows to save Accessibility Information in local storage
export function SetAccessibilityPreferences(state: AccessibilityState) {
  // Check if current side rendered is client side
  if (typeof window !== "undefined") {
    // If it is client side, save user preferences
    localStorage.setItem(ACCESSIBILITY_KEY, JSON.stringify(state));
  }
}
// Function that allows to Get Accessibility Information in local storage
export function GetAccessibilityPreferences(): AccessibilityState | null {
  // Check if current side rendered is client side
  if (typeof window !== "undefined") {
    // If it is client side, return user preferences if exists, if not, return null
    const SAVED = localStorage.getItem(ACCESSIBILITY_KEY);
    return SAVED ? JSON.parse(SAVED) : null;
  }
  // Check if current side rendered is server side, return null
  return null;
}
