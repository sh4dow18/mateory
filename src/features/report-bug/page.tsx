// Set this hook as a client hook
"use client";
// Report Bug Page Requirements
import { ROUTES_MAP } from "@/shared/config/routes";
import { PageTitle, RedirectSection } from "@/shared/ui";
import { Button, DragAndDrop, Form, Input, Textarea } from "@/widgets/forms/ui";
import { FaGithub } from "react-icons/fa";
import { useReportBug } from "./model";
// Report Bug Page Main Constants
const PAGE_DATA = ROUTES_MAP["report-bug"];
// Report Bug Page Main Function
function ReportBugPage() {
  // Report Bug Page Main Hooks
  const { onSubmitForm } = useReportBug();
  // Return Report Bug Page
  return (
    <>
      <PageTitle title={PAGE_DATA.title} summary={PAGE_DATA.summary} />
      <Form
        id="report-bug-form"
        onSubmit={onSubmitForm}
        className="grid grid-cols-1 gap-5 min-[1203px]:grid-cols-2"
        successAlertMessage="Reporte Enviado"
      >
        {/* Name Input */}
        <Input label="Nombre" example="Ramsés Solano" name="userName" validation="name" />
        {/* Email Input */}
        <Input
          label="Correo Electrónico"
          example="sh4dow18@mateory.com"
          name="email"
          validation="email"
        />
        {/* Message Textarea */}
        <Textarea
          label="Mensaje"
          example="No me deja ingresar los datos en el formulario"
          name="message"
        />
        {/* Files Drag and Drop */}
        <DragAndDrop
          label="Evidencia"
          name="files"
          allowedExtensions={[".png", ".jpg", ".jpeg"]}
          maxMegaBytes={4}
        />
      </Form>
      {/* Form Button */}
      <Button form="report-bug-form" display="Reportar" full />
      {/* Report on Github Section */}
      <RedirectSection
        Icon={FaGithub}
        message="¿Tiene Github?"
        link={{
          href: "https://github.com/sh4dow18/mateory/issues/new",
          newTab: true,
          message: "Reportar en Github",
        }}
      />
    </>
  );
}

export default ReportBugPage;
