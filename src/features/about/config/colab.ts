// Colab Information Requirements
import { LinkType } from "@/shared/config/links";
import { IconType } from "react-icons";
import { CgBrowser } from "react-icons/cg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// Colab Information Types
type Colab = {
  id: number;
  photo: string;
  name: string;
  role: string;
  summary: string;
  socials: Social[];
};
export type Social = {
  id: number;
  icon: IconType;
  link: LinkType;
  alt: string;
};
// Colab Information List
export const COLAB_LIST: Colab[] = [
  {
    id: 1,
    photo: "ramses-solano",
    name: "Ramsés Solano",
    role: "Creador de Mateory",
    summary:
      "Profesional en Programación de Aplicaciones Informáticas apasionado por resolver problemas y mejorar habilidades, aportando liderazgo, innovación y compromiso en cada proyecto.",
    socials: [
      {
        id: 1,
        icon: FaGithub,
        link: {
          href: "https://github.com/sh4dow18",
          newTab: true,
        },
        alt: "Github",
      },
      {
        id: 2,
        icon: FaLinkedin,
        link: {
          href: "https://www.linkedin.com/in/ramsés-solano-arias-981029227",
          newTab: true,
        },
        alt: "Linkedin",
      },
      {
        id: 3,
        icon: CgBrowser,
        link: {
          href: "https://ramses-solano.vercel.app",
          newTab: true,
        },
        alt: "Portafolio",
      },
    ],
  },
  {
    id: 2,
    photo: "esteban-martinez",
    name: "Esteban Martínez",
    role: "Diseño de Fórmulas",
    summary:
      "Docente de matemática, formado en la UCR y Máster en Calificación curricular. Incursionado en investigaciones con didáctica de la matemáticas y uso de IA para el análisis político.",
    socials: [
      {
        id: 1,
        icon: FaLinkedin,
        link: {
          href: "https://www.linkedin.com/in/esteban-martínez-07aaa174",
          newTab: true,
        },
        alt: "Linkedin",
      },
    ],
  },
];
