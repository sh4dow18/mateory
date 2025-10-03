// Set this component as a client component
"use client";
// Sidebar Nav Requirements
import React from "react";
import { useRoutes, useSidebarNav } from "../model";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
// Sidebar Nav Main Function
function SidebarNav() {
  // Sidebar Nav Hooks
  const { open, toggle } = useSidebarNav();
  const ROUTES_LIST = useRoutes();
  // Return Sidebar Nav Component
  return (
    <aside className="hidden h-svh bg-gray-50 text-gray-700 flex-col border-r border-gray-400/50 dark:bg-gray-950 dark:text-gray-400 lg:flex">
      {/* Sidebar Nav Toggle button */}
      <button
        className="flex justify-center items-center gap-3 p-4 border-b border-gray-400/50 select-none hover:bg-gray-200 hover:cursor-pointer dark:hover:bg-gray-800"
        onClick={toggle}
      >
        {/* Sidebar Nav Toggle button Icon */}
        <FaArrowLeft
          className={`w-6 h-6 transition-transform duration-300 ${open ? "rotate-0" : "rotate-180"}`}
        />
        {/* Sidebar Nav Toggle button Text */}
        {open && <span>Mostrar menos</span>}
      </button>
      {/* Sidebar Nav Links */}
      <nav className="flex flex-col mt-1 overflow-y-auto">
        {ROUTES_LIST.map((route) => (
          <Link
            key={route.path}
            href={`/${route.path}`}
            className={`flex items-center gap-3 px-4 py-3 ${route.isActive ? "bg-primary text-white dark:bg-primary/70" : "text-gray-950 hover:bg-gray-200"}`}
            title={!open ? route.label : undefined}
          >
            <route.Icon className="w-6 h-6" />
            {open && <span>{route.label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default SidebarNav;
