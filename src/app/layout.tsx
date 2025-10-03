// Main Layout Stylesheets
import "@/app/globals.css";
// Main Layout Requirements
import { Footer, Header } from "@/shared/ui";
import { SidebarNav } from "@/widgets/navigation/ui";
// Main Layout Main Function
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Returns Main Layout
  return (
    <html lang="es">
      <body className="flex flex-col h-screen bg-gray-50 overflow-hidden font-inter dark:bg-gray-950">
        <Header />
        <div className="flex flex-1 h-[calc(100svh-69px-81px)] overflow-hidden">
          <SidebarNav />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
