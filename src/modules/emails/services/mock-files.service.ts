// Mock Files Service Requirements
import { readFileSync } from "fs";
// Mock Files Service Constants
const PNG_IMAGE_PATH = "public/logos/logo-email.png";
// Mock Files Service Functions
export function CreateMockBufferImage(): Buffer {
  return readFileSync(PNG_IMAGE_PATH);
}
export function CreateMockImage(name: string): File {
  const BUFFER = readFileSync(PNG_IMAGE_PATH);
  return new File([BUFFER], name, {
    type: "image/png",
    lastModified: Date.now(),
  });
}
export function CreateMockFile(name: string): File {
  return new File(["not-an-image"], name, {
    type: "text/plain",
    lastModified: Date.now(),
  });
}
