// Policies Information Requirements
import { LinkType } from "@/shared/config/links";
import { IconType } from "react-icons";
import { FaFont } from "react-icons/fa";
import { TbLicense } from "react-icons/tb";
// Policies Information Types
type Policie = {
  id: number;
  title: string;
  summary: string;
  icon: IconType;
  link?: LinkType;
};
// Policies Information List
export const POLICIES_LIST: Policie[] = [
  {
    id: 1,
    title: "Licencia",
    summary: "Licencia MIT. Haz Clíc para ver más Información",
    icon: TbLicense,
    link: {
      href: "https://github.com/sh4dow18/mateory/blob/main/LICENSE",
      newTab: true,
    },
  },
  {
    id: 2,
    title: "Fuentes",
    summary: "Inter (Oficial), Open Dyslexic (Para Dislexia)",
    icon: FaFont,
  },
];
