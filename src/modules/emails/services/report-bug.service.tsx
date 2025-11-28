// Email Library Requirements
import React from "react";
import { SendEmail } from "./send-email.service";
import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import ReportBugEmail from "@/emails/report-bug-email";
import { IsValidImage } from "./is-valid-image.service";
// Email Route Post Function
export async function ReportBug(request: Request) {
  // Request Form Values
  const FORM_DATA = await request.formData();
  // Get all values
  const NAME = FORM_DATA.get("userName") as string;
  const EMAIL = FORM_DATA.get("email") as string;
  const MESSAGE = FORM_DATA.get("message") as string;
  const FILES = FORM_DATA.getAll("files") as File[];
  // Check if all files sent are real images
  const VALIDATION_RESULTS = await Promise.all(FILES.map(IsValidImage));
  // Get Invalid Files filtering in Files with Validation Result
  const INVALID_FILES_LIST = FILES.filter((_, index) => !VALIDATION_RESULTS[index]);
  // Check if there is a Invalid Files
  if (INVALID_FILES_LIST.length > 0) {
    // Check if there is one or more invalid files
    const INVALID_FILES_MESSAGE = INVALID_FILES_LIST.map((file) => file.name).join(", ");
    const ERROR_MESSAGE =
      INVALID_FILES_LIST.length === 1
        ? `El archivo "${INVALID_FILES_MESSAGE}" no es una imagen`
        : `Los archivos "${INVALID_FILES_MESSAGE}" no son imágenes`;
    // Return Invalid files message
    return NextResponse.json({ error: ERROR_MESSAGE }, { status: 400 });
  }
  // Get HTML From React Email Template
  const HTML = await render(<ReportBugEmail name={NAME} email={EMAIL} message={MESSAGE} />);
  // Send Email
  await SendEmail("Problema Reportado en Mateory", HTML, FILES);
  // Return the Email Response
  return NextResponse.json({ message: "Reporte Realizado con Éxito" }, { status: 200 });
}
