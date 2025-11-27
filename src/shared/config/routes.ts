// Routes Requirements
import { IconType } from "react-icons";
import { FaBox, FaClock, FaHome, FaInfoCircle } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";
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
    summary:
      "Mateory es una herramienta web que simplifica la resolución de problemas de Teorías de Inventarios y Teorías de Colas. Optimice sus cálculos y visualice las fórmulas detrás de cada modelo.",
    Icon: FaHome,
    inSitemap: true,
    inHome: false,
  },
  {
    path: "inventories",
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
    path: "report-bug",
    title: "Reportar Problema",
    summary: "Ayuda a tener el sistema al día reportando los problemas que encuentre en Mateory.",
    Icon: MdReportProblem,
    inSitemap: false,
    inHome: true,
  },
  {
    path: "about",
    title: "Información",
    summary: "Página de Información y Colaboradores de Mateory",
    Icon: FaInfoCircle,
    inSitemap: false,
    inHome: false,
  },
];
// Map that allows to get page data easier
export const ROUTES_MAP = Object.fromEntries(ROUTES_LIST.map((route) => [route.path, route]));
