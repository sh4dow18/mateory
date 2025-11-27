// Send Email Service Requirements
import nodemailer from "nodemailer";
import { Attachment } from "nodemailer/lib/mailer";
// Send Email Service Main Constants
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;
// Send Email Service Main Function
// Used to send an email as HTML
export async function SendEmail(subject: string, html: string, filesList?: File[] | Buffer[]) {
  // Used to define Gmail's requirements for sending an email by code
  const TRANSPORTER = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: true,
    port: 465,
    auth: { user: EMAIL, pass: PASSWORD },
  });
  // Send Email Main Constants
  let attachmentsList: Attachment[] | undefined = undefined;
  // If filesList exists, transform Files to Attachments
  if (filesList) {
    attachmentsList = await Promise.all(
      filesList.map(async (file) => ({
        filename: file instanceof File ? file.name : "",
        content: file instanceof File ? Buffer.from(await file.arrayBuffer()) : file,
      })),
    );
  }
  // Send Email with Transporter
  return TRANSPORTER.sendMail({
    from: EMAIL,
    to: EMAIL,
    subject: subject,
    html: html,
    attachments: attachmentsList,
  });
}
