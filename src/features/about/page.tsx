// About Page Requirements
import { ROUTES_MAP } from "@/shared/config/routes";
import { PageTitle, SectionCard, SummaryCard } from "@/shared/ui";
import {
  COLAB_LIST,
  DESCRIPTIONS_INFORMATION_LIST,
  ESSENTIAL_INFORMATION_LIST,
  POLICIES_LIST,
  STACK_LIST,
} from "./config";
import { ProfileCard } from "./ui";
// About Page Main Function
function AboutPage() {
  return (
    <>
      <PageTitle title="Sobre" summary={ROUTES_MAP["about"].summary} useLogo />
      <SectionCard
        title="Información Escencial"
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4"
      >
        {ESSENTIAL_INFORMATION_LIST.map((info) => (
          <SummaryCard
            key={info.id}
            title={info.title}
            summary={info.summary}
            link={info.link}
            Icon={info.icon}
          />
        ))}
      </SectionCard>
      <SectionCard title="Descripciones" className="grid grid-cols-1 gap-3 xl:grid-cols-2">
        {DESCRIPTIONS_INFORMATION_LIST.map((info) => (
          <SummaryCard key={info.id} title={info.title} summary={info.summary} Icon={info.icon} />
        ))}
      </SectionCard>
      <SectionCard
        title="Colaboradores"
        className="grid grid-cols-1 gap-3 min-[1054px]:grid-cols-2 font-xlarge:min-[1054px]:grid-cols-1 font-xlarge:min-[1177px]:grid-cols-2"
      >
        {COLAB_LIST.map((info) => (
          <ProfileCard
            key={info.id}
            photo={info.photo}
            name={info.name}
            role={info.role}
            summary={info.summary}
            socials={info.socials}
          />
        ))}
      </SectionCard>
      <SectionCard
        title="Tecnologías Utilizadas"
        className="grid grid-cols-1 gap-3 min-[651px]:grid-cols-2"
      >
        {STACK_LIST.map((info) => (
          <SummaryCard key={info.id} title={info.title} summary={info.summary} Icon={info.icon} />
        ))}
      </SectionCard>
      <SectionCard title="Políticas" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {POLICIES_LIST.map((info) => (
          <SummaryCard
            key={info.id}
            title={info.title}
            summary={info.summary}
            Icon={info.icon}
            link={info.link}
          />
        ))}
      </SectionCard>
    </>
  );
}

export default AboutPage;
