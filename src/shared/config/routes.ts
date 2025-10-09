// Routes Requirements
import { IconType } from "react-icons";
import { FaBook, FaBox, FaClock, FaHome, FaInfoCircle } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
// Route Type
type Route = {
  readonly path: string;
  readonly title: string;
  readonly summary: string;
  readonly Icon: IconType;
  readonly inSitemap: boolean;
  readonly inHome: boolean;
};
// Routes List
export const ROUTES_LIST: Route[] = [
  {
    path: "",
    title: "Inicio",
    summary: "Página Principal de Mateory",
    Icon: FaHome,
    inSitemap: true,
    inHome: false,
  },
  {
    path: "inventary",
    title: "Inventarios",
    summary:
      "Calcula modelos de inventarios como EOQ con o sin déficit, optimizando sus decisiones.",
    Icon: FaBox,
    inSitemap: true,
    inHome: true,
  },
  {
    path: "queues",
    title: "Colas",
    summary:
      "Analiza sistemas de colas como M/M/1 y M/M/∞, obteniendo resultados rápidos y confiables.",
    Icon: FaClock,
    inSitemap: true,
    inHome: true,
  },
  {
    path: "formulas",
    title: "Fórmulas",
    summary: "Consulta las fórmulas y modelos matemáticos utilizados en cada cálculo.",
    Icon: FaBook,
    inSitemap: true,
    inHome: true,
  },
  {
    path: "getting-started",
    title: "¿Cómo funciona?",
    summary: "Aprende a utilizar Mateory paso a paso con una guía clara y sencilla.",
    Icon: IoMdHelpCircle,
    inSitemap: true,
    inHome: true,
  },
  {
    path: "help",
    title: "Información",
    summary: "Página de Información y Colaboradores de Mateory",
    Icon: FaInfoCircle,
    inSitemap: false,
    inHome: false,
  },
];
