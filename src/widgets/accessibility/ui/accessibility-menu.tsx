// Set this component as a client component
"use client";
// Accessibility Menu Requirements
import { Drawer, Switch } from "@/shared/ui";
import React from "react";
import { MdAccessible } from "react-icons/md";
import { useAccessibility } from "../model";
// Accessibility Menu Main Function
function AccessibilityMenu() {
  // Accessibility Menu Hooks
  const SECTIONS_LIST = useAccessibility();
  // Return Accessibility Menu Component
  return (
    <Drawer MenuIcon={MdAccessible} side="right">
      {SECTIONS_LIST.map((section) => (
        <section key={section.id} className="flex gap-3 p-2">
          <section.Icon
            className={`w-6 h-6 ${section.enabled ? "fill-black dark:fill-white" : "fill-gray-600 dark:fill-gray-400 high-contrast:fill-black"}`}
          />
          <span
            className={`w-32 font-small:text-sm ${section.enabled ? "text-black font-semibold dark:text-white" : "text-gray-600 dark:text-gray-400 high-contrast:text-black"}`}
          >
            {section.label}
          </span>
          <Switch enabled={section.enabled} onClick={section.toggle} />
        </section>
      ))}
    </Drawer>
  );
}

export default AccessibilityMenu;
