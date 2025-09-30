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
          // onClick={close}
          className={`flex gap-3 p-3 ${route.isActive ? "bg-primary/50 text-white rounded-md" : "text-gray-400"}`}
        >
          {<route.Icon className="w-6 h-6" />} {route.label}
        </Link>
      ))}
    </Drawer>
  );
}

export default DrawerNav;
