// Set this hook as a client hook
"use client";
// Use Routes Requirements
import { ROUTES_LIST } from "@/shared/config/routes";
import { usePathname } from "next/navigation";
// Use Routes Main Function
function useRoutes() {
  // Use Routes Hooks
  const PATHNAME = usePathname();
  // New Routes List to know the current page
  const NEW_ROUTES_LIST = ROUTES_LIST.map((link) => ({
    ...link,
    isActive: PATHNAME === `/${link.path}`,
  }));
  // Return new Routes List
  return NEW_ROUTES_LIST;
}

export default useRoutes;
