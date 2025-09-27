// Header Requirements
import MateoryLogo from "./mateory-logo";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { MdAccessible } from "react-icons/md";
// Header Main Function
function Header() {
  // Return Header Component
  return (
    <header className="bg-gray-900 px-4 py-5 flex items-center place-content-between border-b border-gray-400/50">
      {/* Header Main Header */}
      <div className="flex">
        {/* Drawer Menu */}
        <CiMenuBurger className="w-7 h-7 fill-gray-50 hover:cursor-pointer lg:hidden" />
        {/* Mateory Logo */}
        <Link href="/" title="Inicio" className="ml-5">
          <MateoryLogo width={160} height={28} className="w-40 h-7" />
        </Link>
      </div>
      {/* Accessibility menu */}
      <MdAccessible className="w-7 h-7 fill-gray-50 mr-5 transition hover:cursor-pointer hover:scale-120" />
    </header>
  );
}

export default Header;
