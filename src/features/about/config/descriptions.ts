// Descriptions Information Requirements
import { IconType } from "react-icons";
import { FaCheck } from "react-icons/fa";
import { MdDescription, MdGroups, MdReportProblem } from "react-icons/md";
// Descriptions Information Types
type DescriptionInformation = {
  id: number;
  title: string;
  summary: string;
  icon: IconType;
};
// Descriptions Information List
export const DESCRIPTIONS_INFORMATION_LIST: DescriptionInformation[] = [
  {
    id: 1,
    title: "Descripción General",
    summary:
      "Mateory es una herramienta web que simplifica la resolución de problemas de Teorías de Inventarios y Teorías de Colas. Optimice sus cálculos y visualice las fórmulas detrás de cada modelo.",
    icon: MdDescription,
  },
  {
    id: 2,
    title: "Público Dirigido",
    summary:
      "Pensado para estudiantes y profesionales, ya que no es un sistema de inventarios, sino una herramienta para resolver teorías matemáticas sencillas de Investigación de Operaciones",
    icon: MdGroups,
  },
  {
    id: 3,
    title: "Problema a Resolver",
    summary:
      "Falta de una solución tecnológica gratuita y libre para realizar procedimientos matemáticos enfocados a teorías matemáticas",
    icon: MdReportProblem,
  },
  {
    id: 4,
    title: "Beneficio Principal",
    summary:
      "No se necesita perder tiempo con desarollando fórmulas complejas o largas, solamente se ingresan los datos y se obtienen resultados al instante.",
    icon: FaCheck,
  },
];
