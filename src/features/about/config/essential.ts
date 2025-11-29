// Essential Information Requirements
import { LinkType } from "@/shared/config/links";
import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { GrDocumentConfig } from "react-icons/gr";
import { MdDriveFileRenameOutline } from "react-icons/md";
// Essential Information Types
type EssentialInformation = {
  id: number;
  title: string;
  summary: string;
  icon: IconType;
  link?: LinkType;
};
// Essential Information List
export const ESSENTIAL_INFORMATION_LIST: EssentialInformation[] = [
  {
    id: 1,
    title: "Nombre",
    summary: "Mateory",
    icon: MdDriveFileRenameOutline,
  },
  {
    id: 2,
    title: "Versión",
    summary: "0.5.1",
    icon: FaGithub,
  },
  {
    id: 3,
    title: "Realizado",
    summary: "29 de Noviembre del 2025",
    icon: FaClockRotateLeft,
  },
  {
    id: 4,
    title: "Cambios",
    summary: "Clíc Aquí para Ver",
    icon: GrDocumentConfig,
    link: {
      href: "https://github.com/sh4dow18/mateory-fsd/blob/main/CHANGELOG.md",
      newTab: true,
    },
  },
];
