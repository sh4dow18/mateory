// Main Layout Stylesheets
import "@/app/globals.css";
// Main Layout Requirements
import { Footer, Header } from "@/shared/ui";
import { SidebarNav } from "@/widgets/navigation/ui";
import { Metadata } from "next";
// Main Layout Metadata
export const metadata: Metadata = {
  title: {
    default: "Mateory",
    template: "%s | Mateory",
  },
  description:
    "Mateory es una herramienta web que simplifica la resolución de problemas de Teorías de Inventarios y Teorías de Colas.",
  keywords: [
    "teoría de colas",
    "teoría de inventarios",
    "investigación de operaciones",
    "optimización",
    "Mateory",
  ],
};
// Main Layout Main Function
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Returns Main Layout
  return (
    <html lang="es">
      <body className="flex flex-col h-screen bg-gray-50 overflow-hidden font-inter dark:bg-gray-950 high-contrast:bg-white">
        <Header />
        <div className="flex flex-1 h-[calc(100svh-69px-81px)] overflow-hidden">
          <SidebarNav />
          <main className="flex-1 overflow-y-auto space-y-8 py-8 px-4 md:px-8">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
