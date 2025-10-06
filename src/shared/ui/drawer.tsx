// Set this component as a client component
"use client";
// Drawer Requirements
import { IconType } from "react-icons";
import MateoryLogo from "./mateory-logo";
import { FaXmark } from "react-icons/fa6";
import React from "react";
import { useDrawer } from "../model";
// Drawer Props
interface Props {
  readonly MenuIcon: IconType;
  readonly children: React.ReactNode;
  readonly side?: "left" | "right";
  readonly inMobileOnly?: boolean;
  readonly isNav?: boolean;
}
// Drawer Main Function
function Drawer({ MenuIcon, children, side, inMobileOnly, isNav }: Props) {
  // Drawer Hooks
  const { open, toggle, close, enhancedChildren } = useDrawer(children);
  // Drawer Constants
  const POSITION_CLASS = side === "right" ? "right-0" : "left-0";
  const OPEN_CLASS = side === "right" ? "-translate-x-0" : "translate-x-0";
  const CLOSED_CLASS = side === "right" ? "translate-x-full" : "-translate-x-full";
  // Drawer Constant Wrapper
  const ScrollableContent = isNav === true ? "nav" : "div";
  // Return Drawer Component
  return (
    <>
      {/* Drawer Button */}
      <button onClick={toggle} className={inMobileOnly === true ? "lg:hidden" : ""}>
        <MenuIcon className="w-7 h-7 fill-gray-700 hover:cursor-pointer dark:fill-gray-300 high-contrast:fill-black" />
      </button>
      {/* Drawer Overlay */}
      {open && (
        <button
          className={`fixed inset-0 bg-black/40 z-40 high-contrast:bg-black ${inMobileOnly === true ? "lg:hidden" : ""}`}
          onClick={close}
          aria-label="Close drawer"
        />
      )}
      {/* Drawer Menu */}
      <div
        className={`fixed top-0 ${POSITION_CLASS} h-full w-64 bg-gray-50 z-50 transform transition-transform duration-300 ease-in-out dark:bg-gray-950 high-contrast:bg-white ${open ? OPEN_CLASS : CLOSED_CLASS} ${inMobileOnly === true ? "lg:hidden" : ""}`.trimEnd()}
      >
        {/* Drawer Menu Header */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-gray-400/70">
          {/* Drawer Menu Header Logo */}
          <MateoryLogo width={160} height={28} className="w-40 h-7" />
          {/* Drawer Menu Header X Mark Button to Close */}
          <button onClick={close}>
            <FaXmark className="fill-gray-700 hover:cursor-pointer dark:fill-gray-300 high-contrast:fill-black" />
          </button>
        </div>
        {/* Drawer Menu Scrollable Content */}
        <ScrollableContent className="overflow-y-auto h-[calc(100%-4rem)] p-4 space-y-3">
          {enhancedChildren}
        </ScrollableContent>
      </div>
    </>
  );
}

export default Drawer;
