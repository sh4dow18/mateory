// Report Bug Email Template Requirements
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Img,
  Text,
  Link,
  Tailwind,
  Hr,
} from "@react-email/components";
// Report Bug Email Template Props
interface Props {
  readonly name: string;
  readonly email: string;
  readonly message: string;
}
// Report Bug Email Template Main Props
export default function ReportBugEmail({ name, email, message }: Props) {
  return (
    <Html lang="es">
      <Head />
      <Preview>Nuevo reporte registrado — Mateory Dashboard</Preview>
      <Tailwind>
        <Body className="m-0 p-0 bg-gray-100 font-sans text-gray-900">
          {/* Header */}
          <Section className="p-4 text-center">
            <Img
              src="https://mateory.vercel.app/logos/logo-email.png"
              alt="Mateory Logo"
              className="h-[32px] w-auto mx-auto"
            />
          </Section>
          {/* Main Card */}
          <Section className="w-full py-8">
            {/* Information Card */}
            <Container
              className="bg-white rounded-lg p-8"
              style={{
                width: "600px",
                maxWidth: "600px",
                margin: "0 auto",
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
              }}
            >
              {/* Title Section */}
              <Section>
                {/* Title */}
                <Text className="text-xl font-bold mb">Nuevo Reporte Recibido</Text>
                {/* Description */}
                <Text className="mb-6 leading-relaxed">
                  Se ha registrado un nuevo reporte enviado por un usuario a través del formulario
                  de incidencias de la plataforma. A continuación se detalla la información
                  correspondiente para iniciar el proceso de revisión.
                </Text>
                <Hr className="border-gray-200" />
              </Section>
              {/* User Information Section */}
              <Section>
                {/* Title */}
                <Text className="text-base font-semibold">Datos del Usuario</Text>
                {/* Name */}
                <Text>
                  <strong>Nombre:</strong> {name}
                </Text>
                {/* Email */}
                <Text className="mb-4">
                  <strong>Correo electrónico:</strong> {email}
                </Text>
                <Hr className="border-gray-200" />
              </Section>
              {/* Report Message Section */}
              <Section>
                {/* Title */}
                <Text className="text-base font-semibold">Reporte</Text>
                {/* Description */}
                <Text className="text-sm mb-2">
                  El usuario ha proporcionado la siguiente descripción del problema:
                </Text>
                {/* Message Box */}
                <Section
                  className="bg-gray-50 p-4 rounded-md mb-6"
                  style={{
                    background: "#f9fafb",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                >
                  {/* Message */}
                  <Text className="text-gray-800 italic">{`"${message}"`}</Text>
                </Section>
                <Hr className="border-gray-200" />
              </Section>
              {/* Step to Follow Section */}
              <Section>
                {/* Title */}
                <Text className="text-base font-semibold">Paso a Seguir</Text>
                {/* Description */}
                <Text>
                  Para mantener el control, trazabilidad y documentación interna del proyecto, favor
                  registrar este incidente como un <strong>Issue</strong> dentro del repositorio
                  oficial en GitHub. Esto permite asignar responsables, dar seguimiento al progreso
                  y asegurar que la incidencia quede rastreada de manera adecuada.
                </Text>
                {/* Create Issue Span */}
                <Text>Puede crear el issue directamente en el siguiente enlace:</Text>
                {/* Create Issue Link */}
                <Link
                  href="https://github.com/sh4dow18/mateory/issues/new"
                  className="font-semibold no-underline block mt-2"
                >
                  ➝ Registrar nuevo Issue en GitHub
                </Link>
                <Hr className="border-gray-200" />
              </Section>
              {/* Closing Section */}
              <Section>
                {/* Description */}
                <Text>
                  Gracias por tu gestión y compromiso con la calidad de la plataforma. Si el reporte
                  requiere confirmación o información adicional por parte del usuario, recomendamos
                  comunicarse directamente con él utilizando el correo proporcionado.
                </Text>
                {/* Atte Text */}
                <Text>Atentamente,</Text>
                <Text className="font-semibold">Mateory – Sistema Automatizado de Reportes</Text>
              </Section>
            </Container>
          </Section>
          {/* Footer */}
          <Section className="text-center text-xs text-gray-500 mb-4 px-6">
            {/* Auto Email Text */}
            <Text>Este es un correo automático. No responda a este mensaje.</Text>
            {/* Copyright Text */}
            <Text>© {new Date().getFullYear()} Mateory.</Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}
