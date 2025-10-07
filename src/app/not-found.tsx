// Not Found Requirements
import { Metadata } from "next";
import Link from "next/link";
// Not Found Metadata
export const metadata: Metadata = {
  title: "Página No Encontrada",
  description: "Lo sentimos, no se pudo encontrar la página que está buscando.",
};
// Not Found Main Function
function NotFound() {
  // Returns Not Found Component
  return (
    // Not Found Container
    <div className="flex justify-center items-center h-full">
      <div className="text-center px-10">
        {/* Not Found Code */}
        <span className="text-primary-light font-semibold mb-2 text-center">404</span>
        {/* Not Found information section */}
        <section className="flex flex-col gap-5 items-center">
          {/* Not Found Title */}
          <h1 className="text-gray-700 text-[2.5rem] leading-none font-bold dark:text-gray-300 high-contrast:text-black md:text-5xl lg:text-6xl font-small:text-3xl font-small:md:text-4xl font-small:lg:text-5xl font-large:min-[402px]:text-5xl font-large:md:text-6xl font-large:lg:text-7xl font-xlarge:min-[402px]:text-6xl font-xlarge:md:text-7xl font-xlarge:lg:text-8xl">
            Contenido No Encontrado
          </h1>
          {/* Not Found Description */}
          <p className="dark:text-gray-400 high-contrast:text-black font-small:text-sm font-large:text-lg font-xlarge:text-xl">
            Lo sentimos, no se pudo encontrar el contenido que está buscando.
          </p>
          {/* Not Found Link */}
          <Link
            href="/"
            className="w-fit bg-primary text-white px-4 py-2 font-medium rounded-md text-center hover:bg-primary-light"
          >
            Volver al Inicio
          </Link>
        </section>
      </div>
    </div>
  );
}

export default NotFound;
