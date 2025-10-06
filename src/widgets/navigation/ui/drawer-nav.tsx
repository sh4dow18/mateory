// Set this component as a client component
"use client";
// Drawer Nav Requirements
import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Drawer } from "@/shared/ui";
import Link from "next/link";
import { useRoutes } from "../model";
// Drawer Nav Main Function
function DrawerNav() {
  // Drawer Nav Hooks
  const ROUTES_LIST = useRoutes();
  // Return Drawer Nav Component
  return (
    <Drawer MenuIcon={CiMenuBurger} inMobileOnly isNav>
      {ROUTES_LIST.map((route) => (
        <Link
          key={route.path}
          href={`/${route.path}`}
          className={`flex gap-3 p-3 items-center font-small:text-sm font-large:text-lg font-xlarge:text-xl ${route.isActive ? "bg-primary text-white rounded-md dark:bg-primary/50" : "text-gray-950 dark:text-gray-400 high-contrast:text-black"}`}
        >
          {<route.Icon className="w-6 h-6" />} {route.label}
        </Link>
      ))}
    </Drawer>
  );
}

export default DrawerNav;
