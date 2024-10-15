// Main Layout Stylesheets
import "@/stylesheets/globals.css";
// Main Layout Requirements
import Link from "next/link";
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
        <header>
          {/* Project Name */}
          <Link href="/">
            <p>Mateory</p>
          </Link>
          <nav>
            <Link href="/inventory">Inventarios</Link>
            <Link href="/queue">Colas</Link>
          </nav>
        </header>
        {/* Page Container */}
        <main>{children}</main>
        <footer>
          {/* Credits */}
          <div>
            {/* Page built by */}
            <p>
              Página hecha por{" "}
              <Link href="https://digital-me.vercel.app">Ramsés Solano</Link> en{" "}
              <Link href="https://braitec.vercel.app">
                Braitec: Soluciones Tecnológicas
              </Link>
            </p>
            {/* Braitec Copyright */}
            <p>
              Copyright ©{" "}
              <Link href="https://braitec.vercel.app">
                Braitec: Soluciones Tecnológicas
              </Link>{" "}
              {/* Last Update */}
              13 de Octubre del 2024
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
