// Header Requirements
import { DrawerNav } from "@/widgets/navigation/ui";
import { MateoryLogo } from "@/widgets/images/ui";
import Link from "next/link";
import { AccessibilityMenu } from "@/widgets/accessibility/ui";
// Header Main Function
function Header() {
  // Return Header Component
  return (
    <header className="bg-gray-50 px-4 py-5 flex items-center place-content-between border-b border-gray-400/50 dark:bg-gray-950 high-contrast:bg-white high-contrast:border-black">
      {/* Header Main Header */}
      <div className="flex">
        {/* Drawer Menu */}
        <DrawerNav />
        {/* Mateory Logo */}
        <Link href="/" title="Inicio" className="ml-5">
          <MateoryLogo width={160} height={28} className="w-40 h-7" />
        </Link>
      </div>
      {/* Accessibility menu */}
      <AccessibilityMenu />
    </header>
  );
}

export default Header;
