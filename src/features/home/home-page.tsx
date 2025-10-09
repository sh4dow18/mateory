// Home Page Main Component Requirements
import { ROUTES_LIST } from "@/shared/config/routes";
import { Card, MateoryLogo } from "@/shared/ui";
import Link from "next/link";
import { RiInformationFill } from "react-icons/ri";
import { SummaryCard } from "./ui";
import { BENEFITS_LIST } from "./config";
// Home Page Main Component Main Function
function HomePage() {
  return (
    <>
      {/* Home Page Main Component Main Section */}
      <section className="space-y-4">
        <section className="flex flex-wrap gap-2 items-center sm:gap-4">
          <h1 className="text-3xl font-semibold text-primary dark:text-primary-light sm:text-4xl font-small:text-2xl font-small:sm:text-3xl font-large:text-4xl font-large:sm:text-5xl font-xlarge:text-5xl font-xlarge:sm:text-6xl">
            Bienvenido a
          </h1>
          <MateoryLogo
            width={288}
            height={48}
            className="w-48 h-8 font-large:sm:w-64 font-large:sm:h-10 font-xlarge:sm:w-72 font-xlarge:sm:h-12"
          />
        </section>
        <p className="text-lg text-gray-700 dark:text-gray-400 high-contrast:text-black font-small:text-base font-large:text-xl font-xlarge:text-2xl">
          Mateory es una herramienta web que simplifica la resolución de problemas de{" "}
          <strong>Teorías de Inventarios</strong> y <strong>Teorías de Colas</strong>. Optimice sus
          cálculos y visualice las fórmulas detrás de cada modelo.
        </p>
      </section>
      {/* Home Page Main Component Pages Card Container */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ROUTES_LIST.filter((page) => page.inHome).map((page) => (
          <SummaryCard
            key={page.path}
            Icon={page.Icon}
            title={page.title}
            summary={page.summary}
            link={page.path}
          />
        ))}
      </div>
      {/* Home Page Main Component Benefits Card */}
      <Card>
        {/* Home Page Main Component Benefits Card Main Section */}
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-1 dark:text-primary-light font-small:text-xl font-large:text-3xl font-xlarge:text-4xl">
            Calcula más rápido y con confianza
          </h2>
          <p className="text-gray-700 dark:text-gray-400 high-contrast:text-black font-small:text-sm font-large:text-lg font-xlarge:text-xl">
            Mateory combina precisión matemática con una interfaz clara y accesible. Observa los
            beneficios principales de usar la herramienta:
          </p>
        </section>
        {/* Home Page Main Component Benefits Cards Container */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS_LIST.map((benefit) => (
            <SummaryCard
              key={benefit.id}
              Icon={benefit.Icon}
              title={benefit.title}
              summary={benefit.summary}
              colored
              wrapTitle
            />
          ))}
        </div>
      </Card>
      {/* Home Page Main Component Information Section */}
      <section className="flex flex-col gap-1 text-gray-600 justify-self-center text-center dark:text-gray-400 high-contrast:text-black font-small:text-sm font-large:text-lg font-xlarge:text-xl md:flex-row md:text-left">
        <RiInformationFill className="w-6 h-6 mx-auto md:mx-0" />
        <p>¿Quieres conocer más sobre Mateory? </p>
        <Link
          href="/about"
          className="text-primary font-medium hover:underline dark:text-primary-light"
        >
          Visita la sección de Información
        </Link>
      </section>
    </>
  );
}

export default HomePage;
