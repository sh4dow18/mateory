// Sidebar Navigation Constants
const SIDEBAR_NAVIGATION_KEY = "sidebar-nav";
// Function that allows to save Sidebar Navigation State in local storage
export function SetSidebarNavPreference(state: boolean) {
  // Check if current side rendered is client side
  if (typeof window !== "undefined") {
    // If it is client side, save user preferences
    localStorage.setItem(SIDEBAR_NAVIGATION_KEY, `${state}`);
  }
}
// Function that allows to Get Sidebar Navigation State in local storage
export function GetSidebarNavPreference(): boolean | null {
  // Check if current side rendered is client side
  if (typeof window !== "undefined") {
    // If it is client side, return user preferences if exists, if not, return null
    const SAVED = localStorage.getItem(SIDEBAR_NAVIGATION_KEY);
    return SAVED ? SAVED === "true" : null;
  }
  // Check if current side rendered is server side, return null
  return null;
}
