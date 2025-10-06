// Set this hook as a client hook
"use client";
// Use Sidebar Nav Requirements
import { useCallback, useEffect, useRef, useState } from "react";
import { GetSidebarNavPreference, SetSidebarNavPreference } from "../lib/local-storage";
// Use Sidebar Nav Main Function
function useSidebarNav() {
  // Use Sidebar Nav Hooks
  const [open, setOpen] = useState(true);
  const PREFERENCE_LOADED = useRef(false);
  // useEffect that will Set User Preferences in Hook when page is loading
  useEffect(() => {
    // Get User Preferences from Local Storage
    const USER_PREFERENCE = GetSidebarNavPreference();
    // Check if exist the user preferences
    if (USER_PREFERENCE !== null) {
      // If exists, add value in hook
      setOpen(USER_PREFERENCE);
    }
    // Set preferences loaded as true
    PREFERENCE_LOADED.current = true;
  }, []);
  // useEffect that will Set User Preferences in local storage when change in sidebar nav menu
  useEffect(() => {
    // If user preferences are loaded, set new accessibility preferences
    if (PREFERENCE_LOADED.current) {
      SetSidebarNavPreference(open);
    }
  }, [open]);
  // Main Functions to handle hook
  const toggle = useCallback(() => setOpen((prev) => !prev), []);
  // Return new hook values and functions
  return { open, toggle };
}

export default useSidebarNav;
