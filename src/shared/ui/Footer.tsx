// Footer Requirements
import { FaGithub } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";
import { DiMitlicence } from "react-icons/di";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
// Footer Main Function
function Footer() {
  // Footer Constants
  const FOOTER_LOGOS_LIST: { id: number; name: string; url: string; Icon: IconType }[] = [
    { id: 1, name: "Github", url: "https://github.com/sh4dow18/mateory", Icon: FaGithub },
    {
      id: 2,
      name: "Documentación",
      url: "https://ramses-solano.vercel.app/mateory",
      Icon: HiDocumentText,
    },
    { id: 3, name: "Licencia", url: "https://opensource.org/license/mit", Icon: DiMitlicence },
  ];
  // Return Footer Component
  return (
    <footer className="bg-gray-900 px-10 py-10 flex flex-col gap-7 border-t border-gray-400/50 md:flex-row md:place-content-between">
      {/* Footer Logos Container */}
      <div className="flex gap-7 justify-center md:order-2">
        {/* Display all Footer Logos List Links */}
        {FOOTER_LOGOS_LIST.map((logo) => (
          <Link
            key={logo.id}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            title={logo.name}
          >
            <logo.Icon className="w-6 h-6 text-gray-400 transition hover:text-white hover:scale-110" />
          </Link>
        ))}
      </div>
      {/* Copyright Paragraph */}
      <p className="text-center text-gray-400 text-sm leading-6 md:order-1">
        © 2025 Ramsés Solano. Casi todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
