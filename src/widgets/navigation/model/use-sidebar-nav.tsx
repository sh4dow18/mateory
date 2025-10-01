// Set this hook as a client hook
"use client";
// Use Sidebar Nav Requirements
import { useCallback, useState } from "react";
// Use Sidebar Nav Main Function
function useSidebarNav() {
  // Use Sidebar Nav Hooks
  const [open, setOpen] = useState(true);
  // Main Functions to handle hook
  const toggle = useCallback(() => setOpen((prev) => !prev), []);
  // Return new hook values and functions
  return { open, toggle };
}

export default useSidebarNav;
