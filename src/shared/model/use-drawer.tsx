// Set this hook as a client hook
"use client";
// Use Drawer Requirements
import React, { cloneElement, isValidElement, ReactElement, useCallback, useState } from "react";
import Link, { LinkProps } from "next/link";
// Use Drawer Main Function
function useDrawer(children: React.ReactNode) {
  // Use Drawer Hooks
  const [open, setOpen] = useState(false);
  // Main Functions to handle hook
  const toggle = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);
  // Clone children to close drawer with links too
  const enhancedChildren = React.Children.map(children, (child) => {
    // Check if it is a Valid Next.js Link
    if (isValidElement(child) && child.type === Link) {
      // Clone Link to execute drawer close function on click
      return cloneElement(child as ReactElement<LinkProps>, {
        onClick: close,
      });
    }
    // Return child
    return child;
  });
  // Return new hook values and functions
  return { open, toggle, close, enhancedChildren };
}

export default useDrawer;
