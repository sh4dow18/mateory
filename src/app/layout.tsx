// Main Layout Stylesheets
import "@/app/globals.css";
// Main Layout Requirements
import { Footer } from "@/shared/ui";
// Main Layout Main Function
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Returns Main Layout
  return (
    <html lang="es" className="bg-gray-950 font-inter">
      <body className="flex flex-col min-h-screen">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
