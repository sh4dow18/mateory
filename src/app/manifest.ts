// Manifest Requirements
import type { MetadataRoute } from "next";
// Manifest Main Function
export default function manifest(): MetadataRoute.Manifest {
  // Returns Manifest JSON File
  return {
    name: "Mateory",
    short_name: "Mateory",
    description:
      "Mateory es una herramienta web que ayuda a resolver problemas sencillos de teorías matemáticas, como las Teorías de Inventarios y las Teorías de Colas, con unos pocos clics, tomando modelos matemáticos preexistentes, como el EOQ con modelo de déficit para inventarios o el M/M/1:FIFO/∞/∞ para colas",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
