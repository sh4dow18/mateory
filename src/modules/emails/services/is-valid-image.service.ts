// Is Valid Image Service Requirements
import sharp from "sharp";
// Is Valid Image Service Main Function
export async function IsValidImage(file: File | Buffer): Promise<boolean> {
  try {
    // Convert the file to a binary data buffer
    const BUFFER = file instanceof File ? Buffer.from(await file.arrayBuffer()) : file;
    // Use "sharp" to process the buffer and get the image metadata
    await sharp(Buffer.from(BUFFER)).metadata();
    // If the image is valid, return true
    return true;
  } catch {
    // If the image is invalid, return false
    return false;
  }
}
