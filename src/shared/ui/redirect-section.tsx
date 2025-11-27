// Redirect Section Requirements
import React from "react";
import { IconType } from "react-icons";
import { LinkType } from "../config/links";
import Link from "next/link";
// Redirect Section Props
interface Props {
  readonly Icon: IconType;
  readonly message: string;
  readonly link: LinkType;
}
// Redirect Section Main Function
function RedirectSection({ Icon, message, link }: Props) {
  // Redirect Section Main Constants
  const LINK_TARGET = link.newTab === true ? "_blank" : undefined;
  const LINK_MESSAGE = link.message || link.href;
  // Return Redirect Section Component
  return (
    <section className="flex flex-col gap-2 text-gray-600 justify-self-center text-center dark:text-gray-400 high-contrast:text-black font-small:text-sm font-large:text-lg font-xlarge:text-xl md:flex-row md:text-left">
      <Icon className="w-6 h-6 mx-auto md:mx-0" />
      <p>{message}</p>
      <Link
        href={link.href}
        target={LINK_TARGET}
        className="text-primary font-medium hover:underline dark:text-primary-light"
      >
        {LINK_MESSAGE}
      </Link>
    </section>
  );
}

export default RedirectSection;
