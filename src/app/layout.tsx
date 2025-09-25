// Main Layout Stylesheets
import "@/app/globals.css";
// Main Layout Main Function
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Returns Main Layout
  return (
    <html lang="es">
      <body>
        {/* Page Container */}
        <main>{children}</main>
      </body>
    </html>
  );
}
