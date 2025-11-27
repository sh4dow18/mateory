// Set this hook as a client hook
"use client";
// Use Drag and Drop Hook Requirements
import { useRef, useState } from "react";
import { DragAndDropStatus } from "../config/drag-and-drop";
// Use Drag and Drop Hook Main Function
function useDragAndDrop(allowedExtensions: string[], maxMegaBytes: number) {
  // Use Drag and Drop Hook Main Constants
  const DEFAULT_MESSAGE = "Haz clíc o arrastra archivos aquí";
  // Use Drag and Drop Hook Main Hooks
  const [status, setStatus] = useState<DragAndDropStatus>("Neutral");
  const [message, setMessage] = useState<string>(DEFAULT_MESSAGE);
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const REFERENCE = useRef<HTMLInputElement | null>(null);
  // Function that allow to check if the files submitted are valid
  const AreFilesValid = (files: File[]) => {
    // If have no files, return false
    if (files.length === 0) {
      setMessage("No hay Archivos para Enviar");
      return false;
    }
    // Check if have an invalid file
    let totalfilesSize = 0;
    const FILES_VALID = files.filter((file) => {
      // Check if the file is bigger than max MB size
      if (file.size > maxMegaBytes * 1024 * 1024) {
        setMessage(`El Archivo "${file.name}" es mayor a ${maxMegaBytes} MB`);
        return false;
      }
      // Get File Extension
      const EXTENSION = "." + file.name.split(".").pop()?.toLowerCase();
      // Check if the file has an allowed extension
      if (!allowedExtensions.includes(EXTENSION)) {
        setMessage(`El Archivo "${file.name}" no es válido`);
        return false;
      }
      // If the file is valid, get the size and save it
      totalfilesSize += file.size;
      return true;
    });
    // Check if all files are valid
    if (FILES_VALID.length !== files.length) {
      return false;
    }
    // Check if the total size of the files is bigger than max MB size
    if (totalfilesSize > 4 * 1024 * 1024) {
      setMessage(`Los Archivos juntos no pueden superar los ${maxMegaBytes} MB`);
      return false;
    }
    // Set successful message
    const FILES_MESSAGE_PLURAL = files.length === 1 ? "archivo listo" : "archivos listos";
    setMessage(`¡Hay ${files.length} ${FILES_MESSAGE_PLURAL} para subir!`);
    // If everything is ok, return true
    return true;
  };
  // Function that allows to the Drag and Drop Box Color Classes
  const GetBoxColorClasses = () => {
    // Check if there are files
    if (files.length > 0) {
      // Check if the files are valid
      if (status === "Valid") {
        return "bg-gray-100 dark:bg-gray-700 high-contrast:bg-white";
      }
      // If files are invalid, set invalid colors
      return "bg-red-300 dark:bg-red-900 high-contrast:bg-red-500";
    }
    // Check if is dragging, if so, set dragging colors
    if (isDragging) {
      return "bg-primary-light";
    }
    // Return Neutral Colors
    return "bg-white outline-gray-400 focus-within:outline-primary dark:bg-gray-800 dark:outline-gray-600 high-contrast:bg-white high-contrast:outline-black";
  };
  // Function that allows to the Drag and Drop Message Color Classes
  const GetMessageColorClasses = () => {
    // Check if there are files
    if (files.length > 0) {
      return "text-black dark:text-white";
    }
    // Check if is dragging, if so, set dragging colors
    if (isDragging) {
      return "text-white";
    }
    // Else, Return default classes
    return "text-gray-500 dark:text-gray-400 high-contrast:text-black";
  };
  // Input File On Change Function
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Get Files
    const FILES = event.target.files;
    // If the files exists, set the files and check if the are valid
    if (FILES) {
      setFiles(Array.from(FILES));
      const FILES_LIST = Array.from(FILES);
      const NEW_STATUS = AreFilesValid(FILES_LIST) ? "Valid" : "Invalid";
      setStatus(NEW_STATUS);
    }
  };
  // Drag and Drop On Click Function
  const onClick = () => (REFERENCE.current !== undefined ? REFERENCE.current?.click() : undefined);
  // Drag and Drop On Drag Over Function
  const onDragOver = (event: React.DragEvent<HTMLButtonElement>) => {
    // Avoid open image in browser
    event.preventDefault();
    // Set Drag Over Message
    setMessage("¡Suelta los archivos aquí!");
    // Set Dragging as true
    setIsDragging(true);
  };
  // Drag and Drop On Drag Leave Function
  const onDragLeave = (event: React.DragEvent<HTMLButtonElement>) => {
    // Avoid open image in browser
    event.preventDefault();
    // Set Drag Over Message
    setMessage(DEFAULT_MESSAGE);
    // Set Dragging as true
    setIsDragging(false);
  };
  // Drag and Drop On Drop Function
  const onDrop = (event: React.DragEvent<HTMLButtonElement>) => {
    // Avoid open image in browser
    event.preventDefault();
    // Set Dragging as true
    setIsDragging(false);
    // Get dropped files
    const FILES = event.dataTransfer.files;
    // Set the files
    setFiles([...FILES]);
    // If Reference current exists, check if there are valid, then add the files to input file
    if (REFERENCE.current) {
      const FILES_VALID = AreFilesValid(Array.from(FILES));
      setStatus(FILES_VALID ? "Valid" : "Invalid");
      REFERENCE.current.files = FILES;
    }
  };
  // Return Hooks Values
  return {
    invalid: status !== "Neutral" ? status === "Invalid" : undefined,
    message,
    reference: REFERENCE,
    boxColorClasses: GetBoxColorClasses(),
    messageColorClasses: GetMessageColorClasses(),
    onChange,
    onClick,
    onDragOver,
    onDragLeave,
    onDrop,
  };
}

export default useDragAndDrop;
