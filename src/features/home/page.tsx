// Home Page Main Component Requirements
import { ROUTES_LIST, ROUTES_MAP } from "@/shared/config/routes";
import { Card, PageTitle, RedirectSection, SummaryCard } from "@/shared/ui";
import { RiInformationFill } from "react-icons/ri";
import { BENEFITS_LIST } from "./config";
// Home Page Main Component Main Function
function HomePage() {
  return (
    <>
      <PageTitle title="Bienvenido a" summary={ROUTES_MAP[""].summary} useLogo />
      {/* Home Page Main Component Pages Card Container */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ROUTES_LIST.filter((page) => page.inHome).map((page) => (
          <SummaryCard
            key={page.path}
            Icon={page.Icon}
            title={page.title}
            summary={page.summary}
            link={{
              href: page.path,
            }}
          />
        ))}
      </div>
      <Card>
        {/* Home Page Benefits Main Section */}
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-1 dark:text-primary-light font-small:text-xl font-large:text-3xl font-xlarge:text-4xl">
            Calcula más rápido y con confianza
          </h2>
          <p className="text-gray-700 dark:text-gray-400 high-contrast:text-black font-small:text-sm font-large:text-lg font-xlarge:text-xl">
            Mateory combina precisión matemática con una interfaz clara y accesible. Observa los
            beneficios principales de usar la herramienta:
          </p>
        </section>
        {/* Home Page Benefits Cards Container */}
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
      {/* Home Page Information Section */}
      <RedirectSection
        Icon={RiInformationFill}
        message="¿Quiere conocer más sobre Mateory?"
        link={{
          href: "/about",
          message: "Visita la sección de Información",
        }}
      />
    </>
  );
}

export default HomePage;
